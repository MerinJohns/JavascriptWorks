//classical concept

// class Student{

//     setStudent(name,course,degree){
//         this.name=name;
//         this.course=course;
//         this.degree=degree;
//     }
//     printStudent(){
//         console.log(this.name,this.course,this.degree);
//     }
// }

// //obj create

// var obj=new Student()

// obj.setStudent("jisna","django","msc")
// obj.printStudent()


//using constructor

class Student{

    constructor(name,course,degree){
        this.name=name;
        this.course=course;
        this.degree=degree;
    }
    printStudent(){
        console.log(this.name,this.course,this.degree);
    }
}

//obj create

var obj=new Student("jisna","django","msc")

// obj.setStudent("jisna","django","msc")
obj.printStudent()