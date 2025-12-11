const userEmail ="kks@gmail.com"

if (userEmail){
    console.log("Is there")
} else {
    console.log("not there")
}// Is there


//falsy value

//  -->  false,0,-0,BigInt 0n,"",null,undefined,Nan




//truthy vaiue

//  -->  "0" , " false...."all which are inside string..., " ", [],{},function(){},


if (userEmail.length === 0){
    console.log ("Array is empty");
} else{
    console.log("hii")
}  //hii

const emptyObj = {}
if (Object .keys (emptyObj).length ===0){
    console.log("Object is empty");
}


// Nullish  Coalescing operator (??): null undefined 

let val1;
//val1 = 5 ?? 10
//console.log (val1)//2

//val1 = null ?? 10
//console.log (val1)//10

val1 =undefined ?? 15 ?? 90
console.log(val1) //15



//Terniary operator

// condition ? true : false

const iceTeaPrice = 100// less than 50
iceTeaPrice >= 50 ? console.log("less than 50") : console.log ("more than 80")