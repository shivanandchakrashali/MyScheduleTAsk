var express=require('express');
var app=express();
var mongojs=require('mongojs');
var cron = require('node-cron');
 



var db=mongojs('Practice',['testScript']);

var bodyParser=require('body-parser');
 
 


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

 var task =''
console.log("wwsssssss")
app.post("/setschedule",function(req,res){
  
  
   if(req.body.time == 'Seconds'){
    cron.schedule('* * * * * *', () => {
      var  date = new Date()
         console.log(date.getHours()+':'+date.getMinutes()+':'+date.getSeconds())
      })
   
   }
   else if(req.body.time == 'Minute'){
     cron.schedule('* * * * *', () => {
      var  date = new Date()
      console.log(date.getHours()+':'+date.getMinutes()+':'+date.getSeconds())
    })
   }
   else if(req.body.time == 'Hour'){
    cron.schedule('* * * *', () => {
      var  date = new Date()
      console.log(date.getHours()+':'+date.getMinutes()+':'+date.getSeconds())
    })
}
    
     

})
// app.get("/anand",function(req,res){
//     console.log("jjjjjjjjjjjjjjjjjjjjjjjjjj")
//     db.usersData.find(function(err,doc){
//         if(err){return err}
//         console.log(doc);
//         res.json(doc)
//     })
     

// }) 


// app.get("/getBase",function(req,res){
//     console.log("jjjjjjjjjjjjjjjjjjjjjjjjjj")
//     db.usersData.find(function(err,doc){
//         if(err){return err}
//         console.log(doc);
//         res.json(doc)
//     })
     

// }) 

app.post("/storeUsers1",function(req,res){
    console.log(req.body)
    // db.usersData.insert({"Name":req.body.userName,"Repository":req.body.repository,"Url":req.body.url},function(err,doc){
    //     if(err){return err}
    //     console.log(doc);
    //     res.json(doc)
    // })  

})
//     app.post("/UpdateUsers",function(req,res){
//         console.log(req.body.id)
//         db.usersData.update({"_id":mongojs.ObjectId(req.body.id)},

//            {$set:{"Name":req.body.name123,"Repository":req.body.Repository,"Url":req.body.Url}},function(err,doc){
//             if(err){return err}
//             console.log(doc);
//             res.json(doc)
//         })
     

// })

// app.get("/findName:name",function(req,res){
    
//     db.usersData.find({"Name":req.params.name},function(err,doc){
//         if(err){return err}
//         console.log(doc);
//         res.json(doc)
//     })
// })

const port=5555;
app.listen(port,function(){
    console.log("Server is Running on "+" "+port)
})