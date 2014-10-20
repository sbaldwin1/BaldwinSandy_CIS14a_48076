// Chapter 3 script - shadow your global and local variables

var beanCounter = 10; // Global variable

function getNumberOfItems(ordertype) {
	var beanCounter = 0; // local variable
	if(ordertype == "order") {
		//whatever happens to beanCounter
	}
	return beanCounter;
}
