// https://www.codewars.com/kata/6630da20f925eb3007c5a498/train/javascript

// Task
// Given a string containing digits (representing the strength of the candles), calculate the number of blows you need to extinguish all the candles.

// Starting at the beginning of the string, each blow can only reach 3 candles, reducing their strength by one each. You can only reach more candles once those directly in front of you are extinguished.

// use bigInt for big values
const blowCandles = (str) => {
	let count = 0;
	while (+str > 0) {
		// console.log(str);
		// remove any leading zeros that str might contain
		str = "" + BigInt(str);
		// get the first 3 non-zero digits as a number
		let first3 = "" + BigInt(str.slice(0, 3), 10);
		// Now reduce 1 from each but should go to negatives
		first3 = first3
			.split("")
			.map((c) => (+c > 0 ? c - 1 : c))
			.join("");
		// Now we need to replace the first 3 digits in the original string

		console.log("first3", first3);
		str = str.replace(str.slice(0, 3), first3);
		console.log("str", str);
		// console.log(str);
		count++;
	}
	return count;
};
console.log(blowCandles("3059014624594767621"));
