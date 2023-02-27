import { Schema as _Schema, model } from 'mongoose';


const Schema = _Schema;
const Token = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "student" || "Admin" || "Faculty",
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600,// this is the expiry time in seconds
  },
});
export default model("Token", Token);