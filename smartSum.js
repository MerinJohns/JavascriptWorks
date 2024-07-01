// smartSum(10,5) =>5
//smartSum(5,10) =>5

function smartSum(num1,num2){

    return num1>num2?num1-num2:num2-num1;
}

console.log(smartSum(5,10));

//or 

// method known as hoisting ; fns,variables,classes,imports

console.log(smartSum(5,10));

function smartSum(num1,num2){

    return num1>num2?num1-num2:num2-num1;
}