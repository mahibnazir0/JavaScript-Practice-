let a=7;
if( a%2 != 0)
{
    console.log("It is odd");    
}
else{
    console.log("It is even");
}
let loggedIn=true;
let admin=true;

if(loggedIn && admin)
{
    console.log("You can access it!");
}
else if(loggedIn)
{
    console.log("You ar e logged-in but you are not admin so you cannot access it!");
}
else{
    console.log("Please logIn first");
}

/************* Switch Case *************************/

switch(2)
{
    case 1:
    break;
    case 2:
        console.log("I am Mahib");
    break;
    case 3:
    break;
}

/***************** Early return pattern **************/

function getVal(val)
{
    if(val>50) return 'D';
    else if(val>80) return 'A';
    else if(val>70) return 'B';
    else if(val>60) return 'C';
    else return 'F';
}
console.log(getVal(55));


//Practice Question
//Grade System
function getGrade(score)
{
    if(score >= 90 && score <= 100) return 'A+';
    else if(score >= 80 && score <= 89) return 'A';
    else if(score >= 70 && score <= 79) return 'B';
    else if(score >= 60 && score <= 69) return 'C';
    else if(score >= 33 && score <= 59) return 'D';
    else if(score >= 0 && score <= 32) return 'Fail';
    else return 'Invalid Marks'
}
console.log(getGrade(38));

//Rock Paper Scissor
function rps(user,computer)
{
    if(user===computer)
    {
        console.log("Draw");
        
    }
   
    else if(user ==='rock' && computer==='scissor')
    {
        console.log("User Wins");
    }
   
    else if(user ==='paper' && computer==='rock')
    {
        console.log("User Wins");
    }
   
    else if(user ==='scissor' && computer==='paper')
    {
        console.log("User Wins");
    }
    else{
        console.log('Computer Wins');        
    }
}
rps('scissor','rock')
