/*
	Sandy Baldwin
	Purpose: lab section 10 Choose Your Own Adventure 2!
*/
var user = prompt("?").toUpperCase();
switch(user) {
case 'YES':
var the = prompt ("?").toLowerCase();
var vil = prompt ("?").toLowerCase();
if (the === 'y' && vil === 'n') {
console.log("!");
} else {
console.log("!");
}
break;
case 'WHAT':
var what = prompt ("?").toLowerCase();
var sen = prompt ("?").toLowerCase();
if (what === 'y' || sen === 'n') {
console.log("!");
} else {
console.log("!");
}
break;
case 'WHO':
console.log("s");
break;
case 'NO':
console.log("!");
break;
default:
console.log("#$@!")
}