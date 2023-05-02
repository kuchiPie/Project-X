import Student from '../models/Student.js';
import Faculty from '../models/Faculty.js';
import Admin from '../models/Admin.js';
import Token from '../models/Token.js';
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
                res.status(200).send(responseAdmin)
        
                break;
            
            case 'Student':
                const student = await Student.findOne({ email: email });
                if (!student) {
                    return res.status(404).json({
                        error: "Email is not registered"
                    });
                }
                //token

                let token = await Token.findOne({ userId: user._id });
                if (token) { 
                    await token.deleteOne();
                };

                let resetToken = crypto.randomBytes(32).toString("hex");
                const hashedToken = await bcrypt.hash(resetToken, Number(bcryptSalt));

                await new Token({
                    userId: student._id,
                    token: hash,
                    createdAt: Date.now(),
                }).save();

                  
                const link = `http://localhost:3000/student/passwordReset?token=${resetToken}&id=${user._id}`;
                // sendEmail(user.email,"Password Reset Request",{name: user.name,link: link,},"./template/requestResetPassword.handlebars");
                const reqS = {
                    body:
                    {
                        receiver:`${email}`,
                        subject:'Password Reset request - Project-X',
                        text:`Hola ${student.rollno}!, \n\nYou requested for a password Reset.\nPlease click the link below to reset your password,\n"Password <a href='${link}'>Reset</a>.".\nFrom\nProject-X` ,
                    }
                }
                


                // console.log(`user ===== ${student}, user.rollno ===== ${student.name, student.rollno}`)
                // student.password = hashedPassword
                // await student.save();
                // await student.save({password: hashedPassword})
                
        
                const responseStudent = await sendMail(reqS, res);
                res.status(200).send(responseStudent)

                

                const resetPassword = async (userId, token, password) => {
                    let passwordResetToken = await Token.findOne({ userId });
                    if (!passwordResetToken) {
                      throw new Error("Invalid or expired password reset token");
                    }
                    const isValid = await bcrypt.compare(token, passwordResetToken.token);
                    if (!isValid) {
                      throw new Error("Invalid or expired password reset token");
                    }
                    const hash = await bcrypt.hash(password, Number(bcryptSalt));
                    await student.updateOne(
                      { _id: userId },
                      { $set: { password: hash } },
                      { new: true }
                    );
                    const reqS = {
                        body:
                        {
                            receiver:`${email}`,
                            subject:'Password Reset Successfull',
                            text:`Hola ${student.rollno}!, \n\nYour Password has been reset successfully.\nFrom\nProject-X` ,
                        }
                    }
                    await sendMail(reqS, res);
                    await passwordResetToken.deleteOne();
                    return true;
                };
        
                break;

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
        
                res.status(200).send(responseFaculty)
                break;

            default: return {message: "Role is not Selected"}
        }

    }

    sendForgotPasswordMail(userType);
}

export default forgotPasswordController;