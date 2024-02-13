//Now in Order to change the text of selected element 
//there are two ways 
//1.One is we can simply say,select an element then
//use .text() method onto it and inside the parentheses
//add the new text

$("h1").text("Bye");

//Now unlike document.querrySelector ie DOM methods
//where only the first element with that id name or class
//is selected in jQuery all the element with that name
//id or class are selected

//and we can see that here in the below example :
$("button").text("Don't click me");//This will change 
//the text of all button

//2.Second way is to use .html() method which is similar
//to innerHtml() and in this .html() method we can
//use html tags 
$("button").html("<em>Don't click me</em>");