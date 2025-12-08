//let a = 10
//const b = 34
//var c = 65

//console.log(a);//10
//console.log(b);//34
//console.log(c);//65

// so here there is no problem...actual problem niche hai

let a = 300//at last
if (true){
    let a = 67
    const b = 43
    var c = 23
    d = 78
   // console.log("INNER",a);//67
}

//console.log (a);// ERROR --> a is not defd
//console.log(b);//ERROR --> b is not defined
//console.log(c);//23 ---> big problem...value of var scope {} bahar aya...
//console.log(d);//78 ---> same as var ...that why we didnt use var

//after adding that let a = 300 outside the scope..gives

//console.log (a);//300


//NESTED SCOPE//--> child function can execss parent function

function one (){
    const userName="KEERTI"

    function two (){
        const website = "GOOGLE"
        console.log(userName);//after commenting that 40th line we get KEERTI in terminal

    }
    //console.log(websie);//website is not defined
    
    two()
}

one()


if (true){
    const username = "Sam";
    if (username=="Sam"){
        const App = "Linkendin"
        console.log(username + App);// after commenting line 54 and 56 it givs...--> SamLinkendin
    }
   // console.log(App);//App is not defined
}
//console.log(username);//username is not defined



//********INTRESTING********

function addone(num){
    return num +1
}
addone(5)//nothing//


//if for same 
console.log(addone(5))//6

function addone(num){
    return num +1
}

console.log(addTwo(9))//error  ---> HOSTING
const addTwo=function (num){
    return num+1
}

