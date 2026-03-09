let array=[55,85,82,0,45,8]


/*
let result=[]
for (let element of array) {
    if(element>30){
        result.push(element)
    }
}
console.log(result);
*/
//filter
let result1= array.filter((Element)=> Element>30);
console.log(result1);
// elements b/w 40 and 80
let result2= array.filter(Element=>Element>40 && Element<80);
console.log(result2);



//map(modification)
//add 10 for each element
let r3=array.map(Element=>Element+10)
console.log(r3);
//add 10 to the ele<50 and subtract 20 from ele>50
let r4 = array.map(Element=> {
    if(Element<50){
        return Element+10
    }else
        return Element-20
})
console.log(r4);


// reduce (when we have result as a single value )
    // find the sum
let sum =   array.reduce((accumulator,Element)=>accumulator+Element)
//                          506         85          591
//                          591         82          673 
console.log(sum);
    //find small element and big ele

    let smallest = array.reduce((accumulator,Element)=>{
        if(accumulator<Element){
            return accumulator;
        }else
            return Element;
    })
    console.log(smallest);
    
    let largest1 = array.reduce((accumulator,Element) => {
        if(accumulator>Element){
            return accumulator;
        }else
            return Element; 
    });
    console.log(largest1);

//find index
let el1=array.findIndex(Element=> Element===85)
console.log(el1);

// sort()
let arr =[9,100,90,8,50]        // sort() will change  
let srt = arr.toSorted((a,b)=>a-b); // tosorted will not modify the org array 
console.log(srt);
console.log(arr);



