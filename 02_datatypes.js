"use strict";//treat all JS code as newer version
//alert(3+3);

let name="Rajat"; //string 'Rajat' "Rajat"
let age=22;
let married=false;
let money=null;

/* =====DataTypes====

premitive datatypes
===================
number=> 2-power-53 
bigint
string
boolean
null
undefined
symbol= reprents a unique identifier


non-primitive datatypes
=======================
object
array
func
 */

// console.log(typeof "Rajat");//string
// console.log(typeof null); //object
// console.log(typeof false);//bo0lean
// console.log(typeof undefined); //undefined

const id=Symbol("124");
const id2=Symbol(Symbol);
// console.log(id==id2);
// console.log(id);
// console.log(id2);
const f=123n;
// console.log(typeof f);//bigInt



const abcd=["a","b","c","d"];
// console.log(abcd);//array

//object
let obj={
    name:"raj",
    age:"22"
}
// console.log(obj);

//function
const myFunc=function(){
    console.log("Hello world...!");
}
// console.log(myFunc);
// console.log(typeof myFunc);//function








