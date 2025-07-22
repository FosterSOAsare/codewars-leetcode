// Given a square matrix, your task is to swap its longest diagonals by exchanging their elements at the corresponding positions.

// Example
// For

// matrix = [[1, 2, 3],
//           [4, 5, 6],
//           [7, 8, 9]]
// the output should be

// [[3, 2, 1],
//  [4, 5, 6],
//  [9, 8, 7]]

// This works but doesn't swap only the longest diagonals, it reverses all rows.
function swapDiagonals(matrix) {
	// First check the number of arrays in the matrix
	// Then swap each one individually
	// Add it back in the array

	// Use the length to do the swapping
	let reversed = [];
	if (matrix.length % 2 == 0) {
		reversed = matrix.map((m) => m.reverse());
	} else {
		reversed = matrix.map((m, index) => (index == Math.floor(matrix.length / 2) ? m : m.reverse()));
	}

	return reversed;
}
// console.log(
// 	swapDiagonals([
// 		[43, 455, 32, 103],
// 		[102, 988, 298, 981],
// 		[309, 21, 53, 64],
// 		[2, 22, 35, 291],
// 	])
// );

// This works but doesn't swap only the longest diagonals, it reverses all rows.
[
	[103, 32, 455, 43],
	[981, 298, 988, 102],
	[64, 53, 21, 309],
	[291, 35, 22, 2],
];

// We needed to swap just the diagonals 
function swapDiagonals2(matrix) {
	let reversed = matrix.map((row, i) => {
		const end = matrix.length - 1 - i;
		const z = row[i];
		row[i] = row[end];
		row[end] = z;
		return row;
	});

	// if (matrix.length % 2 == 0) {
	// 	reversed = matrix.map((m) => m.reverse());
	// } else {
	// 	reversed = matrix.map((m, index) => (index == Math.floor(matrix.length / 2) ? m : m.reverse()));
	// }

	return reversed;
}

console.log(
	swapDiagonals2([
		[43, 455, 32, 103],
		[102, 988, 298, 981],
		[309, 21, 53, 64],
		[2, 22, 35, 291],
	])
);
[
	[103, 455, 32, 43],
	[102, 298, 988, 981],
	[309, 53, 21, 64],
	[291, 22, 35, 2],
];
