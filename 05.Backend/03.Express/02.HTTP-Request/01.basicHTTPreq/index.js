import express from "express";

const app=express();
const port=3000;

app.get("/",function(req,res)
{
   // res.send("Welcome to website");//Now instead of plain text we can send fully formated html 
    //tag
    res.send("<h1>Hello World</h1>")
});
app.get("/v1",function(req,res){res.send("This is version1");});
app.listen(port,function()
{
    console.log(`Server is running on port ${port}`);
});