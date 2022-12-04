import { Schema as _Schema, model, mongoose } from 'mongoose';
import Inc from "mongoose-sequence"

const Schema = _Schema;

const sessionSchema = new Schema({
    year:{
        type: Number, 
        required: true
    },
    dsai:{
        type: Number,
        required: true
    },
    cse:{
        type: Number, 
        required: true
    },
    ece:{
        type: Number, 
        required: true
    },
})

const AutoIncrement = Inc(mongoose);

sessionSchema.plugin(AutoIncrement, {inc_field: 'id'});

export default model("session", sessionSchema);