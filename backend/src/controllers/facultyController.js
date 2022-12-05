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
        const faculty = await Faculty.findById(req.body.facultyID)
        const intent = req.body.intent

        if(!faculty.outpasses.includes(outpass._id)){
            res.send("No outpasses found").status(400)
        }

        if(intent){
            outpass.status = 'facApproved'
            await outpass.save()
            const index = faculty.outpasses.indexOf(outpass._id)
            faculty.outpasses.splice(index, 1)
            await faculty.save()
        } else {
            
        }

    } catch(e) {

    }
}