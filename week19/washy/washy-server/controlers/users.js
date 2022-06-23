

const { 
    getAllUsers,
    getUser,
    insertNewUser,  
    updateUserInfo,
    getUserCombinedScore,
    updateUserWeekly,
    deleteScore
} = require('../my_modules/db-users.js')



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

module.exports = {
    _getAllUsers,
    _getASingleUser,
    _insertNewUser,
    _updateUserInfo,
    _getUserCombinedScore,
    _updateUserWeekly,
    _deleteScore
}