// num=7
//1,num exclude

//7
//2,3,4,5,6

var num=11;

var isPrime=true;

for(let i=2; i<num; i++){

    if(num%i==0){

        isPrime=false; 

        break
    }

}

console.log(isPrime);