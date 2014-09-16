/*
	Sandy Baldwin
	Purpose: lab section 3 Introduction to Function in JS
*/
// Write your function below. 
// Don't forget to call your function!

var sleepCheck = function(sleep){
    if (sleep >= 8) {
       return "You're getting plenty of sleep! Maybe even too much!";
    }
    else
    {
        return "Get some more shut eye!";
    }
};

console.log(sleepCheck(10));
console.log(sleepCheck(5));
console.log(sleepCheck(8));
