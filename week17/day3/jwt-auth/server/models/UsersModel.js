import {Sequelize} from 'sequelize';
import db from '../config/Database.js';

const {DataTypes} = Sequelize;
// console.log('DataType',DataTypes);
const Users = db.define('userstwo',{
  name:{
    type: DataTypes.STRING
  },
  email:{
    type: DataTypes.STRING
  },
  password:{
    type: DataTypes.STRING
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

export default Users;
