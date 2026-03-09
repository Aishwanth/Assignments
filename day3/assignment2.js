/*
Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"


*/
const courses = ["javascript", "react", "node", "mongodb", "express"];

let result=courses.filter(Element=>Element.length>5)
console.log(result);
// uppercase
let result1=courses.map(Element=>Element.toUpperCase())
console.log(result1);
// single string
let result2= courses.reduce((previous,index)=>previous+ index)
console.log(result2);
// find react
let result3 = courses.find(Element=>Element=="react")
console.log(result3);
// findindex of node
let result4= courses.findIndex(Element=>Element=="node")
console.log(result4);


