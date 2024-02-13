//instead of dollar we can use jQuery also
// jQuery("h1").css(
//     "color",
//     "red"
// );

//we can manipulate the style just by calling the css method onto the selected element via
//dot operator 
//syntax is :
// $("element").css("propertyToTarget","Value");
$("h1").css(
    "color",
    "red"
);


$("button").css(
    "border-style",
    "dotted"

);
$("button").css(
    "border-width",
    "10px"
);
//But as we know JS is use to add functionality in Web Document and CSS is use to add style 
//so using js to change style is voilation of sepration of conern 
//like the below code is okay cause we are adding the functionailty in .btn1 class such that 
//when we click the button change h1 coloe 
//but the above code where we are directly targeting the element and changin there css is 
//wrong 
$(".btn1").click(function ()
{
    $("h1").css(
        "color",
        "black"
    )
})
//so what we can do is we can write CSS for it and when required we will add that css onto
//the element via JavaScript later on via the .addClass

$("h1").addClass("bigHeading");

$("h1").addClass("changeBackgroundColor");

//We can even remove classes 
$(".btn2").click(function ()
{
    $("h1").removeClass("changeBackgroundColor");
});
//Now suppose we need to remove 2 classes what can we do is we can add another class in the 
//same quotation but with space b/w them

$(".btn3").click(function ()
{
    $("h1").removeClass("changeBackgroundColor bigHeading");
});

//jQuery also has one more cool feature and that is .hasClass to check if a element has that
//class or not 
$(".btn4").click(function ()
{
    $("h1").addClass("bigHeading");
});

$(".btn5").click(function ()
{
    alert($("h1").hasClass("bigHeading"));
});
