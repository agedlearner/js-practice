//Basics

/* 
1. greet(name) returns a greeting string


function greet(name){
    return(`Hello, ${name}!!`)
}
console.log(greet("Shubham"));
*/

/* 
2. Write add, subtract, multiply and divide. divide returns a error message if divisor is 0.


function add(a, b) {
  c = a + b;
  return c;
}
console.log(add(2, 5));

function subtract(a, b) {
  c = a - b;
  return c;
}
console.log(subtract(12, 5));

function multiply(a, b) {
  c = a * b;
  return c;
}
console.log(multiply(2, 5));

function divide(a, b) {
  if (b === 0) {
    return "Error: Divisor cannot be zero";
  } else {
    c = a / b;
  }
  return c;
}
console.log(divide(10, 5));
*/

/* 
3. isEven(n) returns true or false

function isEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(10));
*/

/* 
4. maxOfThree(a, b, c)

function maxOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return `a is biggest`;
  } else if (b >= a && b >= c) {
    return `b is biggest`;
  } else {
    return `c is biggest`;
  }
}
console.log(maxOfThree(50, 7, 9));
*/

/* 
5. C to F

function cTf(deg){
    let f = deg * 1.8 + 32;
    return f;
}
console.log(cTf(20))
*/

//Three ways to write a function

/* 
6. Write square as a declaration, as an expression,and as an arrow function. Call all three.

function square(num){
    return num * num;
}

const squareExpression = function(num){
    return num * num;
};
const squareArrow =  (num)=>{
    return num * num;
}

console.log(square(5));
console.log(squareExpression(5));
console.log(squareArrow(5));
*/

/* 
7. Convert your add, isEven and cTf into arrow functions with implicit return(no {} and no return keyword).

const add = (a, b) => a + b;
const isEven = (n) => n % 2 === 0;
const cTf = (deg) => deg * 1.8 + 32;

console.log(add(5, 4));
console.log(isEven(2));
console.log(cTf(20));
*/

//Parameters

/* 
8. power(base, exp = 2). Call it with one and with two arguments.

function power(base, exp = 2){
    return base * base;
}
console.log(power(8))

function powerTwo(base, exp){
    let i = 1;
    let result = 1;
    while(i <= exp){
    result *= base;
    i++
    }
    return result;
}
console.log(powerTwo(8, 2))
*/

/* 
9. sum(...nums) returns the sum of any number of arguments. Then write average(...nums) and handle the empty case.


function sum(...nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}

function average(...nums) {
  if (nums.length === 0) {
    return 0;
  }
  return sum(...nums) / nums.length;
}

console.log(sum(1, 2, 3, 4, 5));
console.log(average(1, 2, 3, 4, 5));
*/

/*
10: Find the minimum and maximum
Write two functions using the rest parameter (...nums):
1. findMax(...nums) → Returns the largest number.
2. findMin(...nums) → Returns the smallest number. 


console.log(findMax(10, 25, 5, 40, 15));

console.log(findMin(10, 25, 5, 40, 15));

console.log(findMax());
*/

/* 
11. Write a function that returns an object {sum, product} for two numbers, then print both.

function calculate(a, b){
  return {
    sum: a + b,
    product: a * b,
  };
}

const result = calculate(3, 4)
console.log(result.sum);
console.log(result.product);
*/

// Refer to loops.js: ./loops.js

/* 
12. Turn these into functions: factorial(n), isPrime(p), reverseNumberNisPalindrome(num), fibonacci(n) (returns an array) 


function factorial(n) {
  //its factorial(only if n is 12 or less)
  let s = 1;
  if (n >= 0 && n <= 12) {
    for (let i = n; i > 0; i--) {
      s = s * i;
    }
    return s;
  } else {
    return "Enter a number between 0-12 for factorial";
  }
}

function isPrime(p) {
  //whether it is prime
  let prime = true;
  if (p <= 1) {
    prime = false;
  }
  for (let i = 2; i < p; i++) {
    if (p % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

function reverseNumberNisPalindrome(num) {
  //reverse and whether it's a palindrome:
  let rev = 0;
  let og = num;
  while (num > 0) {
    let a = num % 10;
    rev = rev * 10 + a;
    num = Math.floor(num / 10);
  }
  return {
    reverse: rev,
    isPalindrome: rev === og,
  };
}

function fibonacci(fibo) {
  //the fibonacci series up to n
  let a = 0;
  let b = 1;
  let arr = [];

  for (let i = 1; i <= fibo; i++) {
    arr.push(a);

    let c = a + b;
    a = b;
    b = c;
  }
  return arr;
}

console.log(factorial(5));
console.log(isPrime(11));
console.log(reverseNumberNisPalindrome(121));
console.log(fibonacci(7));
*/

/* 
13. printPrimes(limit) that calls your isPrime. This is one function calling other. isPrime is a function in exercise 12.


function printPrimes(limit) {
  for (let n = 2; n <= limit; n++) {
    if (isPrime(n)) {
      console.log(n);
    }
  }
}
printPrimes(30);
*/

/*14. countVowels(str) and capitalize(word) (hint: .toUpperCase() and .slice())

function countVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();

    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      count++;
    }
  }

  return count;
}

function capitalize(word) {
  if (word.length === 0) {
    return word;
  }

  return word[0].toUpperCase() + word.slice(1);
}

console.log(countVowels("JavaScript"));
console.log(capitalize("hello"));
*/

/* 15. getGrade(marks) returns A,B,C or Fail. Then loop over an array of marks and print each grade.


function getGrade(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 70 && marks < 90) {
    return "B";
  } else if (marks >= 50 && marks < 70) {
    return "C";
  } else if (marks < 50) {
    return "Fail";
  }
}

const marks = [57, 82, 95, 43];

for (let i = 0; i < marks.length; i++) {
  console.log(getGrade(marks[i]));
}
 */

/* 16. Write a snippet where a var declared inside an if block is visible outside it, and a let isn't. Explain why in comment.

if (true) {
  var varExample = "I can be used outside the if block";
  let letExample = "I can only be used inside the if block";
}

console.log(varExample); // Works

// console.log(letExample); // This would cause a ReferenceError
// var is function-scoped, but let is block-scoped.
*/

/* 17. Write a counter that uses a global variable, then rewrite it so the variable lives inside the function. Say which is safer. 
 */

//Global Variable
/* let count = 0;
function globalCounter(){
  count ++;
  return count;
}

console.log(globalCounter());
console.log(globalCounter());
console.log(globalCounter());
console.log(globalCounter());
console.log(globalCounter()); */

//Function variable
/* function functionVariable(){
  let count = 0;

  return function(){
    count++;
    return count;
  }
}

const counter = functionVariable()
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter()); */
