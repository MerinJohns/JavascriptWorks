var arr=["program","project","profile","profession"]

//convert all object to uppercase

// var upperCaseStrings=arr.map(w=>w.toUpperCase())
// console.log(upperCaseStrings);

//print length of each string object in the array

// var lengthOfEachWord=arr.map(w=>w.length)
// console.log(lengthOfEachWord);

//return words starting with "pro"

//var arr=["program","project","profile","profession","django","python"]

// var wordWith=arr.filter(w=>w.startsWith("pro"))

// console.log(wordWith);

//longest word

// var longWord=arr.reduce((w1,w2)=>w1.length > w2.length ? w1 : w2)
// console.log(longWord);

//shortest word

// var shortestWord=arr.reduce((w1,w2)=>w1.length < w2.length ? w1 : w2)
// console.log(shortestWord);

//or

var arr=["program","project","profile","profession","django","python","zero","acdefgher"]

arr.sort((w1,w2)=>w2.length - w1.length)

console.log(arr);