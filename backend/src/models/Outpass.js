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
        leaveTime:{
            type: String,
            required: true
        },
        returnTime:{
            type: String,
            required: true,
        },
        ticket:{
            type:String,
        },
        approvalStatus:{
            type:String,
            enum : ['notApproved','facApproved', 'warApproved', 'corApproved'],
            default:'notApproved'
        },
        isApproved:{
            type: Boolean,
            default: false,
        },
        isRejected:{
            type: Boolean,
            default: false,
        },
        remarks:{
            type: String,
        },
        
    },
    {
        timestamps:true,
    }
);

OutpassModel.pre('save', async function(next) {
    const outpass = this

    if(outpass.approvalStatus === 'warApproved'){
        outpass.isApproved = true
    }

    next()
})

const Outpass = model('Outpass',OutpassModel);

export default Outpass;