/*



Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
    */
   const marks = [78, 92, 35, 88, 40, 67];
   // marks=> 40
   let passmarks=marks.filter(Element=>Element>=40)
   console.log(passmarks);
   //map add 5 marks
   let gracemarks=marks.map(Element=>Element+5)
   console.log(gracemarks);
   //highest marks
   let max=marks.reduce((priv,next)=>{
    if(priv>next){
        return priv
    }else 
        return next
   })
   console.log(max);
   //find marks below 40
   let below=marks.find(Element=>Element<40)
   console.log(below);
   // findindex of 92
   let index=marks.findIndex(Element=>Element==92)
   console.log(index);
   
   
   
   
   