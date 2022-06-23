const express = require('express');
const router = express.Router();

const {
    _getAllUsers,
    _getASingleUser, 
    _insertNewUser,
    _verifyUser,  
    _updateUserInfo,
    _getUserCombinedScore,
    _updateUserWeekly,
    _deleteScore
    
} = require('../controlers/users.js');

router.get('/total/:id', _getUserCombinedScore);
router.get('/:id', _getASingleUser);
router.get('/', _getAllUsers);
router.post('/register', _insertNewUser);
router.post('/auth', _verifyUser);
router.put('/', _deleteScore);
router.put('/:id', _updateUserInfo);
router.put('/total/:id', _updateUserWeekly);

module.exports = router;