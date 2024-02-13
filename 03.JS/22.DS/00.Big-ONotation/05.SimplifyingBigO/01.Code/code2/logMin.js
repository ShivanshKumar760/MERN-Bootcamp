function logMin(n)
{
	for(let i=0;i<=Math.min(5,n);i++)
	{
		console.log(i);
	}
}
const prompt=require('prompt-sync')();
let i=Number(prompt("Enter a numebr"));
logMin(i);