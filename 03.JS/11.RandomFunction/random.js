/*
Random Number Generation

in js we have a method / function called as Math.random() which genrates a random number
from 0 to 0.999999999999999  ,it does not generate any random number  equal to 
or above one (1) plus it is a
16 decimal number 

why do we need random function well sometimes while game developing in order to develop
new circumstances to make game a bit difficult in order for player to play we need
randomization
*/

//lets understand this by example
//suppose we are playing ludo but don't have a dice but we need to play so lets
//build a dice simulator

//now on dice number are marked from 1 to 6 and everytime we throw a dice chances 
//are we will get a different number ie random number 

//lets see how to build that

let diceNumber = Math.random() ;//will generate a number from 0 to 1
//now to make it in range of 6 or any number n we will multiply diceNumber with n
diceNumber = diceNumber * 6;//will generate in range of 6 ie 0 to 5 to make it from 
//1 to 6 add 1

diceNumber=Math.floor(diceNumber)+1;

console.log(`diceNumber is ${diceNumber}`);