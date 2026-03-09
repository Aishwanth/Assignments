//synchronous(executing all step by step )
/*
console.log("first");
for(let i=0;i<9000000000;i++){}
console.log("second");
*/

//                                      asynchronous

console.log("first");
setTimeout(() => {
    console.log("task completed");
    
}, 600);
console.log("second");
console.log("third");



//                                      Timer function

setTimeout(() => {
    console.log("callback executed");
    
 }, 3000);
console.log("hi");


setInterval(() => {
    console.log("hi");
    
}, 200);
