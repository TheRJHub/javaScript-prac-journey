// let a=10;
// const b=20;
// var c=30;

// console.log(a);
// console.log(b);
// console.log(c);

// =====================================
if(true){
    let a=10;
    const b=20;
    var c=30;
}
// console.log(a);
// console.log(b);
// console.log(c);//we are able to access var datatype out of scope-so we dont use  this variable


function one(){
    const a="Rajat";
    function two(){
        const b="Das";
        console.log(b);
    }
    // console.log(b);
    console.log(a);
          two();  
}
// one();


// ++++++++++++++++++++++++important++++++++++++++++++++++++++
console.log(addOne(10));
function addOne(num){
    return num+1;
}

console.log(addTwo(22)); //hoisting
const addTwo=function(num){
    return num+2;
}