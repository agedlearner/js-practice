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
*/

