/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"

*/

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
//instock product 
let instockpro=cart.filter(Element=>Element.inStock==true)
console.log(instockpro);
//creating new array
let newarray=cart.map(value=> ({ name : "phone" ,totalprice : 90000 }));
console.log(newarray);
// calculate grand total 
let grandtotal=cart.reduce((pri,next)=>pri+next.price,0)
console.log(grandtotal);

// get details ofr mouse
let details =cart.find(Element=>Element.name=="Mouse")
console.log(details);
//find index of keybord
let index=cart.findIndex(Element=>Element.name=='Keybord')
console.log(index);




