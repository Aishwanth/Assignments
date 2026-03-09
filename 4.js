let marks=[90,2,3,4,78,65,98];
let b=marks[0];
for(let i=0;i<marks.length;i++){
    if(marks[i]<b){
        b=marks[i];
    }
}
console.log(b);