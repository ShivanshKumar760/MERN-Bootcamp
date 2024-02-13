var a ="hello";
console.log("Value of a declared outside the block is:",a);
let b=1;
console.log("Value of b declared outside the block is:",b);
/*
here a and b will act as global cause both a and b are neither decalared in a block or 
function so they can be accessed from anywhere withim the program*/

{
	a="world";
	console.log("Value of a inside the block is:",a);
	b=3;
	console.log("Value of b after changing inside the block is:",b);
	/*
	redeclaration of variable using let keyword is not allowed in ES6 javascript

	let b=4;
	will throw an error saying b already exist

	*/

	let c=6;
	var d=7;
	console.log("Value of c decalred inside block using let keyword is:",c);
	console.log("Value of d decalred inside block using var keyword is:",d);

}
/*
Now if we try to access c outside the block like suppose printing c outside the block

console.log(c);

this will give error cause c is declared using let keyword and it is decalred in scope
so it cannot be accessed outside the scope .

*/

//whereas in case of d we can easily access d outside the scope for printing it on 
//console beacuse d is declared using var keyword which is not scope specific and 
//more of function specific.

console.log("Value of d when tried to access outside of scope is: ",d);


/*
syntax to declare a function in js

function function_name(parameter)
{
	statement;

}

*/


function test(x) 
{
	// body...
	console.log("Initial value of passed parameter is :",x);
	x="hey";
	console.log("Value of parameter after change is:",x);
	var e = "Hello";
	let  f=9;
	console.log("Value of e declared inside function using var keyword is:",e);
	console.log("Value of f declared inside function using let keyword is: ",f);
}

/*
if we try to access e which is decalred inside the function like:
console.log(e);
So this will give error cause e is declared inside a function using var keyword which
is function based keyword that is any variable decalred using var keyword inside a
function is specific to that function and when we will try to access it  outside the 
function it will give error saying not declared .

similarly if we try to access f variable decalred  using let keyword like:

console.log(f);

This will give error ,although let is no function specific but since function starts 
and end with curly brackets {} all the code written inside of them becomes scope specifc
in a way since block is anything which is written inside curly bracket and let keyword
is block specific.So if we try to access variable declared inside a function using let
keyword  it will give error.

*/

test(a);
//so if we will pass the variable inside function it will be passed with concept of 
//pass by value and not reference .

test(b);

console.log(a);
console.log(b);