const jwt = require ('jsonwebtoken');
const Users = require ('../models/UsersModel.js');

const VerifyToken = (req,res,next) => {
  const accessToken = req.cookies.accessToken ||
                      req.headers['x-access-token'] ||
                      req.headers['authorization']
  if(accessToken==null) return res.status(401).json({msg:'permission denied!'});
  
  jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET, async(err,decode) =>{
    if(err) return res.status(403).json({msg:'verify token failed!'});
    req.username = decode.username;
    try {
      const user = Users.findAll({
        where:{
          username: decode.username
        }
      });
      // res.status(200).json({accessToken})
      await next();
    } catch (e) {
      req.status(403).json({msg:'verify user failed!'})
    }
  })
}

module.exports = VerifyToken;