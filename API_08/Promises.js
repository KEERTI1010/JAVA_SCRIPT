//fetch('https://api.example.com/data').then().catch().finally();

const promiseone = new Promise(function(resolve, reject){
    // Do some async operation
    // like DB calls, network calls etc.
    setTimeout(() => {console.log("Promise one resolved")}, 2000);
    resolve();  // resolve ---> fulfilled , i.e if we add this both line 6 and 11 grts executes i.e prints in terminal , otherwise it prints only 6th line
})

promiseone.then(function(){  // .then ---> resolve (directly called when promise is resolved)
    console.log("Promise one then executed");
})

new Promise(function(resolve, reject){
    setTimeout(() => {
    console.log("Promise two pending");
    resolve();
},2000)
}).then(function(){
    console.log("Promise two resolved");
})


const promisethree= new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({status:200, message:"OK"})// same as this
    },2000);
})

promisethree.then(function(user){
    console.log(user)
})

const promisefour= new Promise(function(resolve, reject){
    setTimeout(function(){
       let error=false;
       if(!error){
        resolve({username:'john', password:'123'});
       } else {
        reject('Error: Something went wrong')
       }
    },2000);
})
// const username = new promisefour.then((user)=>{
//     console.log(user);
//     return user.username; 
// })

// console.log(username); // Promise { <pending> } because the promise is not yet resolved so we have to remove that conl that and have to modify


// promisefour
// .then((user)=>{   
//     console.log(user);
//     return user.username
// })
// .then((username)=> {
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// }) 


//Promise one then executed
// Promise one resolved
// Promise two pending
// Promise two resolved
// { status: 200, message: 'OK' }
// Error: Something went wrong  (for true in line 36)                       

// Promise one then executed
// Promise one resolved
// Promise two pending
// Promise two resolved
// { status: 200, message: 'OK' }
// { username: 'john', password: '123' }
// john (for false in line 36)

//so now what happen if we use .finally

promisefour
.then((user)=>{   
    console.log(user);
    return user.username
})
.then((username)=> {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The Promise is either resolved or rejected")); 

// .finally ---> it will execute no matter what whether the promise is resolved or rejected



const PromiseFive= new Promise(function(resolve, reject){
    setTimeout(function(){
       let error=true;
       if(!error){
        resolve({username:'ram', password:'123'});
       } else {
        reject('Error: Something went wrong')
       }
    },2000);
})

// async function consumePromisefive(){
//     const response = await promisefive
//     console.log(response);          // for true gives error and for false gives the objecti.e { username: 'ram', password: '123' }
// }

async function consumePromiseFive(){
    try{
        const response = await PromiseFive;
        console.log(response);
    } catch(error){
        console.log(error);
    }
}

consumePromiseFive();

// await ---> it is used to wait for a promise to be resolved or rejected inside an async function
// async ---> it is used to declare a function as asynchronous function which returns a promise
// so basically async await is used to handle promises in a better way rather than using .then and .catch chaining



//  async function getAllUsers(){
//      try{
//          const response = await fetch('https://jsonplaceholder.typicode.com/users');
//          const data = await response.json();
//          console.log(data);
//      } catch(error){
//          console.log(error);
//      }
//  }
//  getAllUsers(); // gives the array of user objects from the API


// fetch API is used to make network requests to get data from a server
// it returns a promise which resolves to the response object
// we can use await to wait for the promise to be resolved and then we can use .json() method to parse the response data into JSON format


fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=> {
    return response.json();
})
.then ((data)=> {
    console.log(data);
})
.catch((error)=> console.log(error))  //  same as upper

