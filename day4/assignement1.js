/*
Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books
      */


class Book{
     title;
     author;
     pages;
     isavailable;

     constructor(title,author,pages,isavailable){
        this.author=author;
        this.isavailable=isavailable;
        this.pages=pages;
        this.title=title;

     }
     barrow(){
        if(this.isavailable==false){
            console.log(false)
            
        }else{
           console.log(true)
           
        }
    
        
     }
     returnbook(title,author,pages){
        this.map(this.title,this.author,this.pages)
        
     }
     getinfo(){
        console.log(`the ${this.title} by ${this.author} has pages of ${this.pages}`);
        
     }
     islongbook(){
        if(this.pages>300){
            return true
        }else{
            return false
        }

     }
}
let book1=new Book("harri","zxcv",300,true);
let book2=new Book("xyz","ammu",3000,true);
let book3=new Book("ert","aishu",800,false);
let book4=new Book("xman","nitish",900,true);
let book5=new Book("hello","erty",100,true);
 
let arraybook=[book1,book2,book3,book4,book5]

// printing all books
for (const v of arraybook) {
console.log(v);
}


// borrow 2 books
book3.barrow()
book1.barrow()

// returning book
returnbook("hello","hi",200)
