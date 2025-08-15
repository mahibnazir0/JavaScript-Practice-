// Changing CSS with javascript

let h1 = document.querySelector("h1")
console.dir(h1)
let body= document.body;
// Background-color
body.style.backgroundColor = "black"

//Text Color
h1.style.color="grey"
h1.style.fontFamily="Arial"

// Margin and Padding
h1.style.padding = "10px";
h1.style.margin="10px";

// Classes
let div=document.querySelector("div");

div.classList.add("text");

// div.style.fontFamily="Arial";
