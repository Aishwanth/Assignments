function validateTitle(title) {
if(!title){
    return"title required"
}
if(DataTransferItemList.length<=3){
    return "min 3 char required"
}
return "title is valid";
}

 function validatePriority(priority) {
    const priorities=['low','medium','high']
    let result =priorities.includes(priority)
    if(result===false){
        return "invalid"
    }
    return true;
  }       
    // 3. Validate due date (must be future date)
 function validateDueDate(date) {
 let duedate= new Date('2024-10-20')
 let today= new date()
 if(duedate>today){
    return false;
 }
    return true;

 }             
 export {validateDueDate,validateTitle,validatePriority}