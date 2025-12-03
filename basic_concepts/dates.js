//DATES

let myDate = new Date(); // 
console.log(myDate); //2024-06-12T10:20:30.456Z (example output, will vary based on current date and time) 
console.log(myDate.toString()); // Wed Jun 12 2024 12:20:30 GMT+0200 (Central European Summer Time) (example output)
console.log(myDate.toLocaleString()); // 6/12/2024, 2:20:30 PM (example output based on locale)
console.log(typeof myDate); // object
let myCreatedDate = new Date('2025-12-03');
console.log(myCreatedDate.toString()); // Tue Dec 03 2025 05:30:00 GMT+0000 (Coordinated Universal Time)

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1718124030456 (example output, will vary based on current timestamp
console.log(myCreatedDate.getTime());//1764915000000
console.log(Math.floor(Date.now()/1000));//1718124030 (example output, will vary based on current timestamp


let newDate = new Date();
console.log(newDate);// current date and time
console.log(newDate.getFullYear()); //2025
console.log(newDate.getMonth()); //12 (dec, as months are 0-indexed)
console.log(newDate.getDate()); //3


newDate.toLocaleString('default', { weekday: 'long' }); // "Tuesday"
newDate.toLocaleString('default', { month: 'long' }); // "December"