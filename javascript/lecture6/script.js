let start = 100;
let end = 200;

function generateRand(start, end) {
	let diff = end - start + 1;
	return Math.floor(Math.random() * diff ) + start;
}

console.log(generateRand(start, end));
