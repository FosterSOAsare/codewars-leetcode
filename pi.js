// Everybody loves pi, but what if pi were a square? Given a number of digits digits,
// find the smallest integer whose square is greater or equal to the sum of the squares of the first digits digits of pi, including the 3 before the decimal point.
// Note: Test cases will not extend beyond 100 digits; the first 100 digits of pi are pasted here for your convenience:

function getNumber(digits) {
	const piArray = "31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679".split("");
	// Holds the sum of the squares of first digits, digits
	let sum = 0;
	// Loop to digits and calculate the sum of squares
	for (let i = 0; i < digits; i++) sum += piArray[i] ** 2;

	// Now let's find the square
	let square = 1;
	while (square * square < sum) square++;
}

getNumber(25);
