const fs = require("fs");
const http = require("http");
const PORT = 5000;
const time = Date().toString();// getting the current time


//Using Express
const express = require("express");
const app =  express();
app.use(express.json());
app.get('/',function(req,res){// to read the content of the file and send it as response
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
    let data = req.body.time.toString()
    fs.writeFile('./Date/date.txt',data,(err)=>{
        if(err) throw err;
        let arr = [
            {
                message:"Data saved Successfully",
                savedData:data
            }
        ]
        res.json(arr);//to show success message
    });
})
app.listen(PORT,()=>{console.log("Listening to "+PORT);});
 