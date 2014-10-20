// Chapter 3 script - function can return
function bake (degrees) {
	var message;
	if (degree > 500) {
		message = "I'm not a nuclear reactor!";
	} else if (degree < 100) {
		message = "I'm not a refrigator!";
	} else {
		message = "That's a very comfortable temperature for me. ";
		setMode("bake");
		setTemp("degrees");
	}
	return message;
}

var status = bake(350);