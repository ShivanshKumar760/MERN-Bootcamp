function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    let yearLeft=90-age;
    let numberOfDays=yearLeft*365;
    let numberOfWeeks=yearLeft*52;
    let numberOfYears=yearLeft*12;
    console.log("You have",numberOfDays,"days,",numberOfWeeks,"weeks, and",numberOfYears,"months left.");
    
    
    
    
    
/*************Don't change the code below**********/
}

const prompt=require('prompt-sync')();
let currentAge=Number(prompt("Enter your age:"));

lifeInWeeks(currentAge)

