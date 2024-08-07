const connectDB = require("../config/mysqlDb");


const getAllUsers = async () => {
  try {
    const connection = await connectDB();
    const [results, fields] = await connection.query("SELECT * from Users");
    return results;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

const getAllUserById = async (id) => {
  try {
    const connection = await connectDB();
    const [results] = await connection.query(
      `SELECT * from Users where userId = ${id}`
    );
    return results;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

const deleteUsersById = async (id) => {
  try {
    const connection = connectDB();
    const [results] = await connection.query(
      `delete from Users where userId = ${id}`
    );
    return results;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

const updateUserwithId = async (id, userNew) => {
  try {
    const connection = await connectDB();
    const results = await connection.query(
      `update Users set first_name='${userNew.first_name}',last_name='${userNew.last_name}',age='${userNew.age}' where userId='${id}'`
    );

    return results
  } catch (error) {
    console.error("Error while updating users:", error);
  }
};

// async function addUsers(users) {
//   try{
//     const connection = await connectDB();
//     const response = await connection.query(`insert into Users
//              values(${users.id}, ${users.first_name}, ${users.last_name}, ${users.age},${users.gender},${users.address},${users.district},${users.state}),${users.pincode},${users.password},${users.confirm_password})`);
//   return response;
//   }catch (error) {
//     console.error("Error while adding users:", error);
//   }
  
// }

async function addUsers(users) {
  try {
    const connection = await connectDB();
    const response = await connection.query(
      `INSERT INTO Users 
       (userId, first_name, last_name, age, gender, address, district, State, pincode, password, confirm_password) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        users.id,
        users.first_name,
        users.last_name,
        users.age,
        users.gender,
        users.address,
        users.district,
        users.state,
        users.pincode,
        users.password,
        users.confirm_password
      ]
    );
    return response;
  } catch (error) {
    console.error("Error while adding users:", error);
  }
}


module.exports = {getAllUsers,getAllUserById ,deleteUsersById , updateUserwithId,addUsers}
