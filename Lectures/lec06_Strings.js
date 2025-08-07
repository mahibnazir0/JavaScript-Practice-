let name="Rana Mahib"
let repoCount= 50
//Concatenate
//console.log(name+repoCount);

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

//Modern-way for Declaration

let gameName= new String('Mahib Nazir')
console.log(gameName[4]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('i'));

const newString=gameName.substring(0,4);
console.log(newString)

const anotherString=gameName.slice(-12,3);
console.log(anotherString);

//Trim
let newStringOne="   Mahib   "
console.log(newStringOne);
console.log(newStringOne.trim());
//Replace
const url= "https://mahib.com/mahib%20rajpoot"


console.log(url.replace('%20','-'));

console.log(url.includes('mahib'));

//Converting Array into String
let myString="Hello-I-am-Mahib"
console.log(myString.split('-'));


 

