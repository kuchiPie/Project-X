import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        // required: true,
        trim: true,
    },
    batch: {
        type: Number,
        required: true,
        trim: true,
    },
    branch: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    rollno: {
        type: String,
        required: true,
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
        unique: true,
    },
},{
    timestamps: true
}
)

export default model("student", studentSchema);