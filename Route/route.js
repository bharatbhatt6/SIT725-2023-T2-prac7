let express = require('express')
let router = express.Router();
let controller = require('../Controller/controller');

router.get('/', (req,res)=>{
        getAllCats((err,result)=>{
            console.log(result);
            if(!err){
                res.json({statusCode:200,data:result,message:'success'});
            }
        });
    });
    
    router.post('/',function(req,res){
      let cat = req.body;
      console.log(cat);
      insertCat(cat, (err,result) => {
          if(!err){
              res.json({statusCode:201,data:result,message:'success'});
          }
      });
    });