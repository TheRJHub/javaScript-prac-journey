/*
Truthy Value: 
============= 
true
1
-1
"0"
"false"
" "
[]
{}
function(){}


Falsy Value
===========
false
0
-0
0n
""
null
undefined
NaN
*/

// const a="false";
// if(a){
//     console.log("Truthy value");
// }else{
//     console.log("Falsy value");
// }
// ======================================
const objectCreateion={name:"r"}//this is s empty object
//ques check whether the object is empty or not
if (Object.keys(objectCreateion).length>0) {
    console.log("Hello");
}else{
    console.log("Bye");   
}

// =================================
// Nullish Coalescing Operator(??) : null defined
// ===============================================
let val1;
val1=5 ?? 10;
console.log(val1);///5

let val2;
val2=null ?? 2;
console.log(val2);//2

let val3;
val3=undefined ?? 1;
console.log(val3);//1


let var1;
var1=null ?? undefined ?? 12 ?? 2;
console.log(var1);//12

// ============================================
// Ternaery Operator
// ====================
const price=100;
price>90 ? console.log("morethan 90"):console.log("It is less than 90");

