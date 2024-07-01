//print squares of all numbers

// var squares=(num)=>num**2

// console.log(squares(3));

//print cube of all numbers

// var cubes=(num)=>num**3
// console.log(cubes(3));

//isEven

// var isEven=(num)=>num%2==0
// console.log(isEven(14));

//isOdd

// var isOdd=(num)=>num%2!=0
// console.log(isOdd(5));

//isPositive

// var isPositive=(num)=>num>0
// console.log(isPositive(5));

//isNegative

// var isNegative=(num)=>num<0
// console.log(isNegative(-7));

//sum of 2 nums

// var add=(num1,num2)=>num1+num2
// console.log(add(3,2));

// var smartSub=(num1,num2)=>{

//     if(num1>num2){

//         return num1-num2
//     }

//     else{

//         return num2-num1
//     }
// }

//or

var smartSub=(num1,num2)=>num1>num2?num1-num2:num2-num1

console.log(smartSub(10,5));

console.log(smartSub(5,10));