const user={
    username:"rajat",
    age:22,
    welcomeMsg:function(){
        console.log(`${this.username}, welcome to my website`);   
    }
}
//this is used to hold the current value in that context
// user.welcomeMsg();

// console.log(this);//{}
function one1(){
    console.log(this);//here we got some data
    
}
// console.log(one1());


// ======================Arrow func===========================
const abc=()=>{
    let username="rajat"
    console.log(typeof username);
}
// console.log(abc());


// const addTwoNum= (num1,num2)=>num1+num2;
const addTwoNum= (num1,num2)=>username="rajat";
// console.log(addTwoNum(4,9));