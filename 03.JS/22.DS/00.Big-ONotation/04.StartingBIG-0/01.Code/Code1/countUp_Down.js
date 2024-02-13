function countUpAndDown(n)
{
	console.log("Counting Up");
	for(let i=0;i<n;i++)
	{
		console.log(i);
	}
	console.log("Counting Down");
	for(let j=n-1;j>=0;j--)
	{
		console.log(j);
	}
	console.log("Bye");
}

countUpAndDown(10);