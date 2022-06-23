import jwt from 'jsonwebtoken';
import Users from '../models/UsersModel.js';

export const VerifyToken = (req,res,next) => {
  const accessToken = req.cookies.accessToken ||
                      req.headers['x-access-token'] ||
                      req.headers['authorization']
  if(accessToken==null) return res.status(401).json({msg:'permission denied!'});
  jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET, async (err,decode) =>{
    if(err) return res.status(403).json({msg:'verify token failed!'});
    req.email = decode.email;
    try {
      const user = Users.findAll({
        where:{
          email: decode.email
        }
      });
      // res.status(200).json({accessToken})
      await next();
    } catch (e) {
      req.status(403).json({msg:'verify user failed!'})
    }
  })
}
