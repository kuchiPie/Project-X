import Faculty from "../models/Faculty.js";
import bcrypt from 'bcryptjs';
import generator from 'generate-password';

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
    const data = await Faculty.findByIdAndUpdate({ _id: id }, body);
    return console.log(data);
}

//delete
export const deleteFaculty = async (id) => {
    const data = await Faculty.findByIdAndDelete({ _id: id})
    return console.log(data)
}




