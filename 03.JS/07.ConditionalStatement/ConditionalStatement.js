//lets take user input using prompt
const prompt=require("prompt-sync")();
let a=prompt("Hey What's your age?");//by default it takes input in string format
console.log(typeof a);
//Now if we want to change type of a ie string to type number
//1.Method is use Number Function directly on string and this Number class has a function 
//parseInt() which will get applied automatically 
a=Number(a);
console.log(typeof a);
//Conditional Statement
if(a>18)
{
	console.log("valid age to drive");
}
else if(a=18)
{
	console.log("We can consider this age");
}
else
{
	console.log("Not a valid age to drive.");
}
