function add(n1, n2) 
{
    return n1 + n2;
}
function subtract(n1, n2)
{
    return n1 - n2;
}
function multiply(n1, n2)
{
    return n1 * n2
}
function divide(n1,n2)
{
    return n1/n2;
}

function calculator(x,y,fucntion_name)
{
    return fucntion_name(x,y);
}

let num1 = 5;
let num2 = 2;
console.log(calculator(num1,num2,add));