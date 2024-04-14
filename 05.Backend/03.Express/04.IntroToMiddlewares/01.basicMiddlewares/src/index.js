import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const _dirname=dirname(fileURLToPath(import.meta.url));
const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
    res.sendFile(_dirname+"/public/index.html");
});
app.post("/submit",(req,res)=>{
    console.log(req.body);
    res.sendStatus(200);//just to return the status code that the form is submitted
});
app.listen(port,()=>{console.log(`Listening on port ${port}`);});
