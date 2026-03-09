let search = function(numbers,a){

    for(let i=0;i<numbers.length;i++){
        if(a===numbers[i]){
            return `found at ${i} ` 
        }
    }
            return "not found"
            
}
let arr=[10,40,50,60];
console.log(search(arr,10));
console.log(arr.length);

