import { Schema as _Schema, model, mongoose } from 'mongoose';

const Schema = _Schema;

let roles = new Schema({
  warden: {
    type: [{ type: _Schema.Types.ObjectId, ref: 'Faculty' }]
  },
  swe: {
    type: [{ type: _Schema.Types.ObjectId, ref: 'Faculty' }]
  }
});

export default model("roles", roles);