let numList=[];
function fizzBuzz(count)
{
    if (count.a%3===0 && count.a%5===0)
    {
        numList.push("FizzBuzz");
    }
    else if (count.a%3===0)
    {
        numList.push("Fizz");
    }
    else if(count.a%5===0)
    {
        numList.push("Buzz"); 
    }
    else{
        numList.push(count.a);
    }
    count.a=count.a+1;
    console.log(numList);
}

let count = {a:1};
const prompt = require('prompt-sync')();
let finalNum=prompt("Enter Last Number:");
for (let call=1;call<=finalNum;call++)
{
    fizzBuzz(count);
}

