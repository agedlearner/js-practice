/* 
1. Count the digits of a number


let dig = 2345111;
let count = 0;

if (dig < 0) {
  console.log("Enter a positive number");
} else {
  while (dig > 0) {
    dig = Math.floor(dig / 10);
    count++;
  }
    console.log(`The digits are: ${count}`);
}
*/

/* 
2. Find the sum of the digits of a number


let num = 1234;
let sum = 0;

if (num < 0) {
  console.log("Enter a positive number");
} else {
  while (num > 0) {
    let dig = num % 10;
    sum += dig;
    num = Math.floor(num / 10);
  }
    console.log("Sum of digits:", sum);
}
*/

/*
3. Reverse a number


let num = 1234;
let rev = 0;
console.log(`reverse of ${num} is:`);
if (num < 0) {
  console.log("Enter a positive number");
} else {
  while (num > 0) {
    let dig = num % 10;
    rev = (rev * 10) + dig;
    num = Math.floor(num / 10);
  }
    console.log(`${rev}`);
}
*/

/* 
4. Check whether the number is a palindrome (121, 1221)
*/
