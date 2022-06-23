import express from 'express';
import {getUsers,register,login,logout} from '../controllers/Users.js'
import { VerifyToken } from '../middleware/VerifyToken.js';

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

export default router;
