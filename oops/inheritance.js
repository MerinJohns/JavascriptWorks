class Parent{

    m1(){
        console.log("inside parent m1 method");
    }
}


class Child extends Parent{    //extends keyword is used for inheritance

    m2(){

        console.log("inside child m2 method");
    }
}


const ch=new Child()  //object creation

ch.m2()
ch.m1()

