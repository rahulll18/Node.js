const addUser = async(connection , user)=>{
    console.log(user);
    const {id , first_name , last_name , email , password , confirm_password} = user;
    try{
        
        const result = await connection.query(
            `INSERT INTO Users (UserId, first_name, last_name ,emailId , password, confirm_password) VALUES (?,?,?,?,?,?)`,[
                id , first_name , last_name , email , password , confirm_password
            ]
        );
        console.log(result[0]);
        return result;

    }catch(error){
        console.log(`Error while Sign up and error is ${error}`);
    }
}

const getUsers = async(connection)=>{
    try{
        const query = `SELECT * FROM Users`;
        const results = await connection.query(query);
        return results[0];
    }catch(error){
        console.log("Error while fetching Users",error)
    }
}

const deleteUserId = async(connection, id)=>{
    try{
        const deleteQuery = `DELETE from Users where UserId = ${id}`;
        const results = await connection.query(deleteQuery);

        return results[0];
    }catch(error){
        console.log(`Error while deleting user ${error}`)
    }
}

module.exports = {addUser,getUsers ,deleteUserId};