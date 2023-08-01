const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    fname:{
        type: String
    },
    lname:{
        type: String
    },
    phone:{
        type: String
    }
},{timestamps:true});

const Employee = mongoose.model("employee",employeeSchema);
module.exports = Employee;