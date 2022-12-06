// exports.clientes_get = function (req, res) {
//     // the `function(err, params) {...}` here is your callback
//     getFaculty(req, function(err, params) {
//         if (err) {
//             return res.send(err);
//         }
//         res.json(params);
//     });
// }
// {service element} = require from service layer

// exports.removeById = (req, res) => {
//     UserModel.removeById(req.params.userId)
//         .then((result)=>{
//             res.status(204).send({});
//         });
//  };
import Faculty from '../models/Faculty.js';
import Outpass from '../models/Outpass.js';
import FacultyService from '../services/facultyServices.js'
import Role from '../models/roles.js'

const facultyServices = new FacultyService();

export const getFacultyController = async (req, res) => {
    try {
        const faculty = await facultyServices.getFacultyService(req)
        res.status(200).send(faculty)
    } catch (e) {
        res.status(500).send(e)
    }
}

export const insertFacultyController = async (req, res) => {
    try {
        const newfaculty = await facultyServices.createFacultyService(req)
        console.log(newfaculty)
        res.status(200).send(newfaculty.data)
    } catch (e) {
        res.status(500).send(e)
    }
}

export const updateFacultyController = async (req, res) => {
    try {
        await facultyServices.updateFacultyService(req)
        res.status(200).send({success: true, message: "updated successfully"})
    } catch (e) {
        res.status(500).send(e)
    }
}

export const deleteFacultyController = async (req, res) => {
    try {
        await facultyServices.deleteFacultyService(req)
        res.status(200).send({success: true, message: "deleted successfully"})
    } catch (e) {
        res.status(500).send(e)
    }
}

export const outpassApproval = async (req, res) => {
    try{
        const outpass = await Outpass.findById(req.body.outpassId)
        const faculty = await Faculty.findById(req.body.facultyId)
        const intent = req.body.intent
        const remark = req.body.rejectreason

        if(!faculty.outpasses.includes(outpass._id)){
            res.send("No outpasses found").status(400)
        }

        const date1 = new Date(outpass.dateofjourney);
        const date2 = new Date(outpass.dateofreturn);

        let Difference_In_Time = date2.getTime() - date1.getTime();
        let noofdays = Difference_In_Time / (1000 * 3600 * 24);

        if(intent){
            if(outpass.approvalStatus === 'notApproved'){
                outpass.approvalStatus = 'facApproved'
            }
            else if(outpass.approvalStatus === 'facApproved'){
                if(noofdays>10){
                    outpass.approvalStatus = 'corApproved'
                } else {
                    outpass.approvalStatus = 'warApproved'
                }
            }
            else if(outpass.approvalStatus === 'corApproved'){
                outpass.approvalStatus = 'warApproved'
            }
            
            await outpass.save()

            const role = await Role.find({})

            if(outpass.approvalStatus === 'corApproved' || (outpass.approvalStatus === 'facApproved' && noofdays <= 10)){
                var length = role[0].warden.length
                const wardenId = role[0].warden[Math.floor(Math.random()*length)]
                const warden = await Faculty.findById(wardenId)
                warden.outpasses.push(outpass)
                await warden.save()
            }
            if(outpass.approvalStatus === 'facApproved' && noofdays > 10){
                var length = role[0].swe.length
                const swcId = role[0].swe[Math.floor(Math.random()*length)]
                const swc = await Faculty.findById(swcId)
                swc.outpasses.push(outpass)
                await swc.save()
            }

            res.send({outpass}).status(200)
            
        } else {
            outpass.isRejected = true
            outpass.remarks = remark
            await outpass.save()
            res.send({outpass}).status(200)
        }

        const index = faculty.outpasses.indexOf(outpass._id)
        faculty.outpasses.splice(index, 1)
        await faculty.save()

    } catch(e) {
        console.log(e)
        res.send(e).status(400)
    }
}