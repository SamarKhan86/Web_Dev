//Question 1
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for(let i = 0; i<arr.length; i++) {
  if(arr[i] == num) {
    arr.splice(i, 1);
  }
}
console.log(arr);

//Question 2
let number = 287152;
let c = 0;
while(number>0) {
  let d = number/10;
  c++;
  number = number%10;
}
console.log(`The number of digits in ${number} is ${c}`);
