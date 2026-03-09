//array of objects

let emp=[ {eno: 1, name:"vinu"},{eno:2, name:"ramu"},{eno: 3,name:"nitish"}]
for(let i in emp){
    console.log(`eno : ${emp[i].eno} and  name: ${emp[i].name}   `);
    
}


// complex obj
let student={
    rollno:1,
    firstname:"ravi",
    lastname:"kumar",
    marks:[90,60,40,30,40],
    address:{
        city:"hyd",
        pincode:1856,
    },
    getfullname:function(){
        return this.firstname+this.lastname
    },
    avgmarks:function(){
        let sum=0;
        for(let i=0;i< this.marks.length;i++){
            sum=sum+this.marks[i]
        }
        let result = sum/this.marks.length;
        return result
    }


}
console.log(student.getfullname());
console.log(student.avgmarks());
