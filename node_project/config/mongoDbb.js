const mongoose = require('mongoose');
require('dotenv').config();
const employeeModel = require('../mongoDbmodel/EmployeeModel');

const mongoDB = () =>{ mongoose.connect(process.env.MONGO_URL)
    .then((res) => {
        console.log("Databse Connected")
    })
.catch((err)=> console.log(err))}


module.exports=mongoDB;