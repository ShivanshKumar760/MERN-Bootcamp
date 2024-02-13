let number = prompt("Enter a number b/w 2 and 3:");
if (number==2)
{
    document.querySelector("button").classList.add("onCLickButton");
}
else if(number==3)
{
    document.querySelector("button").classList.remove("btn");
}

document.querySelector("button").classList.toggle("btn");//at number ==2 btn class is still present
//so toggle will remove it and at 3 btn class will be removed so toggle will add btn class