import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;

let FacultyTest = new Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  department: {
    type: String
  }
});

export default model("FacultyTest", FacultyTest);