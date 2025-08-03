const max = prompt("Enter the maximum random number");

const random = Math.floor( Math.random() * max) + 1;

let guess = prompt("Guess the number");

while(true) {
	if( guess == "quit") {
		console.log("Quitting the game...");
		break;
	}

	if( guess == random) {
		console.log("Congrats! Your guess was right, the number was", random);
		break;
	} 
	else if( guess <  random) {
		guess = prompt("Your guess was too small! Try again");
	}else {
		guess = prompt("Your guess was too large! Try again");
	}
}
