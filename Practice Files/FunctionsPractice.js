//Q1 Use rest parameter to accept any number of scores and return total

function getScore(...scores){
    let total=0;
    scores.forEach(function(val){
        total=total+val;

});
    return total;

}
console.log(getScore(10,20,30,40,50));
// Q2 Pass a function into another function and execute it inside

function lmn(val){
val();
}
lmn(function()
{
    console.log("I am mahib");
})

// Q3 what is a closure?

function abcd(){
    let val=0;
    return function()
    {
        console.log(val);
        
    }

}
abcd()();

//BMI calculator

function bmiCalc(weight,height)
{
    let bmi= weight /( height * height );
    return bmi;
}
console.log(`Your bmi is : ${(bmiCalc(69,1.7).toFixed(2))}`);

// Reuseable discount Calculator(HOF)
function discCalc(discount)
{
    return function(price){
        
        return price-price*(discount/100)
        
    }
}
let discounter=discCalc(10);

console.log(`Discount is : ${discounter(200).toFixed(2)}`);