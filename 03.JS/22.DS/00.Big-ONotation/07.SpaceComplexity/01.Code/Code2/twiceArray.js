function twiceArray(arr)
{
	let newArr=[];
	for(let i=0;i<arr.length;i++)
	{
		newArr.push(2*arr[i]);
	}
	return newArr;
}

console.log(twiceArray([1,2,3]));