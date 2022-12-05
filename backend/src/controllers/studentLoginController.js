import Student from '../models/Student.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';
import validateLoginInput from '../validation/login.js'

function studentLoginController(req, res) {
    //Login Validation
    const {
        errors,
        isValid
    } = validateLoginInput(req.body);

    //Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    //Find User By Email
    Student.findOne({
        email:email
    }).then(async user => {
        //Check if Your Exists
        if (!user) {
            return res.status(404).json({
                error: "Email is not registered"
            });
        }

        // Check Hash
        var isPasswordCorrect = bcrypt.compareSync(password, user.password);

        // If password is incorrect send Error 400
        if (isPasswordCorrect == false){
            return res.status(400).json({
                error: "Password incorrect"
            });
        }
        
        // Payload for the token
        const payload = {
            id: user.id,
            name: user.name
        };

        // Generating jwt token
        var token = jwt.sign(payload, process.env.SECRET,{expiresIn:172800});

        // Assiginig jwt token to user object
        user.token = token

        // Updating latest token to database
        await user.save()

        // returning final json as response
        res.json({
            success: true,
            token: token,
            user
        });
    });
}

export default studentLoginController