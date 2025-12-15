// forEach

const codinglang = ["js","Css","py","JAVA"]
codinglang.forEach(function(itsme){
    console.log(itsme);
})  //js
    //Css
   //py
   //JAVA

            // other


codinglang.forEach ((item)=> {
    console.log(item);
})  // same as previous output

codinglang.forEach ((item , index , arr)=> {
    console.log(item , index, arr);
})  // js 0 [ 'js', 'Css', 'py', 'JAVA' ]
    //Css 1 [ 'js', 'Css', 'py', 'JAVA' ]
    //py 2 [ 'js', 'Css', 'py', 'JAVA' ]
    //JAVA 3 [ 'js', 'Css', 'py', 'JAVA' ]


    