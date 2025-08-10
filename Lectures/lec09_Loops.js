///Loops
// For loop
for(let i=0;i<10;i++)
{
    ////console.log(i);
    
}
//While Loop
let i=0;
while(i<20)
{
    ////console.log(i);
    i++;
}
// Do while loop
let y=0;
do{
    ////console.log(y);
    y++;
}
while(y<5)
//Break & Continue
for(let x=0;x<10;x++)
{
    ////console.log(x);
    if(x===7)
    {
        break;
    }
}
for(x=0;x<10;x++)
{
    if(x===7)
        {
            continue;
        }
    ////console.log(x);
}
/******************* Practice Questions ********************************/

// Q1 Print number 1-10 using for loop
for(let a=1;a<=10;a++)
{
    //console.log(a);
    
}
//Q2 Print 10-1 numbers usng while loop
let b=10;
while(b>=1)
{
    //console.log(b);
    b--;
}
//Q3 Print even 1-20 numbers using for loop
for(let c=1;c<=20;c++)
{
    if( c%2 === 0){
        //console.log("Even :",c);

    }
    
}
//Q4 Print odd numbers 1-15 
for(let d=1;d<=15;d++)
{
    if(d%2 !==0)
    {
        //console.log(`Odd : ${d}`);
        
    }
}
//Q5 print table of 5
for(let e=1;e<=10;e++)
{
    //console.log(`5 * ${e} =  ${5*e}`);
}

//Q6 Sum of number 0-100
let f=0;
let sum=0;
while(f<=100)
{   
    sum=sum+f;
    f++;
}
//console.log(`Sum is = ${sum}`);
//Q7 print all numbers 1->50 that are divisible by 3
for(let g=1;g<=50;g++)
{
    if(g%3==0)
    {
    //console.log(`Numbers : ${g}`);
    } 
}
//Q8 input number from user and check whether it is even or odd
// let val=prompt("Enter a number :")
// for(let h=1;h<=val;h++)
// {  
//     if( h%2 === 0)
//     {
//         //console.log(`${h} is even`);
//     }
//     else{
//         //console.log(`${h} is odd`);
//     }
// }
// Note: above Q8 is only for consoles(web based)

// Q9 Count how many number b/w 1->100 are divisible by both 3 and 5
let j=1;
let count=0;
while(j<=100)
{
    if( j % 3 === 0 && j % 5 === 0)
    {
        count++;
    }
    j++;
}
//console.log(`Count : ${count}`);
/************************** Break & Continue ***********************/
// Q1 write program to print 1-100 numbers but any number divisible by 7 comes it stops
for(let k=1;k<=100;k++)
{
    console.log(`Numbers ${k}`);
    
    if(k % 7 === 0)
    {
        break;
    }
}
// Q2 Print numbers 1-20 and skip multiplies of 3
for(let l=1;l<=20;l++)
{
    if( l % 3 ===0)
    {
        continue;
    }
    //console.log(`Number: ${l}`);
    
}
// Q3 print first five odd numbers
let counter=0;
for(let m=1;m<=100;m++)
{
    if(m % 2 !== 0)
    {
        counter++
        {
            //console.log(`Odd number are : ${m}`);
        }
        
    }
    if(counter === 5) break;
}

