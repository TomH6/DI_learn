const express = require('express');
const {getUsers,register,login,logout} = require('../controlers/users.js');
const VerifyToken = require('../middleware/VerifyToken.js');

const users_routes = express.Router();

const {
    _getAllUsers,
    _getASingleUser, 
    _insertNewUser,  
    _updateUserInfo,
    // _getUserCombinedScore,
    // _updateUserWeekly,
    _deleteScore,
    _getWeeklyScore,
    _sendWeeklyScore
    
} = require('../controlers/users.js');

users_routes.get('/total/:id', _getWeeklyScore);
users_routes.get('/:id', _getASingleUser);
users_routes.get('/', _getAllUsers);
users_routes.get('/logout',logout);
users_routes.get('/token',VerifyToken, (req,res)=>{
  const accessToken = req.cookies.accessToken ||
                      req.headers['x-access-token'] ||
                      req.headers['authorization']
  res.status(200).json({accessToken})
});

users_routes.post('/total', _insertNewUser);
users_routes.post('/register', register);
users_routes.post('/login',login);
users_routes.post('/total/:id', _sendWeeklyScore);

users_routes.put('/', _deleteScore);
users_routes.put('/:id', _updateUserInfo);


users_routes.get('/users', getUsers);



module.exports = users_routes;