let score = "55"
// "55" => 55 //
// or null it will be 0 //
// or undefined it will be Nan //
// or boolean it will be true = 1 or false = 0 //
// or string it will be Nan //
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isLoggedIn =  0
// 1 =>  true //
// 0 => false //
//empty => false //
//"name" => true //
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 66

let stringNumber = String(someNumber)
console.log(stringNumber);  
console.log(typeof stringNumber);  
