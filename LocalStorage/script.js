//localStorage

localStorage.setItem("name","Mahib");
let val=localStorage.getItem("name");   

// Cookies

document.cookie="email=mahib@mail.com"
document.cookie="age=12";

// setting arrays in localStorage

localStorage.setItem("friends",JSON.stringify(["rana","ahmad","abdullah"]));

let fr=JSON.parse(localStorage.getItem("friends"));

console.log(fr);