//way to declare object: literal or as a constructor(also we can declare as singleton-only one instance)

// const { use } = require("react");


const sym=Symbol("key1");//use symbol in object

//object literals
const user={
    "full name":"Rajat",
    [sym]:"myKey1",//use of symbol in object
    age:22,
    BloodGrp:"z +ve",
    location:"pune"
}
// console.log(user[sym]);
user.age=69;
// console.log(user);

//freze the obj
// Object.freeze(user);
user.age=20;
// console.log(user);




// console.log(user.location);

// console.log(user.sym);
// console.log(typeof user.sym);


// console.log(user.location);
// console.log(user["location"]);

// console.log(user["full name"]);//not able to do like this log(user,full name)



const JsUser={
    "full name":"Rajat",
    [sym]:"myKey1",//use of symbol in object
    age:22,
    BloodGrp:"z +ve",
    location:"pune"
}
JsUser.greeting=function(){
    console.log(`Hi everyOne...!,${this["full name"]}`);
    
}
// console.log(JsUser.greeting());//Hi everyone, undefined



