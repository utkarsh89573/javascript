const accountId=144553
let accountEmail="utkarshgupta@gmail.com"
var accountPassword ="12345"
accountCity = "Delhi"

let accountState; //it use to indicate the undefined value in js and we can change this variable value in future

//accountId = 2 // not allowed to change a constant keyword

accountEmail ="Guptautkarsh.com"
accountPassword = "256435"
accountCity = "Benguluru"

console.log(accountId)

/*
prefered not to you use var
because of isssue in block and scope and functional scope
 */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])