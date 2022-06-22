const Users = require ('../models/UsersModel.js');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const { 
    getAllUsers,
    getUser,
    insertNewUser,  
    updateUserInfo,
    getUserCombinedScore,
    updateUserWeekly,
    deleteScore,
    getWeeklyScore,
    sendWeeklyScore,
    updateWeeklyScore
    
} = require('../my_modules/db-users.js');

const getUsers = async (req,res) =>{
    try {
      const users = await Users.findAll({
        attributes:['id','username','password']
      });
      res.json(users);
    } catch (e) {
      res.status(404).json({msg:'not found!'})
    }
  };
  
  const register = async (req,res) =>{
    console.log('xxx', req.body);
    const {usernameToPost,passwordToPost} = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(passwordToPost,salt);
    try {
      await Users.create({
        username:usernameToPost,
        password: hashPassword,
        score:0
      });
      res.json({msg:'Register Successful!'});
    } catch (e) {
      // console.log('yyy',e);
      res.status(403).json({msg:'User? already exist!'})
    }
  };
  
  const login = async (req,res) =>{
    console.log('reqBodyLogin', req.body);
    // const {username, password} = req.body;
    // console.log('username', username);
    try {
      const user = await Users.findAll({
        where:{
          username:req.body.username
        }
      });
      // console.log(user);
      const match = await bcrypt.compare(req.body.userPassword, user[0].password);
      // console.log('match', match);
      if(!match) return res.status(400).json({msg:'Sorry, username or password are wrong!'});
      const userId = user[0].id;
      const username = user[0].username;
      const score = user[0].score;
      const accessToken = jwt.sign({userId,username, score}, process.env.ACCESS_TOKEN_SECRET,{
        expiresIn: '60s'
      });
      res.cookie('accessToken',accessToken,{
        httpOnly: true,
        maxAge: 60 * 1000
      });
      console.log('accessToken', accessToken);
      res.json({accessToken})
    } 
    catch (e) {
      res.status(404).json({msg:'Username not found!'})
    }
  };
  //   try {
  //     const user = await Users.findAll({
  //       where:{
  //         username:username
  //       }
  //     });
  //     console.log(user);
  //     const match = await bcrypt.compare(password, user[0].password);
  //     if(!match) return res.status(400).json({msg:'Wrong password!'});
  //     const userId = user[0].id;
  //     const username = user[0].username;
  //     const accessToken = jwt.sign({userId,username}, process.env.ACCESS_TOKEN_SECRET,{
  //       expiresIn: '60s'
  //     });
  //     res.cookie('accessToken',accessToken,{
  //       httpOnly: true,
  //       maxAge: 60 * 1000
  //     });
  //     console.log('accessToken', accessToken);
  //     res.json({accessToken})
  //   } 
  //   catch (e) {
  //     res.status(404).json({msg:'Username not found!'})
  //   }
  // };
  
  const logout = (req,res) =>{
    res.json({msg:'logout'})
  };

const _getAllUsers = (req, res)=>{
    getAllUsers()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        console.log(error);
        res.json({mgs:error.message})
    })
};

const _getASingleUser = (req, res)=>{
    getUser(req.params.id)
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        console.log(error);
        res.json({mgs:error.message})
    })
};



// Create - create new user
const _insertNewUser = (req, res) => {
    insertNewUser(req.body)
    .then(data=>{
            res.json({data, created:"user created!"})  
    })
    .catch((err) => {
        if (err.code == 23505) {
          res.send({ error: "Username or email already exists" });
        }
      });
      
};


//Update - update user Info - username, score, password
const _updateUserInfo = (req,res)=>{
    updateUserInfo(req.params.id, req.body)
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        console.log(error);
        res.json({msg:error.message})
    })
};

const _updateUserWeekly = (req,res)=>{
    updateUserWeekly(req.params.id, req.body)
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        console.log(error);
        res.json({msg:error.message})
    })
};

// get users combined score
const _getUserCombinedScore = (req, res)=>{
    getUserCombinedScore(req.params.id)
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        console.log(error);
        res.json({mgs:error.message})
    })
};

// Delete - Daily scores 
const _deleteScore = (req, res)=> {
    deleteScore()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        console.log(error);
        res.json({mgs:error.message})
    })
};

// USER WEEKLY SCORE
const _getWeeklyScore = (req, res)=>{
  getWeeklyScore(req.params.id)
  .then(data=>{
      res.json(data)
  })
  .catch(error=>{
      console.log(error);
      res.json({mgs:error.message})
  })
};

const _sendWeeklyScore = (req, res)=>{
  console.log('uID', req.params.id);
  console.log('uScore',req.body.combined_score);
  sendWeeklyScore(req.params.id, req.body.combined_score)
  .then(data=>{
      res.json(data)
  })
  .catch(error=>{
      console.log(error.code);
      if(error.code == 23505){
        updateWeeklyScore(req.params.id, req.body.combined_score)
          .then(data=>{
            return res.json(data.rows)
          })
          .catch(err=>{
           return res.status(403).json({msg:err})
          })
      } else {
        res.status(403).json({msg:error})
      }
       
  })
};



module.exports = {
    _getAllUsers,
    _getASingleUser,
    _insertNewUser,
    _updateUserInfo,
    _getUserCombinedScore,
    _updateUserWeekly,
    _deleteScore,
    getUsers,
    register,
    login,
    logout,
    _getWeeklyScore,
    _sendWeeklyScore
};