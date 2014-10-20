// Chapter 3 script - JS doesn't care where do you put your function

var radius = 5;
var area = circleArea(radius);
alert(area);

function circleArea(r) {
	var a = Math.PI * r * r;
	return a;
}
