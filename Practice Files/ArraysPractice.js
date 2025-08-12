// Make an array of three fruits and print the second fruit
let fruitArr=["Mango","Banana","Apple"]
console.log(fruitArr[2]);

//Add pineapple at end and peach at begining of this array
fruitArr.push("Pineapple")
fruitArr.unshift("Peach")

//Replace apple with kiwi
fruitArr.pop();
fruitArr.push("kiwi")
console.log(fruitArr);

//Us .map() to square each number
let numbers=[10,8,6,4]
let square=numbers.map(function(val){
    return val*val
})
console.log(square);

// Use .filter() to keep numbers greater than 5
let condition=numbers.filter(function(val){
    return val>5 ;
})
console.log(condition);
