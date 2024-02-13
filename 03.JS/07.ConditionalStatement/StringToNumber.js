//lets take user input using prompt
const prompt=require("prompt-sync")();
let a=prompt("Hey What's your age?");//by default it takes input in string format
console.log(typeof a);
//Now if we want to change type of a ie string to type number
//1.Method is use Number Function directly on string and this Number class has a function 
//parseInt() which will get applied automatically 
a=Number(a);
console.log(typeof a);
//2.Method is use the parseInt()
let b=prompt("What is your roll number:");
console.log(typeof b);
b=Number.parseInt(b); //or b=parseInt(b);b
console.log(typeof b);