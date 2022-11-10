import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;

let Admin = new Schema({
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
  }
  
});

export default model("Admin", Admin);