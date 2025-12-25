const num=100;

const num2=new Number(199.99);
// console.log(num2);
// console.log(num2.toFixed(3));//200.000

// console.log(typeof num2.toString());

// console.log(num2.toPrecision(3));//200

const hundred=100000000000000;
// console.log(hundred.toLocaleString());//100,000,000,000,000
// console.log(hundred.toLocaleString('en-IN'));//10,00,00,00,00,00,000-indian standard

//========================Maths============================
// console.log(Math);// Object [Math] {}
// console.log(Math.abs(-4));//4
// console.log(Math.round(4.3));//4
// console.log(Math.ceil(4.2));//5
// console.log(Math.floor(4.9));//4
// console.log(Math.min(1,2,3,4,-3,4));
// console.log(Math.max(9,8,12,33,-456));

console.log(Math.random()); //value lies between 0 to 1
//0.08631134559863585

const max=20;
const min=10;

console.log(Math.random()*(max-min +1));
console.log(Math.floor(Math.random()*(max-min +1)));

;//+1 to avoid zero








