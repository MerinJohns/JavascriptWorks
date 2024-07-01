var word1="silent";

var word2="listen";

var sortedString1=word1.split("").sort().join("")

var sortedString2=word2.split("").sort().join("")

console.log(sortedString1==sortedString2 ? "anagram" : "not anagram");