import mongoose from "mongoose";

const adSchema = new mongoose.Schema({
    _id: Number,
    companyId : Number,
    primaryText : String,
    headline : String,
    description : String,
    CTA : String,
    imageUrl : String

});

const Ad = mongoose.model('Ad',adSchema);

export default Ad;