var express=require('express');
var app=express();
var cron = require('node-cron');
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

 
app.post("/setschedule",function(req,res){
  
  
   if(req.body.time == 'Seconds'){
    cron.schedule('* * * * * *', () => {
      var  date = new Date()
      console.log('FOR EVERY SECONDS')
         console.log(date.getHours()+':'+date.getMinutes()+':'+date.getSeconds())
      })
   
   }
   else if(req.body.time == 'Minute'){
     cron.schedule('* * * * *', () => {
      var  date = new Date()
      console.log('FOR EVERY MINUTE')
      console.log(date.getHours()+':'+date.getMinutes()+':'+date.getSeconds())
    })
   }
   else if(req.body.time == 'Hour'){
    cron.schedule('* * * *', () => {
      var  date = new Date()
      console.log('FOR EVERY HOUR')
      console.log(date.getHours()+':'+date.getMinutes()+':'+date.getSeconds())
    })
}
    
     

})
 
const port=5555;
app.listen(port,function(){
    console.log("Server is Running on "+" "+port)
})