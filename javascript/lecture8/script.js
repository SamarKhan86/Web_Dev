//1
/*let numbers = [1, 2, 3, 4, 5];*/

/*let result  = (...nums) => numbers.reduce( (squareSum, el) => (el*el) + squareSum, 0);*/

/*console.log(result(...numbers)/ numbers.length);*/
//2
/*let numbers = [1, 2, 3, 4, 5];*/

/*console.log( numbers.map( (num) => num + 5 ));*/
//3
/*let fruit = ["apple", "banana", "mango", "orange"];*/

/*console.log( fruit.map( (word) => word.toUpperCase()));*/
//4
/*const doubleAndReturnsArgs = (arr, ...args) => [*/
	/*...arr,*/
	/*...args.map( (v) => v*2 )*/
/*];*/

/*console.log(doubleAndReturnsArgs([1, 2, 3, 4, 5], 3, 4)); //will give 1, 2, 3, 4, 5, 6, 8*/
//5
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2 });
console.log(mergeObjects({ name: "samar", marks: 90}, {city: "Dhanbad", class: "cse30"}));






