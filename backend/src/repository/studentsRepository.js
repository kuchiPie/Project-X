import Student from "../models/Student.js";
import bcrypt from 'bcryptjs';

export const getStudentByID = async(id) => {
    const data = await Student.findById(id);
    return { success:true, data:data }
}

//get and search,pagination, may add sort 
export const getStudentList = async(keyword, batch, branch, limit, skip) => {
    if(!keyword && !batch && !branch){
        const data = await Student.find().limit(limit).skip(skip);
        return {success:true,data:data};
    }
    else if(keyword && batch && branch){
        const data = await Student.find(
            {
                $and:[
                    {
                        batch: `${batch}`
                    },
                    {
                        branch: `${branch}`
                    }
                ],
                $or:[
                    {
                        name: 
                        { 
                            $regex: `${keyword}`, $options: "i" 
                        }
                    },
                    {
                        rollno:
                        {
                            $regex: `${keyword}`, $options: "i"
                        }
                    }
                ]
            }
        )
        .limit(limit)
        .skip(skip)
        return { success: true, data: data };
    }
    
    else if(batch && branch){
        const data = await Student.find(
            {
                $and:[
                    {
                        batch: `${batch}`
                    },
                    {
                        branch: `${branch}`
                    }
                ]
            }
        )
        .limit(limit)
        .skip(skip)
        return { success: true, data: data };
    }
    else if (batch || branch) {
        const data = await Student.find(
            {
                $or:[
                    {
                        batch: `${batch}`
                    },
                    {
                        branch: `${branch}`
                    }
                ]
            }
        )
        .limit(limit)
        .skip(skip)
        return { success: true, data: data };
    } 

    else if(keyword){
        const data = await Student.find(
            {
                $or:[
                    {
                        name: 
                        { 
                            $regex: `${keyword}`, $options: "i" 
                        }
                    },
                    {
                        rollno:
                        {
                            $regex: `${keyword}`, $options: "i"
                        }
                    }
                ]
            }
        )
        .limit(limit)
        .skip(skip)
        return { success: true, data: data };
    }
}

//create
export const createStudent = async(body) => {
    
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(body.password, salt, (err, hash) => {
            if (err) throw err;

            let faculty = new Student({
                name : `${body.name}`,
                email : `${body.email}`,
                rollno : `${body.rollno}`,
                password : hash, dob : `${body.dob}`,
                batch : `${body.batch}`,
                branch : `${body.branch}`,
                altEmail : `${body.altEmail}`,
                mobileNo : `${body.mobileNo}`
            });
            
            faculty.save(function (err) {
            if (err) return console.error(err);
            console.log("saved to faculty collection.");
            });
        });
    });
 
}

//update 
export const updateStudent = async(id, body) => {
    const data = await Faculty.findByIdAndUpdate({ _id: id }, body);
    return console.log(data);
}

//delete
export const deleteStudent = async (id) => {
    const data = await Faculty.findByIdAndDelete({ _id: id})
    return console.log(data)
}




