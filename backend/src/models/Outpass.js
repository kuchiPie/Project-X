import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;

const OutpassModel = new Schema(
    {
        studentId:{
            type:Schema.Types.ObjectId,
            ref:"Student",
            required:true,
        },
        hostelRoom:{
            type: Number,
            required: true
        },
        contactNo:{
            type: Number,
            required: true
        },
        reason: {
            type: String,
            required: true
        },
        dateofjourney:{
            type: Date,
            required:true,
        },
        dateofreturn:{
            type:Date,
            required:true,
        },
        leavetime:{
            type: String,
            required: true
        },
        returntime:{
            type: String,
            required: true,
        },
        ticket:{
            type:String,
        },
        approvalStatus:{
            type:String,
            default:'Faculty Advisor'
        },
        isApproved:{
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps:true,
    }
);

const Outpass = model('Outpass',OutpassModel);

export default Outpass;