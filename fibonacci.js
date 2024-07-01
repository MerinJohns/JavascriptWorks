var prev=0;

var current=1;

console.log(prev);

console.log(current);

for (let i=1; i<=20; i++){

    let next=prev+current;

    console.log(next);

    prev=current;

    current=next;

}