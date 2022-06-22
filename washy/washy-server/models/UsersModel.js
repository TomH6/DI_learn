const {Sequelize} = require ('sequelize');
const db = require ('../config/Database.js');


const {DataTypes} = Sequelize;
// console.log('DataType',DataTypes);
const Users = db.define('users',{
  
  username:{
    type: DataTypes.STRING
  },
  password:{
    type: DataTypes.STRING
  },
  score:{
    type: DataTypes.INTEGER
  },
  createdAt:{
    field: 'createdat',
    type: DataTypes.DATE
  },
  updatedAt:{
    field: 'updatedat',
    type: DataTypes.DATE
  }
},{
  freezeTableName:true
});

module.exports = Users;