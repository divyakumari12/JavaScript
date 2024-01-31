let score = "divya"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

console.log(valueInNumber)

/*
"33" => 33
"33abc" => NaN
true => 1; false => 0
null => 0; undefined => NaN
"string" => NaN
*/

let isLoggedIn = 1;
let BooleanIsLoggedIn = Boolean(isLoggedIn);
console.log(BooleanIsLoggedIn);

/*
1 => true; 0 => false
"" => false
"string" => true
*/

let someNumber = 12
let ConvertToString = String(someNumber)
console.log(ConvertToString)
console.log(typeof ConvertToString);