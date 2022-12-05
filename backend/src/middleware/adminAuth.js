import Admin from "../models/Admin.js"
import jwt from 'jsonwebtoken'
import config from 'config';

const adminAuth = async (req, res, next) => {
    try{
        const token = req.header("Authorization").replace("Bearer ", "");
        console.log(token);
        console.log("1");
        console.log(process.env.SECRET);
        const decode = jwt.verify(token, process.env.SECRET);
        console.log('2');
        const admin = await Admin.findOne({ _id: decode.id, "tokens.token": token });
        if(!admin) {
            throw new Error();
        }
        req.token = token;
        req.admin = admin;
        console.log(admin)
        next();
    } catch(e){
        console.log(e);
        res.status(401).send({ error: "Please Authenticate" });
    }

    // try{
    //     const token = req.header("Authorization").replace("Bearer ", "");
    //     console.log(1);
    //     console.log(token);
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //     console.log(2);
    //     console.log(decoded);
    //     const admin = await Admin.findOne({_id:decoded.id,token:token});
    //     req.token=token;
    //     req.admin=admin;
    // }catch(e){
    //      console.log(e);
    //      res.status(401).send({ error: "Please Authenticate" });
    // }
}

export default adminAuth