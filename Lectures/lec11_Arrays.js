// in JavaScript arrays can have different dataTypes in it
let arr=[1,'Hello',true,3.5]

console.log(arr[1]);

// You can also generate an array
let array=new Array();

// Methods
arr.push(34 );
console.log(arr[4]);
arr.pop();
arr.unshift(0); 
arr.splice(2,1)
let newarr=arr.slice(0,3)
console.log(arr);
console.log(newarr);
arr.reverse();
console.log(arr);
let myarr=[1,45,6,8,3,0]
let sortedarr=myarr.sort(function(a,b){
    return a-b; // ascending    
})
console.log(myarr);


//For-Each
myarr.forEach(function(a){
    console.log(a+5);
    
})

//Maps
let maparr=myarr.map(function(a){
    if(a>10) return a;
    
})
console.log(maparr);

//Filter
let filterarray=myarr.filter(function(a)
{
    if(a>4) return true;
})
console.log(filterarray);

//Reduce
let reduceArray=myarr.reduce(function(accumulator,a){
    return accumulator+a;
},0)
console.log(reduceArray);

//find
let finArray=myarr.find(function(a)
{
    return a === 3;
})
console.log(finArray);
