import Faculty from "../models/Faculty.js";
import bcrypt from 'bcryptjs';
import generator from 'generate-password';
import roles from "../models/roles.js";
import e from "express";

//get and search,pagination, may add sort 
export const getFaculty = async() => {
    const data = await Faculty.find({})
    return { success: true, data: data };
}

//create
export const createFaculty = async(body) => {
    var password = generator.generate({
        length: 10,
        numbers: true
    });
    console.log('password is',password, body)
    const hash = bcrypt.hashSync(password, 10);
    try{
        let faculty = new Faculty({ name : `${body.name}`, email : `${body.email}`, password : hash, department: body.department});
        await faculty.save()
        return faculty
    } catch(e) {
        console.log(e)
    }
}

//update 
export const updateFaculty = async(id, body) => {
    const role=body.role;
    delete body['role']
    if(role=='Warden' || role=='SWE'){
        const roleInDb=await roles.find();
        if(roleInDb.length==0){
            if(role=='Warden'){
                const newDoc=await roles.create({
                    warden:[body._id],
                })
            }
            else if(role=='SWE'){
                const newDoc=await roles.create({
                    swe:[body._id]
                }) 
            }
        }
        else{
            const id=roleInDb[0]._id;
            if(role=='Warden'){
                await roles.findByIdAndUpdate(id,{
                    $push:{warden:body._id},
                })
            }
            else if(role=='SWE'){
                await roles.findByIdAndUpdate(id,{
                    $push:{swe:body._id},
                })
            }
        }
    }
    // if(role=='Warden'){
    //     await roles.findByIdAndUpdate('638dec73d27810cb840c4396',{
    //         $push:{warden:body._id},
    //     })
    // }
    // else if(role=='SWE'){
    //     await roles.findByIdAndUpdate('638dec73d27810cb840c4396',{
    //         $push:{swe:body._id},
    //     })
    // }
    const data = await Faculty.findByIdAndUpdate({ _id: id }, body);
    return console.log(data);
}

//delete
export const deleteFaculty = async (id) => {
    const data = await Faculty.findByIdAndDelete({ _id: id})
    return console.log(data)
}




