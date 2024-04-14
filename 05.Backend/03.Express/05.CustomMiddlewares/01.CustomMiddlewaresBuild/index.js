import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

//Custom middlewares function 
function logger(req,res,next)
{
    console.log("Request method is :",req.method);
    console.log("Request url is:",req.url);
    next();
}

app.use(logger);

app.get("/",(req,res)=>
{
    res.send("Hello");
});

app.listen(port,()=>{
    console.log(`listening on port :${port}`);
});