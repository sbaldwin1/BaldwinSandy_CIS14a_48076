// Chapter 3 script - function with return statement
function calculateArea(r) {
	var area;
	if (r <= 0) {
		return 0;
	} else {
		area = Math.PI * r * r;
		return area;
	}
}
var raduius = 5.2;
var theArea = calculateArea(radius);
console.log ("The area is: " + theArea);