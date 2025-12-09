// Immediately Invoked Function Expression (IIFE)

//we use IIFE bcz..these Global scope se pollution hota hai , so that pollution ko hatane ke liye we use IIFE

//....()()

(function chai(){
    console.log (`ITS YOU`)
})();//ITS YOU


//unnamed IIFE
( () => {
    console.log (`ITS ME`);
} )()//ITS ME

// so here ; symbol is main imp...


//named IIFE
( (name) => {
    console.log (`ITS ME ${name}`);
} )(`KKS`)//ITS ME KKS...

//so lastly so write 2 IIFE's once we should use ; symbol between them i.e between to IIFE'sari


