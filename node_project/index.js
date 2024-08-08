const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const {getEmployee , getAllEmployees , addEmployee} = require('./api/Employeeapi')
const {getAllUsers,getAllUserById ,updateUserwithId,addUsers,deleteUserById} = require('./api/userApi')
const PORT = 5000;

const mongoDb = require('./config/mongoDbb')
const db = require("./config/mysqlDb")

app.use(express.json());
mongoDb();
db();

app.use(function(req,res,next){
    console.log("middlware 1");
    next();
})

app.get('/' , function(req,res){
    console.log(req);
    res.send("Node js ")
})

//api with mysql
app.get('/getAllUsers', async(req,res)=>{
    const users = await getAllUsers();
    res.send(users);
    //console.log(users);
})

app.get('/getAllUsers/:userId', async(req,res)=>{
    const users = await getAllUserById(req.params.userId);
    res.send(users);
    //console.log(users);
})

app.use(bodyParser.urlencoded({extended:true}))
app.post('/addUsers',async(req,res)=>{
    // console.log(req.body)
    const users = await addUsers(req.body);
    res.send(users);
    //console.log(users);
})

app.put('/updateUser/:userId',async(req,res)=>{
    const newUser = req.body;
    console.log(newUser);
    const user = await updateUserwithId(req.params.userId, newUser);
    res.send(user);
    //console.log(user)
})

app.delete('/deleteUser/:userId' ,async function(req,res){

    const deleteUser = await deleteUserById(req.params.userId);
    res.json(deleteUser);
    //console.log(deleteUser);
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