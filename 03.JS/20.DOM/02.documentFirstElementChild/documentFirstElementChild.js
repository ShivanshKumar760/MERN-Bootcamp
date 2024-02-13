console.log(document.firstElementChild);//first element child of document which is html tag
console.log(document.firstElementChild.firstElementChild)//will give first element of html tag ie head tag

console.log(document.firstChild);
//firsElementChild == firstChild in document

console.log(document.lastChild);
//for a document which contains oue whole html page <html> tage is the only child '
//of document and hence the lastChild of the document is equal to the firstChild of the document


/*
for a document a firstElementChild will be equal to the lastElementChild unless we specify the element for 
which we are asking the first and last child 
*/