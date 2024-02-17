//jquery helps to add common animation to our website 
//lets see how can we add it in our website 

//one of the method is hide() method 

$(".btn1").on("click",function(){
    $("h1").hide();//this method is a animation that will hide the selected element and hence it is under the 
    //callback function applied under the click event it will hide h1 when we click the button
});

//there is also a show() method 

$(".btn2").click(function(){
    $("h1").show();
});

//there is a toggle animation

$(".btn3").click(function()
{
    $("h1").toggle();
});
//So hide and show method can be used for animation but both hide and show instantly remove and again add the element
//but we can use the fade in and fade out method to add slight animation into the adding and removal of element

$(".btn4").click(function()
{
    $("h1").fadeOut();
});

$(".btn5").click(function()
{
    $("h1").fadeIn();
});
//slideUp() will collapse element upwards
$(".btn6").click(function()
{
    $("h1").slideUp();
});
//slideDown() will un-collapse element downwards
$(".btn7").click(function()
{
    $("h1").slideDown();
});
//slideToggle()
$(".btn8").click(function()
{
    $("h1").slideToggle();
});
// Now all the above are predefine but we also can animate our own css using jQuery
$(".btn9").click(function()
{
    $("h1").animate({
        //In this animate method we can only add the css with numeric value 
        opacity:0.5
    });
});
//We can even have more than one animation attach to same element 
$(".btn10").click(function()
{
    $("h1").slideUp().slideDown().animate({
        //In this animate method we can only add the css with numeric value 
        opacity:0.5,margin:"20%"
    });
});