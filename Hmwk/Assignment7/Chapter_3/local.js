// Chapter 3 script - global and local variables
var points = 0;

function playTurn(player, location) {
	var points = 0;
	if (location == 1) {
		points = points + 100;
	}
	return points;
}
var total = playTurn("Jai", 1);
alert(points);