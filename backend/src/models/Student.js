import { Schema as _Schema, model, mongoose } from 'mongoose';

const Schema = _Schema;

const studentSchema = new Schema({
    fatherName: {
        type: String,
        trim: true,
    },
    motherName: {
        type: String,
        trim: true,
    },
    dateOfBirth:{
        type:Date,
    },
    nationality:{
        type:String
    },
    name: {
        type: String,
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
        default: 0
    },
    currOutpass: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Outpass"
    },
    facultyAdvisor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Faculty"
    },
    outpasses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Outpass"
    }],
    gender:{
        type:String,
    },
    bloodGroup:{
        type:String,
    },
    category:{
        type:String,
    },
    motherTongue:{
        type:String,
    },
    gardiansName:{
        type:String,
    },
    gardiansEmail:{
        type:String,
    },
    gardiansRelation:{
        type:String,
    },
    gardiansMobile:{
        type:String,
    },
    gardiansAltMobile:{
        type:String,
    },
    guideFrom:{
        type:Date,
    }
},{
    timestamps: true
}
)

export default model("student", studentSchema);