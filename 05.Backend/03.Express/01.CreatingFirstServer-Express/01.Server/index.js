import express from "express";//import express from express module
const app=express();//initiate the express object 
const port = 3000;
//use the listen method written in express() to listen on a perticular port and then in call
//back function write the code to execute on that port
app.listen(port,()=>{
    console.log("Server is running on port 3000");
})