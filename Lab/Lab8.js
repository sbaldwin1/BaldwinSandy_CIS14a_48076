/*
	Sandy Baldwin
	Purpose: lab section 8 'While' Loops in JavaScript
*/
var slaying = true;
var youHit = 0;
var damageThisRound = Math.floor(Math.random() * 5 + 1);
totalDamage = 0;

var slaying = true;
while(slaying) {
    if (youHit) {
        console.log("You hit!");
 totalDamage += damageThisRound;
          if (totalDamage >= 4) {
              console.log("You win!");
              slaying = false;
          } else {
              youHit = Math.floor(Math.random() * 2);
          }
  } else {
      console.log("You lose!");
      slaying = false;
  }
}