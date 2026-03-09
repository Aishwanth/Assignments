// we can create the boj without class
// obj literal
/*
const test={
    a:10,

}
    */






//create 20 student obj
class Student{
    //properties
    sno;// if u use # it becomes private 
    name;
    email;
    //constructor
    constructor(sno,name,email){
        //initialise the obj
        this.sno=sno;
        this.name=name;
        this.email=email;
    }
    //methods
    getStudentName(){
        return this.name;
    }
}
// create obj
let std1=new Student(10,'aishu','aishu@gmail.com');
console.log(std1.name);



/*

class Emp{
    #eno;
    #name;
    static roll=122;

    //constructor
    constructor(eno,name){
        this.#eno=eno;
        this.#name=name;

    }
    // ststic method
     getdata(){
        console.log(`eno is ${this.#eno}and name is ${this.#name}`);
        
    }
    // instance method
    static testMethod(){
        return this.test;
    }
}
let emp1=new Emp(10,'aish')
this.getdata();
console.log(emp1.name);
*/