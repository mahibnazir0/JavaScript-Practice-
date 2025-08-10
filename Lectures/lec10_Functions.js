//Basic Structure of a function
function newYear()
{
    console.log('Happy New Year ');
    
}
newYear();
// Function can be stored in variable in JS (Function Expression)
let myFunction=function(){
    console.log(`Hi I am Mahib`);
}
myFunction();

// Fat-Arrow-Functions
let fatFunction= ()=>{
   
    console.log(`Sum:${2+4}`);
    
}
fatFunction();
//Parameters & Arguments
function sumOfDigits(a,b)
{
    console.log(`Sum of digits is : ${a+b}`);    
}
sumOfDigits(3,5)

// Rest operator in functions
function abcd(a,b,c,...val)
{
    console.log(a,b,c,val);
}
abcd(1,2,3,4,5,67)

//Returnig a value in function
function xyz(a,b)
{
    let sum=0;
    sum=a+b;
    
    return sum;
}
console.log(xyz(3,5));