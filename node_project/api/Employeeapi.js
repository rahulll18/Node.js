const employeeModel = require('../mongoDbmodel/EmployeeModel');

async function getAllEmployees() {
    try {
        const employees = await employeeModel.find({});
        return employees;
    } catch (error) {
        console.error("Error retrieving employees:", error);
    }
}

async function insertEmployees() {
    try {
        const employees = await employeeModel.create({  _id : 116,emp_name : 'hi',
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
        return employees;
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

async function addEmployee(employee){
    const EmployeeDoc=new employeeModel(employee);
    return await EmployeeDoc.save();
}

module.exports = {getAllEmployees,insertEmployees,getEmployee,deleteEmployee,addEmployee}
