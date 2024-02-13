/*
HTMLAudioElement: Audio() constructor
The Audio() constructor creates and returns a new HTMLAudioElement which can be either attached to a document for the user to interact with and/or listen to, or can be used offscreen to manage and play audio.

Syntax
new Audio()
new Audio(url)*/

//HtmlAudioElement??
// HTMLAudioElement
// The HTMLAudioElement interface provides access to the properties of <audio> tag, 
// as well as methods to manipulate them.

// This element is based on, and inherits properties and methods from, 
// the HTMLMediaElement interface.

/*
Constructor
Audio()
Creates and returns a new HTMLAudioElement object, optionally starting the process of 
loading an audio file into it if the file URL is given.

Instance properties
No specific properties; inherits properties from its parent, HTMLMediaElement, 
and from HTMLElement.

Instance methods
Inherits methods from its parent, HTMLMediaElement, and from HTMLElement. 
It offers no methods of its own.

Examples
Basic usage
You can create a HTMLAudioElement entirely with JavaScript using the Audio() constructor:
--------------------------------------------------
const audioElement = new Audio("car_horn.wav");   

then you can invoke the play() method on the element

audioElement.play();
-----------------------------------------------------

Some of the more commonly used properties of the audio element
include src, currentTime, duration, paused, muted, and volume. 
This snippet copies the audio file's duration to a variable:

const audioElement = new Audio("car_horn.wav");
audioElement.addEventListener("loadeddata", () => {
  let duration = audioElement.duration;
  // The duration variable now holds the duration (in seconds) of the audio clip
});
*/
var numberOfButtons=document.querySelectorAll(".drum").length;
for (let i=0; i<numberOfButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        let button=this.innerHTML;
        playSound(button);
        // switch(button)
        // {
        //     case "w":
        //         let tom1=new Audio("sounds/tom-1.mp3"); 
        //         tom1.play();
        //         break;
        //     case "a":
        //         let tom2=new Audio("sounds/tom-2.mp3");
        //         tom2.play();
        //         break;
        //     case "s":
        //         let tom3=new Audio("sounds/tom-3.mp3");
        //         tom3.play();
        //         break;
        //     case "d":
        //         let tom4=new Audio("sounds/tom-4.mp3");
        //         tom4.play();
        //         break;
        //     case "j":
        //         let snare=new Audio("sounds/snare.mp3");
        //         snare.play();
        //         break;
        //     case "k":
        //         let crash=new Audio("sounds/crash.mp3");
        //         crash.play();
        //         break;
        //     case "l":
        //         let kick=new Audio("sounds/kick-bass.mp3");
        //         kick.play();
        //         break;
        //     default:
        //         alert(button);
        // }
    });
}

document.addEventListener("keydown",function keyPress(event)
{
    playSound(event.key);
});
function playSound(button_key)

{
    switch(button_key)
        {
            case "w":
                let tom1=new Audio("sounds/tom-1.mp3"); 
                tom1.play();
                break;
            case "a":
                let tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                let tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                let tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                let snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                let crash=new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                let kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            default:
                alert(button);
        }
}
//var audio=new Audio("sounds/tom-1.mp3"); audio.play();
/*
.a {
  background-image: url("images/tom2.png");
}

.s {
  background-image: url("images/tom3.png");
}

.d {
  background-image: url("images/tom4.png");
}

.j {
  background-image: url("images/snare.png");
}

.k {
  background-image: url("images/crash.png");
}

.l {
  background-image: url("i*/
