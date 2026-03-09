const temparature=[32,35,28,40,38,30,42];
// using filter
let result = temparature.filter(Element=>Element>35)
console.log(result);
 // celsius to fahrenheit using map()
 let result1= temparature.map(Element=> (Element*9/5)+32)
 console.log(result1);
 // avg tempruture reduce()
 let avg= temparature.reduce((privous,index)=>{
    sum=privous+index;
    return sum/temparature.length;
 })
 console.log(avg);
 // find() tem>40
let rel=temparature.find(ele=> ele>40);
console.log(rel);
//findindex 
let rel1= temparature.findIndex(index=>index=="28")
console.log(rel1);


 