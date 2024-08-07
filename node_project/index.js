const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const {getEmployee , getAllEmployees , addEmployee} = require('./api/Employeeapi')
const {getAllUsers,getAllUserById ,deleteUsersById , updateUserwithId,addUsers} = require('./api/userApi')
const PORT = 5000;

const mongoDb = require('./config/mongoDbb')
const db = require("./config/mysqlDb")

mongoDb();
db();

app.get('/' , function(req,res){
    console.log(req);
    res.send("Node js ")
})

//api with mysql
app.get('/getAllUsers', async(req,res)=>{
    const users = await getAllUsers();
    res.send(users);
    console.log(users);
})

app.get('/getAllUsers/:userId', async(req,res)=>{
    const users = await getAllUserById(req.params.userId);
    res.send(users);
    console.log(users);
})

const parser = bodyParser.urlencoded({extended:true})
app.post('/addUsers', parser ,async(req,res)=>{
    // console.log(req.body)
    const users = await addUsers(req.body);
    res.send(users);
    console.log(users);
})


//api with mongodb
app.get('/employees/getEmployees' , async function(req,res){
    const employees = await getAllEmployees();
    res.send(employees);
    console.log(employees)
})

app.get('/employees/getEmployees/:emp_id' , async function(req,res){
    const data = await getEmployee(req.params.emp_id)
    console.log(req);
    res.send(data);
    console.log(data)
})

// const parser = bodyParser.urlencoded({extended:true})
// app.post('/employees/add' ,parser, async function(req,res){
//     console.log(req.body);
//     const data = await addEmployee(req.body);
//     res.send(data);
// })



app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`)
})