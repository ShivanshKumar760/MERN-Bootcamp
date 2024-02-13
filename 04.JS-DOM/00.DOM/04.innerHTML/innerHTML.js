document.firstElementChild.lastElementChild.firstElementChild.innerHTML="DOM";
/*
so in above line of code we used something new which is (.innerHTML) which is property of
html tag which fetches the content inside the html tag element and then helps us manipulate it

lets understand above line of code 
document //is:
<html>
<head></head>
<body></body>
</html>

document.firstElementChild is :
<html>..</html>

document.firstElementChild.lastElementChild is : last element child of <hmtl>
<body></body>

document.firstElementChild.lastElementChild.firstElementChild is :<body> tag first child
which if we refer to the code in index.html is h1

<body>
    <h1>DOM MANIPULATION</h1>

document.firstElementChild.lastElementChild.firstElementChild.innerHTML="DOM" //sets the h1 
//value to DOM by replacing the it in place of DOM MANIPULATION

*/

//another method to do this more easily is use variable name to store :

//document.firstElementChild.lastElementChild.firstElementChild
let heading1 = document.firstElementChild.lastElementChild.firstElementChild;

console.log(heading1);
//<h1>DOM</h1> ---modified
heading1.innerHTML="DOMresetedAgain"; 

//innerHTML is the property of html element and it is not a method or function which does
//any functionality 

//heading.innerHTML is get property where it will fetch the content of the html tag innr value 
//heading.innerHTML="DOM" is a set property