// a function can be stored in a variable
// a function can return another function

/*let test= function(){
    return function(){
        return 100
    }
}
let result=test()
console.log(result());
*/
let game = function(name){
    return function(leval){
    console.log(`hello ${name},you are at ${leval}`);
    }
}
let leval1=game('ravi')
leval1(1)
leval1(2)
leval1(3)
let lev=game('ramu')
lev(1)
lev(2)
