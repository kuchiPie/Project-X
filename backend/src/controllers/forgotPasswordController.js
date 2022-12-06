import Student from '../models/Student.js';
import Faculty from '../models/Faculty.js';
import Admin from '../models/Admin.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';
import validateLoginInput from '../validation/login.js'
import { sendMail } from './emailController.js';
import generator from 'generate-password';

function forgotPasswordController(req, res) {
    var salt = bcrypt.genSaltSync(10);

    const email = req.body.username;
    const userType = req.body.userType;
    

    

    var newPassword = generator.generate({
        length: 10,
        numbers: true
    });

    var hashedPassword = bcrypt.hashSync(newPassword, salt);

    async function sendForgotPasswordMail(status) {
        switch(status) {
            case 'Admin':
                const admin = await Admin.findOne({ email: email })
                if (!admin) {
                    return res.status(404).json({
                        error: "Email is not registered"
                    });
                }
                // console.log(`user ===== ${admin}, user.rollno ===== ${admin.name}`)
                admin.password = hashedPassword
                await admin.save();
                // await admin.save({password: hashedPassword})
                const reqA = {
                    body:
                    {
                        receiver:`${email}`,
                        subject:'Password Reset',
                        text:`Dear ${admin.name}, \n\nYour new Password for Project-X login is ${newPassword}.\nFrom\nProject-X` ,
                    }
                }
        
                const responseAdmin = await sendMail(reqA, res);
        
                return { success: true, message: responseAdmin }
            
            case 'Student':
                const student = await Student.findOne({ email: email });
                if (!student) {
                    return res.status(404).json({
                        error: "Email is not registered"
                    });
                }
                // console.log(`user ===== ${student}, user.rollno ===== ${student.name, student.rollno}`)
                student.password = hashedPassword
                await student.save();
                // await student.save({password: hashedPassword})
                const reqS = {
                    body:
                    {
                        receiver:`${email}`,
                        subject:'Password Reset',
                        text:`Dear ${student.rollno}, \n\nYour new Password for Project-X login is ${newPassword}.\nFrom\nProject-X` ,
                    }
                }
        
                const responseStudent = await sendMail(reqS, res);
        
                return { success: true, message: responseStudent }

            case 'Faculty':
                const faculty = Faculty.findOne({ email: email })
                if (!faculty) {
                    return res.status(404).json({
                        error: "Email is not registered"
                    });
                }
                // console.log(`user ===== ${faculty}, user.rollno ===== ${faculty.name}`)
                faculty.password = hashedPassword
                await faculty.save();
                // await faculty.save({password: hashedPassword})
                const reqF = {
                    body:
                    {
                        receiver:`${email}`,
                        subject:'Password Reset',
                        text:`Dear ${faculty.name}, \n\nYour new Password for Project-X login is ${newPassword}.\nFrom\nProject-X` ,
                    }
                }
        
                const responseFaculty = await sendMail(reqF, res);
        
                return { success: true, message: responseFaculty }

            default: return {message: "Role is not Selected"}
        }

    }

    sendForgotPasswordMail(userType);
}

export default forgotPasswordController;