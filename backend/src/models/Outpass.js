import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;

const OutpassModel = new Schema(
    {
        studentId:{
            type:Schema.Types.ObjectId,
            ref:"Student",
            required:true,
        },
        dateofjourney:{
            type: Date,
            required:true,
        },
        dateofreturn:{
            type:Date,
            required:true,
        },
        ticket:{
            type:String,
        },
        approvalStatus:{
            type:String,
            default:'Faculty Advisor'
        }
    },
    {
        timestamps:true,
    }
);

const Outpass = model('Outpass',OutpassModel);

export default Outpass;