//Immediately Invoked Function Expression(IIFE)
(function abc(name){
    console.log(`Hello ${name}`);   
})("Rajat");
// console.log(abc());
 

((n1,n2)=> console.log(`Addition of ${n1},${n2} is`,n1+n2))(10,22)