// for of loop
//["","",""]  -- > string
//[{},{},{}]  -- > objects

const arr =[1,2,3,4,5]
for (const num of arr) {
    console.log (num);
}  // 1 to 5

 const greeting = `hello world`
 for (const greet of greeting){
    console.log(greet)
 }   // h e l l o   w o r l d...in row 


 // Maps 

 const map=new Map()
map.set("In","India")
map.set("USA","United state Of America")
map.set("In","India")

console.log(map);  //Map(2) { 'In' => 'India', 'USA' => 'United state Of America' }

for (const[key,value] of map){
    console.log(key,"-->", value);
}
const myObject = {
  "game1": "Kabbadi",
  "game2": "Cricket"
};


//for (const[key,value] of myObject)
 //  console.log(key) ;
 // 
 //gives myObject is not Iterable  so we have to use for in loop other than for of loop

// so for objets we use for of loop