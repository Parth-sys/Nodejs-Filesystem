const fs = require("fs");
const http = require("http");
const PORT = 5000;
var time=Date().toString()// getting the current time


//Using Express
const express = require("express");
const app =  express();
app.use(express.json());
app.get('/',function(req,res){// to read the content of the file and send it as response
    console.log("hello")
    fs.readFile('Date/date.txt','UTF8',function(err,dt){
        if(err)
            throw err;
        else
        {
            res.json([{
                currentTime:dt
            }]);
        }
    })
})
app.post('/',function(req,res){//to get request from postman and write the body in file
     let time2=Date().toString()
     console.log(time2)

 
    fs.writeFile('./Date/date.txt',time2,(err)=>{
        if(err) throw err;
        let arr = [
            {
                message:"Data saved Successfully",
                savedData:time2
            }
        ]
        res.json(arr);//to show success message
    });
})
app.listen(PORT,()=>{console.log("Listening to "+PORT);});
 