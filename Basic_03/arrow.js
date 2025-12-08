const user={
    name:"Sam",
    price:200,

    welcomeMsg:function(){
        console.log(`${this.name},welcome to website bro..`);
       // console.log(this)//after writing this ---> gives.>.>Sam,welcome to website bro..
                          //{ name: 'Sam', price: 200, welcomeMsg: [Function: welcomeMsg] }
                           //oyy,welcome to website bro..
                             //{ name: 'oyy', price: 200, welcomeMsg: [Function: welcomeMsg] }  
    }
}
//user.welcomeMsg()//Sam,welcome to website broo
//user.name="oyy"
//user.welcomeMsg()//oyy,welcome to website broo

//after commenting all upper 3 line and 7th
//console.log(this)//{}

function chai(){
    console.log(this);
    //let username="kk"
    //console.log(this.username)//undefined
}
//chai()//bhohat sari value

// so function variable replace by => called ARROW Function

const kee = () => {
    let username = "ASHA"
    console.log(this.username);//so here if we use only this it gives {}
}
//kee()//undefined

//i.e ()=>{}

const addTwo = (num1,num2) =>{
    return num1+num2
}
//addTwo(5,9)//nothing
console.log(addTwo(5,9))//14

//IMPLICITE return  --> no {} , in one line
const addThree = (num1,num2,num3) => num1+num2+num3
console.log(addThree(7,9,8))//24
//const addThree=(num1,num2,num3)=> ({user:"kks"})//{user:'kks'}

//EXPLICITE return --> we have to use {}...so that if we use {} then we should use return variable while executing program


