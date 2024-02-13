const prompt=require('prompt-sync')();
prompt("Enter Your name:");
prompt("Enter partner name:");

LoveScore=Math.random()*100;//0 to 99
LoveScore=Math.floor(LoveScore)+1;
console.log(`Your Love Score: ${LoveScore}`);