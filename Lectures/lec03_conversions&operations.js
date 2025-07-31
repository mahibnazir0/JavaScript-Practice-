//first of all for 33abc
let score="33"

//Now for null
// let score=null

// Now for undefined
// let score=undefined

//For boolean value(true or false)
// let score=true
console.log(typeof score);

let valueInNumber= Number(score)
console.log(typeof valueInNumber);
//Let's what actually valueInNumber holds
console.log(valueInNumber);

//NOw check for boolean conversion

let isLoggedIn=1

let boolIsLoggedIn=Boolean(isLoggedIn)

console.log(boolIsLoggedIn);

//NOw check for string conversion
let someNumber=33

let stringnumber= String(someNumber)

console.log(someNumber);
console.log(typeof stringnumber);

//*******************0peartions*************** */

let value=3
let negvalue=-value
console.log(negvalue)

//Basic airthematic operations
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)
console.log(2/2)
console.log(2%2)

// Aligning of two strings

let str1="Hello"
let str2=" World"

let str3=str1+str2
console.log(str3);

console.log(true)
//Tricky Conversions
console.log(+true)
console.log(+"")

//Incrementations
let counter=100
counter++;
console.log(counter);
