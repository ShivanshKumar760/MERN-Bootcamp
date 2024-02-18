const { error } = require("node:console");
const fs=require("node:fs");

fs.readFile("./readFileExample/example.txt","utf8",function(err,data)
{
    if(err)
    {
        throw error
    }
    else
    {
        console.log(data);
    }
}
);