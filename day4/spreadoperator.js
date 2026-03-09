//spread operator to copy the array and obj
// create copy

                                        // shalo copy
/*
let original={a:10,b:20}
let copy={...original}
//changing original
original.a=123
console.log(original);
console.log(copy);
let orgarr=[1,2,3,]
let copyarr=[...orgarr]
orgarr.push(20)
console.log(orgarr);
console.log(copyarr);
 */
/*
                                            // deep copy 
let person={
    name:"aish",
    hno:56312,
    address:{
        city:"hyd",
        pin:852
    }
}

let copyperson=structuredClone(person)
person.name="ammu";
person.address.city="xyz";
console.log(copyperson);
console.log(person);
*/



//add element while copying 
let arr=[1,2,3]
let cpy=[...arr,10]
console.log(arr);
console.log(cpy);

let a={q:10}
let cpy2={...a,b:20}

                                                //marge
let ar1=[1,2,3,4]
let ar2=[5,6,7,8]
let ar3=[...ar1,...ar2]


                                                // rest parameter


function sum(...a){    
    return a.reduce((acc,nxt)=>acc+nxt)
    
}
let b = sum(10,20,3,60,40);
console.log(b);



