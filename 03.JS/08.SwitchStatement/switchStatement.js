const prompt=require("prompt-sync")();
let grade = prompt("Enter your grade: ");
let result;

switch (grade)
{
case 'A':
	result ="A grade";
	break;
case 'B':
	result="B grade";
	break;
case "C":
	result="C grade";
	break;
case "D":
	result="D grade";
	break;
}
console.log("result is",result);