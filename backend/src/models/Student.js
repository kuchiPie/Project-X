import { Schema as _Schema, model, mongoose } from 'mongoose';

const Schema = _Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        // required: true,
        trim: true,
    },
    batch: {
        type: Number,
        trim: true,
    },
    branch: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    rollno: {
        type: String,
        unique: true,
    },
    password: {
        type:String,
        required:true,
        minlenght: 7,
        trim: true,
    },
    altEmail: {
        type: String,
        // unique: true,
    },
    mobileNo: {
        type: Number,
    },
    facultyAdvisor: {
        type: _Schema.Types.ObjectId, ref: 'Faculty'
    }
},{
    timestamps: true
}
)

export default model("student", studentSchema);