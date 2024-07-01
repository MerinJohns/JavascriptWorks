var word="hellopython";

var wc={};

//1st method

// word.split("").map(ch => ch in wc ? wc[ch]+=1 : wc[ch]=1)

// console.log(wc);

//2nd method

// for(let ch of word){

//     if(ch in wc){

//         wc[ch]+=1
//     }

//     else{

//         wc[ch]=1
//     }
// }
// console.log(wc);

//3rd method

for(let ch of word){

    ch in wc ? wc[ch]+=1 : wc[ch]=1
}
console.log(wc);