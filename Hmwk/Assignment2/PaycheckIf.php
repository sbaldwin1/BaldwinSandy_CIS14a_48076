<?php
	/*
	 Sandy Baldwin
   	 Sept. 8th, 2014
   	 Purpose: Investigate the branching constructs 
	*/
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Paycheck</title>
</head>

<body>
<?php
$hour = $_GET['how many hours worked'];

	//Declare and initalize variables
	$hours=parseInt(Math.random()*20+30); //Hours worked in (hrs)
	$payRate=10; //($'s/hrs)
	$ovt=40; //Hour at which over time starts
	$payChk; //Declareation of PayCheck in Dollars
	//Output the inputs
	echo"<h1>hours worked = "+$hours  +"(hrs)</h1>";
	echo"<h1>Pay Rate = $"+$payRate+"   </h1>";
	echo"<h1>Over Time start = "+$ovt+" (hrs)</h1>";
	//Determine our paycheck
	if($hours<$ovt)$payChk=$hours*$payRate;
	if($hours>=$ovt)$payChk=$hours*$payRate+($hours-$ovt)*$payRate;
	$payChk=$payChk.toFixed(2);
	//Output our Pay Check
	echo "<h1>Our Pay Check = $"+$payChk+"</h1>";

?>

</body>
</html>
