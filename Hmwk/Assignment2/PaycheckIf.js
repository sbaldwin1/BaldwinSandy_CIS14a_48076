// JavaScript Document
<script type="text/javascript">


	//Declare and initalize variables
	var hours=parseInt(Math.random()*0 >=20);; //Hours worked in (hrs)
	var payRate=10; //($'s/hrs)
	var ovt=40; //Hour at which over time starts
	var payChk; //Declareation of PayCheck in Dollars
	//Output the inputs
	document.write("<h1>hours worked = "+hours  +"(hrs)</h1>");
	document.write("<h1>Pay Rate = $"+payRate+"   </h1>");
	document.write("<h1>Over Time start = "+ovt+" (hrs)</h1>");
	//Determine our paycheck
	if(hours<ovt)payChk=hours*payRate;
	if(hours>=ovt)payChk=hours*payRate+(hours-ovt)*payRate;
	payChk=payChk.toFixed(2);
	//Output our Pay Check
	document.write("<h1>Our Pay Check = $"+payChk+"</h1>")

</script>
