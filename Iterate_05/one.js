// for loop

//for (let l = 0; index < 10; index++) {
  //  const element = index;
  //  console.log (element);
    
//}// 0 to 9

//for (let i = 0; i < 10; i++) {
  //  const element = i;
  //  if(element ==8){
    //    console .log ("YESS")
    //}
//    console.log (element);
    
//}// 0 to 9 , but before number 8 YESS will gets print


for (let k = 0; k <=20; k++) {
     //   console.log(`Outer loop value: ${k}`);
    for (let p = 0; p <=20; p++) {
       // console.log(`Inner loop value ${p} and inner loop ${k}`)
       // console.log(k +`*`+p+`=`+ k*p);
    }
}// Tables.....

let myArray = ["flash","kind","fantasy"]
console.log (myArray.length);
for (let index = 0; index <  myArray.length; index++) {
    const element =  myArray[index];
    console.log(element)
    
}// here index++ have a big roll....if we not use it ,suppose in the place of that if we put index...it gives only flash repeatly..non stop,,,after by typing  Ctrl C we can...stop that


// break and continue

for (let i= 1; i<= 20; i++) {
    if (i == 5){
        console.log (`Detected 5 `);// upto 4 prints next gives statement as Detected 5
        break
    }
   // console.log(`Value of i is ${i}`);
    
}


for (let i= 1; i<= 20; i++) {
    if (i == 5){
        console.log (`Detected 5 `);// upto 4 prints next gives statement as Detected 5
        continue
    }
    console.log(`Value of i is ${i}`);
    
}
