console.log(document.querySelector("h1").innerHTML);
console.log(document.querySelector("h1").textContent);
let change=prompt("Enter innerHTML(1) , textContentWithHtmltag(2) or textContent(3)")
change=parseInt(change);
if(change===1)
{    document.querySelector("h1").innerHTML="<em>Hey,What's up!</em>";}
else if (change===2)
//When you set the textContent property, all child nodes are removed and replaced by only one new text node.
{    document.querySelector("h1").textContent="<em>goodbye</em>";}
else if (change===3)
//When you set the textContent property, all child nodes are removed and replaced by only one new text node.
{    document.querySelector("h1").textContent="goodbye";}