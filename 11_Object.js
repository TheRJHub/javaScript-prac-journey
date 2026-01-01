// const Juser=new Object();//singleton obj
const Juser={}//non-singleton object

Juser.id="123abc";
Juser.name="John";
Juser.married=false;
// console.log(Juser);

const user={
    email:"abc@gmail.com",
    fullName:{
        prefic:"Mr.",
        userName:{
            firstName:"Raj",
            lastName:"Das"
        }
    }
}
// console.log(user.fullName);
// console.log(user);

// optiinal Chaning: ?-used for protecton
// console.log(user.f1irstName?.uname?.firstName);
//even if i wrote wrong thing but it detect

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
const obj3={obj1,obj2};
// console.log(obj3);//here issue is in a obj anither 2 obj r present
// const obj4=Object.assign(obj1,obj2);
const obj4=Object.assign({},obj1,obj2);//correct way-to target object {}, obj1,obj2 are source
// console.log(obj4);


const obj5={...obj1, ...obj3};//for spread the value
// console.log(obj5);


const arr=[{},{},{},{}];
// console.log(arr[1].email);//if email is present in 1st obj it going to fetch the data 
// console.log(Object.keys(arr));
// console.log(Object.values(arr));
// console.log(Object.entries(arr));//key and value=entry

const MyUser={
    email:"abc@gmail.com",
    fullName:{
        prefic:"Mr.",
        userName:{
            firstName:"Raj",
            lastName:"Das"
        }
    }
}
// console.log(MyUser.hasOwnProperty('fullName'));//to check the obj have that property or not


//=============de-structuring of object===================
const a={

}

const emp={
    name:"Rajat",
    empId:12345,
    age:22,
    employementValidity: 2027,
    isEmp:true
}
// console.log(emp);
console.log(emp.isEmp);

// console.log(isEmp);//error

const {isEmp}=emp;//object de-structure
console.log(isEmp);

const {employementValidity: aaa}=emp;
console.log(aaa);