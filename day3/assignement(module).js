/*
Assignment 1: 
-------------
Task Management System (ToDo App Modules):
     Building a task manager like Todoist

Requirements:
     Create a modular todo app with 3 separate files:

   */    
          
      //  i. validator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        // Your code here
                            if(!title)return false;
                            if(title.trime().length<3) return false;
                     
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        const validatePriority=["low",]
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        // Your code here
                      }

