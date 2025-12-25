//arrays
// colection of multiple element in single element
//js arr is re-sizeable
const arr=[1,2,3,4,5,6];
// console.log(arr);
// console.log(arr[1]);


//shallow copy- shallow copy of an obj is a copy whose properties share the same ref point
// --what changes we have done- it reflect in og arr

//deep copy-of an obj is a copy whose properties don't share the same ref point

const arr2=new Array(1,23,3);
// console.log(arr2);



// ===========================Arr methods===============================
arr.push(69);//add value
// console.log(arr);

arr.pop();//remove last value from arr
// console.log(arr);

arr.unshift(9);
// console.log(arr);//add element in starting
arr.shift();//remove one el from starting
// console.log(arr);

console.log(arr.includes(9));//false-type boolean
console.log();

const arr3=arr.join();
console.log(arr);
console.log(arr3);
console.log(typeof arr3);//atring

//slice & splice
console.log("==========slice&splice=========");
let x=[1,2,3,4,5,6,7,8,9];
let y=x.slice(0,3);
console.log(x);
console.log(y);
let z=x.splice(0,3);//delete
console.log(z);
console.log(x);



