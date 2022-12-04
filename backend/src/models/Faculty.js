import { Schema as _Schema, model } from 'mongoose';

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
  mentees: {
    type: [{ type : _Schema.Types.ObjectId, ref: 'student' }]
  }

  
});

export default model("Faculty", Faculty);