//Dates--obj in js
let myDate=new Date();
// console.log(myDate.toString());//Thu Dec 25 2025 14:29:32 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());//Thu Dec 25 2025
// console.log(myDate.toLocaleDateString());//12/25/2025
// console.log(typeof myDate);//object

let date=new Date(2025,0,23);//in js month starts from 0
// console.log(date.toDateString());


let date2=new Date(2025,12,2,5,2);//2026 jan
//console.log(date2.toDateString());


let date3=new Date("2025-02-23");
// console.log(date3.toLocaleString());
let date4=new Date("01-02-2023");
// console.log(date4.toLocaleDateString());

// =========================================================
//TimeStamp

let stamp=Date.now();
// console.log(stamp);//1766654082594 miliSec- from 01-jan-1970 to now

// console.log(date4.getTime());//let date4=new Date("01-02-2023") to milliSec

// console.log(Date.now()/1000);//to get in second instead of milliSec
// 1766654304.643
// 1766654304
// console.log(Math.floor(Date.now()/1000));

 let newDate=new Date();
//  console.log(newDate);
//  console.log(newDate.getMonth());
//  console.log(newDate.getDay());
 
//  `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long"
})

