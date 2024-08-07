// const mysql = require('mysql2/promise')

// async function makeConnection()
// {
//     const connection = await mysql.createConnection({
//         host: '127.0.0.1',
//         user: 'root', 
//         password: 'Mysql@123', 
//         database: 'gymX' 
//     });

//     connection.connect().then((success) => {
//         console.log("Connected");
//         //console.log(success);
//         getAllUsers();
//     })
//     .catch(err => console.log(err));
//     return connection;
// }

// var connection =  makeConnection();

// async function getAllUsers() {
//     const data= await connection.query('SELECT * FROM Users');
//     console.log(data);
// }

// const { connection } = require('mongoose');
const mysql = require('mysql2/promise');

const userNew = {
    first_name : "Rahul",
    last_name : "Avhad",
    age : 22,
};


const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
        host: '127.0.0.1',
        user: 'root', 
        password: 'Mysql@123', 
        database: 'gymX' 
    });

    console.log('Connected to the MySQL server.');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};

const getAllUsers = async (connection) => {
  try {
    const [results, fields] = await connection.query('SELECT * from Users');
    console.log('All users:', results);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

const getAllUsersById = async (connection ,id) => {
    try {
      const [results] = await connection.query(`SELECT * from Users where userId = ${id}`);
      console.log('All users:', results);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteUsersById = async (connection ,id) => {
    try {
      const [results] = await connection.query(`delete from Users where userId = ${id}`);
      console.log('User deleted :', results);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const updateUserwithId = async(connection , id , userNew) => {
    try{
        const results = await connection.query(`update Users set first_name='${userNew.first_name}',last_name='${userNew.last_name}',age='${userNew.age}' where userId='${id}'`)
    }catch(error){
        console.error('Error while updating users:', error);
    }
  }

  async function addUsers(employee){
    const response=await connection.query(`insert into employees
         values(${employee.empId}, ${employee.empName}, ${employee.empSalary}, ${employee.empEmail})`);
    console.log(response);
    console.log("_____________"); 
}

const main = async () => {
    const connection = await connectDB();
    await getAllUsers(connection)
    //await getAllUsersById(connection,1);
    //await deleteUsersById(connection,4);
    //await updateUserwithId(connection , 1 , userNew);



    await connection.end();
  };
  
  main();