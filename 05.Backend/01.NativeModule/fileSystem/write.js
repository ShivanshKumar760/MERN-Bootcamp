const { error } = require("node:console");
const fs=require("node:fs");

fs.writeFile("./outputFile/message.txt","Hello World from nodejs",function(err)
{
    if(err)
    {
        throw error;
    }
    else{
        console.log("The file has been saved");
    }
});