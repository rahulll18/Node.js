const mongoose = require('mongoose')
require('dotenv').config();

const mongoDB = () =>{ mongoose.connect(process.env.MONGO_URL)
    .then((res) => {
        console.log("Databse Connected")
        // insertEmployees()
        // getEmployee(111)
        // getAllEmployees();
        deleteEmployee(113);

    })
.catch((err)=> console.log(err))}


module.exports=mongoDB;

const empSchema = new mongoose.Schema({
    _id : String,
    emp_name : String,
    emp_email : String,
    emp_salary : Number,
},{collection:'employees'})

const employeeModel = mongoose.model('Employee',empSchema)

async function getAllEmployees() {
    try {
        const employees = await employeeModel.find({});
        console.log("All Employees:", employees);
    } catch (error) {
        console.error("Error retrieving employees:", error);
    }
}

async function insertEmployees() {
    try {
        const employees = await employeeModel.create({  _id : 115,emp_name : 'hi',
            emp_email : 'hello',
            emp_salary : 1000,});
        console.log("All Employees:", employees);
    } catch (error) {
        console.error("Error retrieving employees:", error);
    }
}

async function getEmployee(empId) {
    try {
        const employees = await employeeModel.findById(empId);
        console.log("one Employees with id:", employees);
    } catch (error) {
        console.error("Error retrieving employees:", error);
    }
}

async function deleteEmployee(empId)
{
    try{
        const employess = await employeeModel.findByIdAndDelete(empId)
        console.log(`Delete with this ${empId}`)
    }catch(error){
        console.log("error whild delteing ", error);
    }
}