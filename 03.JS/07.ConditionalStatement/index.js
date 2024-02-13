/*
So in javaScript when we want to take input from user we use a prompt function which tell user 
to enter the value for required data field.

But the thing is prompt is a method of the global window object found in the browser ie its
part of chrome v8 engine and this function works in internet browser only.Its not a part of 
javaScript language so if we dont run our code in a browser or an enviorment that  supports
BOM ie Browser Object Model,window wont be there and if window isnt there  
neither will prompt () be.

So to run a code with prompt function in node.js runtime  we have to install a prompt-sync 
package

Steps;
1.Open terminal and run this [npm install prompt-sync]
2.Open the .js file in which we want to use prompt function and import the prompt-sync
as given below.

eg:const  prompt=require("prompt-sync")();
*/ 
const prompt=require('prompt-sync')();
let a = prompt("Enter your name:");
console.log(a);