import 'express-async-handler';
import Outpass from '../models/Outpass.js'
import Student from '../models/Student.js'
import Faculty from '../models/Faculty.js';

//@description     Get all Outpass
//@route           GET /api/outpass/
//@access          Now Open but make it protected
export const getAllOutpass = async(req,res)=>{
    const studentId = req.params.id;
    if(!studentId){
        res.status(400).json({message:"Provide a student ID"})
        return;
    }
    try{
        const student = await Student.findById(studentId)
        console.log(student)
        const { outpasses } = await student.populate('outpasses')
        console.log(outpasses)
        res.status(200).json(outpasses);
    }
    catch(error){
        console.log(error)
        res.status(400).json({message:error.message});
    }
};


//@description     Create an outpass
//@route           POST /api/outpass/
//@access          Now Open but make it protected
export const createNewOutpass=async(req,res)=>{
    const { studentId, dateofjourney, dateofreturn, ticket, contactNo, reason, hostelRoom, leaveTime, returnTime }=req.body;

    const dateofJ = new Date(dateofjourney) 
    const dateofR = new Date(dateofreturn)
    console.log(dateofJ, dateofR)
    console.log(req.body)

    // Bad Request
    if(!studentId||!dateofjourney||!dateofreturn){
        res.status(400).json({message:"Please pass all fields"});
        return;
    }

    // Bad Request
    if(dateofJ>dateofR){
        res.status(400).json({message:"Date of Journey should be smaller than date of return"});
        return;
    }

    const outpass={
        studentId:studentId,
        dateofjourney:dateofjourney,
        dateofreturn:dateofreturn,
        ticket:ticket,
        contactNo, reason, hostelRoom, leaveTime, returnTime
    };

    try{
        const student = await Student.findById(studentId)
        const faculty = await Faculty.findById(student.facultyAdvisor)
        const newOutpass = await Outpass.create(outpass)
        student.outpasses.push(newOutpass._id)
        student.currOutpass = newOutpass._id
        await student.save()
        faculty.outpasses.push(newOutpass._id)
        await faculty.save()
        console.log(student)
        res.status(201).json(newOutpass);
    }
    catch(error){
        res.status(400).send({message:"Some error occured"});
    }
};

export const getcurrentOutpass = async(req, res) => {
    try{
        const studentid = req.params.id.replace(/"/g, '');
        const student = await Student.findById(studentid)
        const currentOutpass = await Outpass.findById(student.currOutpass)
        res.status(200).send(currentOutpass)
    } catch(e) {
        console.log(e)
        res.status(400).send(e)
    }
}

export const withdrawOutpass = async(req, res) => {
    try{
        const studentId = req.params.id
        const student = await Student.findById(studentId)
        const outpassId = student.currOutpass
        
        const index = student.outpasses.indexOf(student.currOutpass)
        student.outpasses.splice(index, 1)
        student.currOutpass = undefined
        await student.save()

        const faculty = await Faculty.findById(student.facultyAdvisor)
        const index2 = faculty.outpasses.indexOf(outpassId)
        faculty.outpasses.splice(index2, 1)
        await faculty.save()

        await Outpass.findByIdAndDelete(outpassId)
        res.status(200).send(student)
    } catch(e) {
        console.log(e)
    }
}

export const toggleCheckedInOutStatus=async(req,res)=>{
    try{
        const outpassId=req.query.id;
        const outpass = await Outpass.findById(outpassId);
        // console.log(outpass);
        if(outpass===undefined){
            // console.log('if');
            res.status(401).send({message:'The scanned document is invalid'});
            return;
        }
        else if(outpass.isApproved){
            // console.log('else if 1');
            if(outpass.hasCheckedOut===false){
                // console.log(new Date);
                // console.log(new Date());
                if(new Date>=outpass.dateofjourney){
                    await Outpass.findByIdAndUpdate(outpassId,{hasCheckedOut:true,checkoutTime:new Date()});
                    res.status(200).send({message:'The student is allowed to go now'});
                    return;
                }
                else{
                    res.status(400).send({message:'Today date is less than the leaving date on the outpass'})
                    return;
                }
            }
            else if(outpass.hasArrived===false){
                // console.log('else if 2');
                await Outpass.findByIdAndUpdate(outpassId,{hasArrived:true,arrivalTime:new Date()});
                res.status(200).send({message:'The student is allowed to enter the campus'});
                return;
            }
            else{
                // console.log('else');
                res.status(400).send({message:'Invalid Request'});
                return;
            }
        }
        else{
            // console.log('error')
            res.status(400).send({message:'Outpass is not verified yet'});
            return;
        }
    }
    catch(e){
        res.status(400).send({message:'Some error occured'});
    }
}