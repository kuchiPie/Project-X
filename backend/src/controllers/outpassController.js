import 'express-async-handler';
import Outpass from '../models/Outpass.js'

//@description     Get all Outpass
//@route           GET /api/outpass/
//@access          Now Open but make it protected
export const getAllOutpass = async(req,res)=>{
    const {studentId} = req.body;
    if(!studentId){
        res.status(400).json({message:"Provide a student ID"})
        return;
    }
    try{
        const outpasses = await Outpass.find({studentId:studentId});
        res.status(200).json(outpasses);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
};


//@description     Create an outpass
//@route           POST /api/outpass/
//@access          Now Open but make it protected
export const createNewOutpass=async(req,res)=>{
    const {studentId,dateofjourney,dateofreturn,ticket}=req.body;

    // Bad Request
    if(dateofjourney>dateofreturn){
        res.status(400).json({message:"Date of Journey should be smaller than date of return"});
        return;
    }

    // Bad Request
    if(!studentId||!dateofjourney||!dateofreturn){
        res.status(400).json({message:"Please pass all fields"});
        return;
    }

    var outpass={
        studentId:studentId,
        dateofjourney:dateofjourney,
        dateofreturn:dateofreturn,
        ticket:ticket
    };

    try{
        var newOutpass = await Outpass.create(outpass);
        res.status(201).json(newOutpass);
    }
    catch(error){
        res.status(400).json({message:"Some error occured"});
    }
};