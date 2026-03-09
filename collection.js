// array(homogenious data)(pack of elements)
//object(pack of properties)
//array of objects
/*
// array has reference not names
let marks =[90,81,18,982]
let names=['aishu','vinu','earth']


// iterate(for-of loop)
for(let v of marks){
    console.log(v);
}
for(let i of names){
    console.log(i);
    
}
*/

// object(unordered collection)
let student={
    name:"ramu",
    age: 10,
    sno:100,
    course:"cse"
}
console.log(student.name);

console.log(student['sno']);
// iterate of in obj (for-in loop)
for(let i in student){
    
    console.log(`${i} is ${student[i]}`);
    
    
}
