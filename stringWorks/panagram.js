
var text="THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG".toLowerCase()

//kodthitulla textil ella alphabet varanam

var alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase()

var isPanagram=true;

for(let ch of alphabets){

    if(!text.includes(ch)){

        isPanagram=false

        break


    }
}
console.log(isPanagram); //13