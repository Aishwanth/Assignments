/*
ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"


*/

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//list if IT employees
let itemp=employees.filter(Element=>Element.department=='IT')
console.log(itemp);

// +10% bonus
let bonus=employees.map(Element=>Element.salary+(Element.salary/100)*10)
console.log(bonus);

//total salary of all employees 
let totalsalary=employees.reduce((previous,next)=>{
    sum = previous+next.salary
    return sum
},0)
console.log(totalsalary);

// employee with salary 30000
let findemp=employees.find(Element=>Element.salary==30000)
console.log(findemp);

//index of employee "Neha"
let empindex=employees.findIndex(Element=>Element.name=="Neha")
console.log(empindex);


