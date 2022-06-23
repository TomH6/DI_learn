const getUsers = require('./modules/utils/getusers');
getUsers.getUser()
  .then(data=>{
      console.log(data);
  })
  .catch(e =>{
      console.log('error from api', e);
  })
;