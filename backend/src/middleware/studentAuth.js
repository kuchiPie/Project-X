import Student from "../models/Student.js"
import jwt from 'jsonwebtoken'
import config from 'config';

const studentAuth = async (req, res, next) => {
    try{
        const token = req.header("Authorization").replace("Bearer ", "");
        const decode = jwt.verify(token, process.env.SECRET);
        const student = await Student.findOne({ _id: decode.id, "tokens.token": token });
        if(!student) {
            throw new Error();
        }
        req.token = token;
        req.admin = student;
        next();
    } catch(e){
        console.log(e);
        res.status(401).send({ error: "Please Authenticate" });
    }
}

export default studentAuth