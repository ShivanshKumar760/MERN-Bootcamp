function searchKey(obj,key)
{
	let result=false
	let obj2Array=Object.keys(obj);
	for(let i=0;i<obj2Array.length;i++)
	{
		if(obj2Array[i]===key)
		{
			result=true;
		}
	}
	return result;
}
let instructor={
	firstName:"Kelly",
	isInstructor:true,
	favrouiteNumber:[1,2,3,4]
}

console.log(searchKey(instructor,"firstName"));

console.log(searchKey(instructor,"Shivi"));