const accountId=1453;
let accName="RKD";
var mail="rrr@rrr.com";
city="pune";
let personName; //undefined

/*
don't use var-because of issue in block scope and functional scope
*/

// accountId=234; //value can;t be modified in case of const variables
// console.log(accountId);

accName="Das";
mail="ff@kk.com";
city="manglore";
console.table([accountId,accName,mail,city,personName]);