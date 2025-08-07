//Primitive DataTypes
//Number
const number=100;
const decimal=12.3;
//Boolean
const isLoggedIn=true;
//Null & Undefined
const temperature=null
let userEmail;

//Symbol
const id=Symbol('123')
const anotherID=Symbol('123')

console.log(id ===anotherID);

//BigInt
const bigNumber=6674367347n

//Non-primitive DataTypes
//Their DataType is object

//Arrays
const heroes=["Imran Khan","ALi Jinnah","Khalid"]

//Objects

let myObj = {
    name: "Mahib",
    age : 20,
}

//Functions

myFunction= function(){
    console.log("Hello World");
    
}

/**************** Memory Allocation *****************/

//Stack(Primitive)
let myname="mahib nazir"

let anothername="nazir ahmed"

console.log(myname);
console.log(anothername);

//Heap(non-primitive)

let userOne ={
    email:"userone@email.com",
    ID:3643234
}
let userTwo =userOne

userTwo.email ="rana@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

