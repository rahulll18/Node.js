const mysql = require('mysql2/promise');

const mysqlDb = async ()=>{
   try{
        const connection = await mysql.createConnection({
        host: '127.0.0.1',
        user: 'root', 
        password: 'Mysql@123', 
        database: 'password_hash' 
    });

    //console.log(connection);
    console.log("MysqlDB connected");
    return connection;
   }catch(error){
        console.log(`Mysql Datbase not Connected :- ${error}`)
   }
}

module.exports = {mysqlDb};