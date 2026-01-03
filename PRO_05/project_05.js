const rondomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let intervalId;
const startChangingColor = function(){
    if (!intervalId){
        intervalId = setInterval(changeBgColor,1000);
    }

    function changeBgColor(){ 
        document.body.style.backgroundColor = rondomColor()
    };
};
const stopChangingColor = function(){
     clearInterval(intervalId);
     intervalId = null;// to avoid multiple intervals if start is clicked again
};
document.querySelector("#start").addEventListener("click",startChangingColor);
document.querySelector("#stop").addEventListener("click",stopChangingColor);