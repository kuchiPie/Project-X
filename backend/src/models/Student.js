import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        // required: true,
        trim: true,
    },
    email: {
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
        unique: true,
    },
    mobileNo: {
        type: Number,
        unique: true,
    },
})

export default model("student", studentSchema);