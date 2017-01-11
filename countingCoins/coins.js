/**** Will Sims  ****/
/**** Coin Purse ****/
/**** 1/11/2017  ****/
/********************/

function coinCounter (dollarAmount) {
	var i;
	// Static variable used to iterate through loops because 
	//	coinPurse.total changes with every iteration.
	var trackBalance = dollarAmount;
	var coinPurse = {
		penny: 0,
		nickel: 0,
		dime: 0,
		quarter: 0,
		total: dollarAmount
	};

	// For the (possible) amount of quarters a user can have (given their dollarAmount):
	// 		- Subtract 0.25 cents from their total
	//		- Increment their coinPurse quarter count.
	for(i = 0; i < Math.floor((trackBalance * 100) / 25); i++){
		coinPurse.quarter++;
		coinPurse.total = (coinPurse.total - .25).toFixed(2);
	}

	// Update new tracking balance
	trackBalance = coinPurse.total;

	// For the (possible) amount of dimes a user can have (after quarters have been counted and removed):
	//		- Subtract .10 cents from their total
	// 		- Increment their coinPurse dime count
	for(i = 0; i < Math.floor((trackBalance * 100) / 10); i++){
		coinPurse.dime++;
		coinPurse.total = (coinPurse.total - .10).toFixed(2);
	}

	// Update new tracking balance
	trackBalance = coinPurse.total;

	// For the (possible) amount of nickels a user can have (after quarters and dimes have been counted):
	//		- Subtract 0.05 from their total
	//		- Increment their coinPurse nickel count
	for(i = 0; i < Math.floor((trackBalance * 100) / 5); i++){
		coinPurse.nickel++;
		coinPurse.total = (coinPurse.total - .05).toFixed(2);
	}

	// Update new tracking balance
	trackBalance = coinPurse.total;

	// Whatever dollar amount is left must be LESS than 5 cents
	// Whatever is left, multiplied by 100, is the amount of pennies the user has.
	coinPurse.penny = trackBalance * 100;

	return coinPurse;
}





// Assign the coins variable to the result of the function written above
var coins = coinCounter(7.18)
// Log the coins variable to the console.
console.log(coins);