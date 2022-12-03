import Faculty from "../models/Faculty.js"
import jwt from 'jsonwebtoken'
import config from 'config';

const facultyAuth = async (req, res, next) => {
    try{
        const token = req.header("Authorization").replace("Bearer ", "");
        const decode = jwt.verify(token, process.env.SECRET);
        const faculty = await Faculty.findOne({ _id: decode.id, "tokens.token": token });
        if(!faculty) {
            throw new Error();
        }
        req.token = token;
        req.admin = faculty;
        next();
    } catch(e){
        console.log(e);
        res.status(401).send({ error: "Please Authenticate" });
    }
}

export default facultyAuth