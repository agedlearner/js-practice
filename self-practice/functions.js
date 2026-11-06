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
*/

console.log(findMax(10, 25, 5, 40, 15));

console.log(findMin(10, 25, 5, 40, 15));

console.log(findMax());