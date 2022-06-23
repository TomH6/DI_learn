const express = require('express');
const {getUsers,register,login,logout} = require('../controllers/Users.js');
const {VerifyToken} = require('../middleware/VerifyToken.js');

const router = express.Router();

router.get('/users', getUsers);
router.post('/register', register);
router.post('/login',login);
router.get('/logout',logout);
router.get('/token',VerifyToken, (req,res)=>{
  const accessToken = req.cookies.accessToken ||
                      req.headers['x-access-token'] ||
                      req.headers['authorization']
  res.status(200).json({accessToken})
})

module.exports = router;