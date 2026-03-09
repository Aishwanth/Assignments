//promise
    // state of promise
        //pending
            //fulfilled or rejected

console.log("wait for call");
let future=true;

//promise producer(create promis)
const promiseobj=new Promise((fulfilled , rejected)=>{
setTimeout(() => {
    
}, 5000);
if(future==true){
   fulfilled("hello")
    
}else{
   rejected("bye")
    
}
})
promiseobj
.then((message)=>console.log("message id then :",message))
.catch((errormessage)=>console.log("error is :",errormessage)
)

// promis consumer


console.log("waithing for 10k");
let futurecondition=true;
const obj=new Promise((fuilfilled, rejected)=>{
    setTimeout(() => {
        
    }, 5000);
    if(futurecondition==true){
        fuilfilled("10k recevied")
    }else{
        rejected("not recevied")
    }
})

obj
.then((message)=>console.log(" paid :",message))
.catch((errormessage)=>console.log("not paid :",errormessage))

