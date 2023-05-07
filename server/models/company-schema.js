import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    _id : Number,
    name : String,
    url : String

});

const Company = mongoose.model('Company',companySchema);

export default Company;