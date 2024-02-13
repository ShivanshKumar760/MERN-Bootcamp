//Vanilla js
//This is arrow function
document.querySelector("button").addEventListener("click", () =>{
    alert("working");
});
//this is without arrow function

document.querySelector(".change").addEventListener("click", function()
{
    document.querySelector("h1").innerHTML="This is H1 tag";
    document.querySelector("h1").style.color="red";
});
//Now lets use jQuery
$("h2").css("color","red");
//Now take a look below this code
// $(".btn3").addEventListener("click",()=>{
//     $("h2").css("color","black");
// })
//This code will not work cause addEventListener is not a jQuery lib property instead we can just use the
//event name with it
$(".btn3").click(function () {
    $("h2").css("color", "black");
    jQuery("h2").css("text-align","center")
})