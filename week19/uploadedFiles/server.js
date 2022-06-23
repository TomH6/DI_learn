const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();

app.use('/',express.static(path.join(__dirname,'/public')));
app.use('/u', express.static(path.join(__dirname,'/uploads')));

app.listen(5000, ()=> {
  console.log('listen on port 5000');
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

const fileFilter = (req, file, cb) => {
  if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpg'){
    cb(null, true)
  }
  else{
    cb(null, false)
  }
}

const upload = multer({storage: storage, fileFilter: fileFilter });

app.post('/uploadFile', upload.single('image') , (req,res)=>{
  try{
    return res.status(201).json({msg:'file uploaded'})
  }
  catch(e){
    console.log(e);
  }
});