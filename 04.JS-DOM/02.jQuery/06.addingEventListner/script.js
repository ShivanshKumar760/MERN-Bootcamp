// So how to add a event listner using jquery lets see that,well we already know how to add 
//event listner using traditional js ie using dom methods 

//lets see using dom method first so we have 5 button in our html document now this is how we
//use to add event to all the button in js using dom

for(let i=0;i<5;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",
        function(){
            document.querySelector("h1").style.color="red";
        }
    );
}
//so this long code we have to write 
//but using jquery we can shorten that code cause when we use jQuery it selects all the element 
//with that name class or id so we dont have to use for loop 

//jQuery
$("button").click(function(){
    $("h1").css("color","orange")
})

//We can also have a keypress event 
// $("input").keypress(function(){
//     console.log(event.key);//the global event parameter is deprecated in js so pass event as parameter into function

// })


$("input").keypress(function(event){
    console.log(event.key);
    });

//lets change the h1 text via pressing the key


$(".changeH1").keypress(function(event){
    $("h1").text(event.key);
    });


//We can even select the enitre document using jQuery and apply event onto it via document or body
// `$(document).keypress(function(event){
//     $("h1").text(event.key);
//     });`
//or via body
$("body").click(function()
{
    alert("Hello");
});
