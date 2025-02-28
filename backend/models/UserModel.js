import { DataTypes } from "sequelize";
import dbContext from "../config/Database.js"; // Import the database connection

const User = dbContext.define('User', {
  // Define the columns
  name: DataTypes.STRING,
  password: DataTypes.STRING,
  email: DataTypes.STRING,
  title: DataTypes.STRING,
  category: DataTypes.STRING
},{
    freezeTableName: true
});

export default User;
// The code above defines a User model using Sequelize. The model has four columns: name, email, password

(async()=>{
    await dbContext.sync();
    console.log("User table created");
})();