function add2num(num1,num2){
    console.log(num1+num2);
}
// const result=add2num(2,3);
// console.log(result);//undefined

// add2num(2,'a');//2a
// add2num(2,"a");//2a


function addnum(num1,num2){
    const res=num1+num2;
    return res;
}
const a=addnum(5,10);
// console.log(a);


function login(username){//username="aa"-b this way we can set default value
    if(username===undefined){
        console.log(`Enter something`);
        return
    }
    return `${username} logged in`;
}
// console.log(login("Drajat"));
// console.log(login());


// =================================
  function displayNum(num1){
    return num1;
  }
//   console.log(displayNum(23));


function displayNumber(...num1){//rest operator also it is known as spread operator-but here it is rest operator
    return num1;
  }
//   console.log(displayNumber(20,30,40));//[ 20, 30, 40 ]
  
  function add(val1,val2, ...num){
    return num;
  }
//   console.log(add(10,20,30,40,50));//[30,40,50]-10,20 for val1 val2
  

const user={
    username:"Rajat",
    age:22
}
function handleObject(anyObject){//anyObject for make it generic
    console.log(`Username is ${anyObject.username} and age ${anyObject.age}`);
    
}
// handleObject(user);
handleObject({
    username:"Das",
    age:88
});//also we can pass direct object here

const MyArr=[10,20,30,40,50];
function secondValue(getArr){
    return getArr[1];
}
// console.log(secondValue(MyArr));
console.log(secondValue([20,30,40]));

