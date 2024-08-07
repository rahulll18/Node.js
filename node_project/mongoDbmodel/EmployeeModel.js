const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
    emp_name : String,
    emp_email : String,
    emp_salary : Number,
},{collection:'employees'})

const employeeModel = mongoose.model('Employee',empSchema)
module.exports = employeeModel;