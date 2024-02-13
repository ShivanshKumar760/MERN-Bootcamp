const prompt=require('prompt-sync')();
year = prompt("Enter a year:");


if ((year % 4===0 || year%400===0 )&& year%100 !==0)
{
    console.log("Leap year: " + year);
}
else
{
    console.log("Not a Leap year: " + year);
}