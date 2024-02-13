/*Html tag have properties and method associated to them properties are associated with there
size ,color and content that they hold inside them associated with them and method are the functionality
of the html tag like checkbox functionality is checking the box these all things can be manipulated by
javaScript 

take for example a car where car is a object :
and it's property are as follow:
    1.color 
    2.number of seats 
    3.number of doors


and its method are :
    1.drive() //its funtionality
    2.Brake()
    3.Park()


and these properties can be manipulated by JavaScript it can be done by dot operator(.)

Syntax:

object.property or object.method();

Ex: car.color//where color is property of car and this car.color will return car's color 

this fething of value of a html tag is known as get property:car.color;

now if we set our car color to red like this car.color="red" its the set property.

SIMILARLY we can manipulate functionality of html tags like for our object car :

car.drive()//will provide a functionality to car like drive 

.drve() is a method and not function a method is very similar to function but it is associated
with a object and function can be called directly*/

//properties for our checkbox can be :
/*
1.innerHTML
2.style 
3.firstChild 

AND 

method related to our checkbox are :

1.check()
2.appendChild()
3.setAttribute()*/

//below are the way to manipulate the properties of input checkbox 

document.querySelector("input").style.margin="0px";
document.querySelector("input").style.height="100px";
document.querySelector("input").style.width="100px";

//manipulating method related to the checkbox

document.querySelector("input").click();

//manipulating property of heading h1
document.querySelector("h1").style.color="red";