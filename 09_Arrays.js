let a=[1,2,3];
let b=[2,4,5];
// a.push(b);
// console.log(a);//arr in a array
// let c=a.concat(b);//a.concat(b)/return a array only without b el, it return new arr, so we have to store in a new arr
// console.log(c);


let all=[...a, ...b];//spread
// console.log(all);//[ 1, 2, 3, 2, 4, 5 ]

let arr=[1,2,3,[4,5,6],7,[8,[4,6]]];
let real=arr.flat(Infinity);
// console.log(real);//[1, 2, 3, 4, 5, 6, 7, 8, 4, 6 ]


//check is array or not
console.log(Array.isArray([1,2,3]));
// string to array
console.log(Array.from("Rajat"));//[ 'R', 'a', 'j', 'a', 't' ]
console.log(Array.from({name:"Rajat"}));//return a empty arr

let x1=100;
let x2=200;
let x3=300;
console.log(Array.of(x1,x2,x3));         