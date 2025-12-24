const str=new String("RajatKumarDas");

// console.log(str.length);
// console.log(str.toUpperCase());

// console.log(str.charAt(8));
// console.log(str.indexOf('y'));//-1
// console.log(str.indexOf("r"));


const newStr=str.substring(0,3);//3 not included
// console.log(newStr);

const str1=str.slice(0,4);
// console.log(str1);
const str2=str.slice(-8,4);
// console.log(str2);


// ===============trim()=============
let str3="    jh tt  hh             ";
console.log(str3.trim());


// =========replace()=========
const str4="rajatkumardas";
console.log(str4.replace("rajat","rr"));

// ============includes()============
console.log(str4.includes("rdas"));


// =============string to array================
console.log(str4.split('a'));
