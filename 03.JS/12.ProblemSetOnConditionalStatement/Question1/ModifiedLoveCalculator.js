const prompt=require('prompt-sync')();
prompt("Enter Your name:");
prompt("Enter Your Partner Name:");

LoveScore=Math.random()*100;
LoveScore=Math.floor(LoveScore)+1;

if (LoveScore>=50)
{
    console.log("Your love is strong ");
}
else
{
    console.log(`love score is ${LoveScore}`);
}