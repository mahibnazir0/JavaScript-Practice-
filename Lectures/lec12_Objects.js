// Object syntax
let obj={
    name:"Ahmad Sultan",
    age:20,
    height:{
        In_feet:5 ,
    }

};
console.log(obj.age) 
let newVar = "name"
console.log(obj[newVar])

// Nesting

const user={
    name: "Ali",
    address: {
        city:"Lahore" ,
        area:"Johar Town",
        House_no: 138,
        location:{
            lat:23.4,
            long:22.5,
        } ,      
    },

};
// if i want to access long
console.log(user.address.location.long);
//if i want to acces it one or more times
let{lat,long}=user.address.location;
console.log(lat);

let forObj ={
    loop: "for",
    quality:"fast",
    working: 8  ,// out of 10
};

for(let key in forObj){
    console.log(key , forObj[key]);
    
}
Object.entries(forObj).forEach(function(val){
    console.log(`${val[0]} : ${val[1]}`);
});

// Deep Clone (i am using obj)
// let obj2={...obj};
let obj2=JSON.parse(JSON.stringify(obj));
obj2.height.In_feet=6;
console.log(obj);
console.log(obj2); // this is the error


