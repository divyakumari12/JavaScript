const { log } = require("console")

const accountId = 144553
let accountEmail= "divya@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2   //not allowed
accountEmail= "bhairav@gmail.com"
accountPassword = "2121221"
accountCity = "Bengaluru"
console.log(accountId);
//Gives output in tabular form
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use Var
Because of issue in Functional Scope and Block Scope
*/