
var students={

    name:"merin",

    course:"django",

    degree:"btech",

    points:10
}

// console.log(students.name);

// students.grade="a+";

// console.log(students);


if("course" in students){

    console.log("present");
}

else{

    console.log("not present");
}

//if points exist add 10 extra points else set points as 15

if("points" in students){

    //update
    students.points+=10
}

else{

    //add
    students.points=15
}

console.log(students);