import { Schema as _Schema, model, mongoose } from 'mongoose';

const Schema = _Schema;

let Faculty = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  dob: {
    type: Number
  },
  department: {
    type: String
  },
  token: {
    type: String
  },
  outpasses: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Outpass"
  },
  mentees: {
    type: [{ type : _Schema.Types.ObjectId, ref: 'student' }]
  }

  
});

export default model("Faculty", Faculty);