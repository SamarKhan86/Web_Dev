//1
let num = 20;
if((num % 10) == 0) {
	console.log("good");
}	else {
		console.log("bad");
}

//2
let name = prompt("Enter your name");
let age = prompt("Enter your age");
alert(`${name} is ${age} years old.`);

//3
let quarter  = 1;
switch(quarter) {
	case 1:
		console.log("January, February, March");
		break;
	case 2:
		console.log("April, May, June");
		break;
	case 3:
		console.log("July, August, September");
		break;
	case 4:
		console.log("October, November, December");
		break;
}

//4
let str = "apples";
if((str[0] === 'A' || str[0] === 'a') && (str.length > 5)) {
	console.log("Golden string"); }
else {
	console.log("Not a golden string"); }

//5
let a = 3, b = 4, c = 5;
if(a > b) {
	if(a > c) {
		console.log(a, " is largest");
	} else {
		console.log(c, " is largest");
	}
} else {
	if(b > c) {
		console.log(b, " is largest");
	} else {
		console.log(c, " is largest");
	}
}


//6
let number1 = 32, number2 = 47852;
if((number1 % 10) == (number2 % 10)) {
console.log(`They have the same last digits which is ${number1%10}`); }
else {
	console.log("They have different last digits"); }

