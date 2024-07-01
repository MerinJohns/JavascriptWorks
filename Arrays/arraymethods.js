// var colors=["red","yellow","grey"]

// console.log(colors.includes("red"));



//shift()

// colors.shift()

// console.log(colors);

//push(object)

// colors.push("white")

//console.log(colors);

//var popped_obj=colors.pop()

// console.log(colors);
// console.log(popped_obj);

//unshift

// var len=colors.unshift("black")

// console.log(colors);
// console.log(len);

//var arr=[10,11,12,13,14,15,16]

// var result=arr.map(num=>num+2)

// console.log(result);


//cubes

// var cubes=arr.map(num=>num**3)

// console.log(cubes);

//squares

// var squares=arr.map(num=>num**2)

// console.log(squares);

//if num > 12 num-1 & num < 12 num+1

var arr=[10,11,12,13,14,15,16]

// var result=arr.map((num)=>num>12 ? num-1 : num<12 ? num+1 : num)

// console.log(result);


// var total=arr.reduce((n1,n2)=>n1+n2)

// console.log(total);

//product

// var product=arr.reduce((n1,n2)=>n1*n2)

// console.log(product);

//max num

// var maxNum=arr.reduce((n1,n2)=>n1>n2?n1:n2)

// console.log(maxNum);

//min num

// var minNum=arr.reduce((n1,n2)=>n1<n2 ? n1 : n2)

// console.log(minNum);


//sort

// o1=> first parameter return -1
//o2 => second parameter return 1

// function compare(o1,o2){

//     if(o1<o2){
//         return -1
//     }

//     else{

//         return 1
//     }
// }

// arr.sort(compare)
// console.log(arr);

//or

// function compare(o1,o2){

//     return o1<o2 ? -1 : 1
// }

// arr.sort(compare)
// console.log(arr);

//or

// arr.sort((o1,o2)=>o1<o2?-1:1)
// console.log(arr);
//or

// arr.sort((o1,o2)=>o1-o2)
// console.log(arr);

//descending order sort

// arr.sort((o1,o2)=>o1>o2?-1:1)
// console.log(arr);

//or

// arr.sort((o1,o2)=>o2-o1)
// console.log(arr);