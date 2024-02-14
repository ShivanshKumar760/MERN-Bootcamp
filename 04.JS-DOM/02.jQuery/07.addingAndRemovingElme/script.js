// Now we can add element before and after a selected element using jQuery
$("h1").before("<button>New Button Before H1</button>")
//similarly we can add a button after h1 using after method
$("h1").after("<button>New Button After H1</button>")

//We can add element inside another element ie we can nest element using prepend and append 
//method

$("h1").prepend("<button>Prepend button</button>")//this will add button inside h1 tag just 
//before the content 
$("h1").append("<button>append button</button>")//this will add button inside h1 tag just 
//after the content 
