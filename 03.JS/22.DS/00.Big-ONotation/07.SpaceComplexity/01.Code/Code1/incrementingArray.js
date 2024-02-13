function increment(arr)
{
	let total=0;
	for(let i=0;i<arr.length;i++)
	{
		total+=arr[i]
	}
	return total
}

console.log(increment([1,2,3]));