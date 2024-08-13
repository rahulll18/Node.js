const express = require('express');
//require('dotenv').config();
const {mysqlDb} = require('./config/myqldb');
const {addUser , getUsers ,deleteUserId} = require('./controllers/userController');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

let mysqlConnecton;


app.get('/' , function(req,res){
    res.send("Node js ")
})

// app.get('/getUsers' ,async(req, res)=>{
//     try{
//         const users = await getAllUsers();
//         res.send(users);
//     }catch{
//         console.log("Error",error);
//     }
// });

app.get('/getAllUsers', async(req,res)=>{
    try{
        const users = await getUsers(mysqlConnecton);
        //console.log(users);
        res.send(users);
    }catch{
        console.log("Error",error);
    }

})

app.post('/adduser' , async(req, res)=>{
    try{
        const user = req.body;
        const addedUser = await addUser(mysqlConnecton , user);

        res.send(addedUser);
    }
    catch(error){
        console.log("Error is :- ", error);
        res.status(500).send("An error occurred");
    }
});

app.delete('/deleteUser/:UserId' , async(req,res)=>{
    try{
        const id = req.params.UserId;
        const deletedUser = await deleteUserId(mysqlConnecton,id);
        
        res.send(deletedUser)
    }catch(error){
        console.log("error :",error)
    }
})

app.listen(PORT , async()=>{
    mysqlConnecton = await mysqlDb();
    console.log(`Server is running on ${PORT}`);
})

