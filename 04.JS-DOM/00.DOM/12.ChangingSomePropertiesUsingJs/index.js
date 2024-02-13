//In JavaScript most of the properties to change style are same named as there css counterpart
//like in CSS it's font-size so in JavaScript it will be fontSize to naming is same but instead
//of - we use camel casing to separate two Words

document.querySelector("h1").style.fontSize = "10rem";
document.querySelector("h1").style.color="red";

document.getElementsByTagName("input")[0].style.width="100px";

document.getElementsByTagName("input")[0].style.height="100px";

document.getElementsByTagName("input")[0].click();
//we can change padding also using JavaScript

document.getElementsByTagName("button")[0].style.padding="30px";
//margin properties
document.getElementsByTagName("h1")[0].style.marginLeft="30px";
document.getElementsByTagName("h1")[0].style.marginTop="0px";
document.getElementsByTagName("input")[0].style.marginLeft="30px";
document.querySelector("body").style.margin="0px";
//we can change the visibility of any element..
// document.querySelector("h1").style.visibility="hidden";

//we can change the background color of any element if it is the property of that element
document.getElementsByTagName("button")[0].style.backgroundColor="yellow";
document.querySelector("div").style.backgroundColor="yellow"