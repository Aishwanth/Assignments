// functions are first class objects in js
// a function can return another functon as the argument to another function
let makepayment=function(amount,paymenttype){
    console.log(`payment of ${amount} started`)
 paymenttype()   
    
}
let UPIpayment=function(){
    console.log("upi done")
    
}
let card=function(){
    console.log("card done");
    
}
makepayment(2000,UPIpayment)
makepayment(500,card)