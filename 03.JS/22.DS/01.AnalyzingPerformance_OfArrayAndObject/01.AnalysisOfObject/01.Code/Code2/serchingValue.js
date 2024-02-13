function searchValue(obj,value)
{
	let result=false
	let obj2Array=Object.values(obj);
	for(let i=0;i<obj2Array.length;i++)
	{
		if(obj2Array[i]===value)
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

console.log(searchValue(instructor,"Kelly"));

console.log(searchValue(instructor,"Shivi"));