// Basic Example of EvevtListener (It changes color of text of heading when it gets clicked)
let h1=document.querySelector("h1");
h1.addEventListener("click",function(){
    h1.style.color="yellow";
})

// Another Example of Event Listener
let p=document.querySelector("p");
p.addEventListener("click",function(){
    p.style.color="green";
})
// For dobleCLick
function dblclick(){
    p.style.color="aqua";
}
p.addEventListener("dblclick",dblclick);

// Remove a function
p.removeEventListener("dblclick",dblclick);


// Commomn events
/* Input */

let input=document.querySelector("input")

input.addEventListener("input",function(data){
    console.log(data);
})
