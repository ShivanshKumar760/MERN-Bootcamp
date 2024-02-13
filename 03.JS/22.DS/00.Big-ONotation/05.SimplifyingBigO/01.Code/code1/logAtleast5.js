function logAtLeast5(n)
{
	for(let i=0;i<=Math.max(5,n);i++)
	{
		console.log(i);
	}
}
const prompt=require('prompt-sync')();
let i=Number(prompt("Enter a numebr"));
logAtLeast5(i);