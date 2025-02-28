import { Sequelize } from 'sequelize';

const dbContext = new Sequelize('noteapp','root','',{
    host: 'localhost',
    dialect: 'mysql'
}); // Database name

export default dbContext;