import Admin from "../models/Admin.js"
import jwt from 'jsonwebtoken'
import config from 'config';

const adminAuth = async (req, res, next) => {
    try{
        const token = req.header("Authorization").replace("Bearer ", "");
        const decode = jwt.verify(token, process.env.SECRET);
        const admin = await Admin.findOne({ _id: decode.id, "tokens.token": token });
        if(!admin) {
            throw new Error();
        }
        req.token = token;
        req.admin = admin;
        next();
    } catch(e){
        console.log(e);
        res.status(401).send({ error: "Please Authenticate" });
    }
}

export default adminAuth