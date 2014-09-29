// JavaScript Document
//Input
//Bal->Initial Balance $'s
//intR-> Interest Rate %/year
//nPer->Number of compounding periods (years)
//mDep-> Monthly Deposit accured till end of year
//Output
//	Retirement->$'s
	function retire(bal, intR, nPer, mDep){
		var retirement =bal;
		for(var year=1;year<=nYears;year++){
		retirement*=(1+intRate/100);
		retirement+=(mDeposit*12);
		retirement=retirement.toFixed(2);
		}
	return retirement;
	}
