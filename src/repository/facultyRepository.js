import Faculty from "../models/Faculty.js";

//get and search,pagination, may add sort 
export const getFaculty = async(keyword, limit, skip) => {
    const data = await Faculty.find(
        { $or:[
            {
                name: 
            { 
                $regex: `${keyword}`, $options: "i" 
            }
        },
            {
                department:
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

//create
export const createFaculty = async(body) => {
    let faculty = new Faculty({ name : `${body.name}`, age : `${body.age}`, department : `${body.department}` });
 
    faculty.save(function (err, faculty) {
      if (err) return console.error(err);
      console.log("saved to faculty collection.");
    });
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




