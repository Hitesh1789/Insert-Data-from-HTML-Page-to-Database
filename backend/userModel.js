const mongoose  = require("mongoose");

const stdSchema = new mongoose.Schema({
    studentName:{
        type : String,
        required : true
    },
    rollNumber:{
        type : Number,
        required : true,
        unique : true
    }
},{timestamps: true ,versionKey :false})


module.exports = mongoose.model("students",stdSchema)