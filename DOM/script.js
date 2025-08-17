// Selecting thing from html
let H1 = document.getElementById("H1");
console.dir(H1);

// if your tag has class or classes of same name
let abcd= document.getElementsByClassName("abcd");
console.dir(abcd)

// Convenient use 
let variable = document.querySelector("h2");
console.dir(variable);

let variable1 =document.querySelectorAll("h2");
console.dir(variable1);

// How to change text of tag
let h1=document.querySelector("h1")
h1.textContent="Hello, How are you?"
console.dir(h1)

// If we want to chnage html of text

h1.innerHTML="<i> Hey </i>"
h1.hidden=false;

// SetAttribute
// let a=document.querySelector("a");
// a.setAttribute("href","https://www.google.com");

// Through Image
let image=document.querySelector("img");
image.setAttribute("src",
"https://images.unsplash.com/photo-1742201473141-07daabc7a327?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
);


//GetAttribute
let b=document.querySelector("a")
console.log(b.getAttribute("href"))

// Dynamic DOM manipulation
let h3=document.createElement("h3");
h3.textContent="I am h3";
document.body.append(h3);


// Select all elements of list using loop

// lis.forEach(function(val){
//     console.log(val.textContent)
// })

let lis = document.querySelectorAll("li");
for(let i=0;i<lis.length;i++)
{
    console.log(lis[i].textContent);
}

// Set tilte to div using JS

let div=document.querySelector("div");

div.setAttribute("title","anything");

// add higlight clss to even number of lists
let  evenUl = document.querySelectorAll("ul li:nth-child(2n)");



evenUl.forEach(function(elem){
    elem.classList.add("highlight")
});
