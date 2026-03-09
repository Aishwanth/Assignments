//example of promises
//      make api request(application program interface )
// json language is used b/w all languages as a common (which is also used by API`s)
// json = "javascript object notation"
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then((message)=>console.log("good :",message))
.catch((error)=>console.log("error:",error)
)