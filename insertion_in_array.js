let testarray=[10,20,30]
//dynamic insertion
    // end
    
testarray.push(40)
console.log(testarray);
    //start
testarray.unshift(1)
console.log(testarray);
    //in between 
testarray.splice(2,0,123)
console.log(testarray);

//dynamic deletion
    //start
    
let removedelement=testarray.shift()
console.log(removedelement);

console.log(testarray);
    //end
let removedelement1=testarray.pop()
console.log(testarray);
   // in between
testarray.splice(2,2)
console.log(testarray);
//dynamic updating
 testarray.splice(1,2,852)
 console.log(testarray);