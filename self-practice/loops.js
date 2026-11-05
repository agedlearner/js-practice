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


let num = 1221;
let rev = 0;
let original = num;

if (num < 0) {
  console.log("Enter a positive number");
} else {
  while (num > 0) {
    let dig = num % 10;
    rev = (rev * 10) + dig;
    num = Math.floor(num / 10);
  }
}

if (original === rev) {
  console.log(`${original} is the palindrome`);
}
*/

/* 
5. Print the first n Fibonacci number.


let n = 10;
let a = 0, b = 1;

for(let i = 1; i <= n ; i++){
  console.log(a);

  let c = a + b;
  a = b;
  b = c;
}
*/

/* 
6. Check whether a number is a prime
 

let n = 8;
let isPrime = true;

if (n <= 1) {
  isPrime = false;
}

for (let i = 2; i < n; i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(`${n} is a prime number.`);
} else {
  console.log(`${n} is not a prime number.`);
}
*/

/* 
7. Print all primes till 50.


for (let i = 2; i <= 50; i++) {
  let isPrime = true;

  for (let n = 2; n < i; n++) {
    if (i % n === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}
*/

/* 
8. FizzBuzz for 1 to 100, multiple of 3: Fizz, multiple of 5: Buzz, if both print FizzBuzz


for (let n = 1; n <= 100; n++) {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log("FizzBuzz");
  }else if (n % 3 === 0) {
    console.log("Fizz");
  } else if (n % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(n);
  }
}
*/

/* 
9. Find the GCD of two numbers


let a = 18;
let b = 48;

while (b !== 0) {
  let c = a % b;
  a = b;
  b = c;
}
console.log(a);
*/

/* 
10. Calculate a to the power b without Math.pow or **

let a = 2;
let b = 3;
let c = 1;

for(let i = 1; i <= b; i++){
  c *= a;
}
console.log(c)
*/

/* 
11. Find the first number above 100 divisible by both 7 and 9, using break.


for(let i = 100; i <= 500; i++){ 
  if(i % 7 === 0 && i % 9 === 0){
    console.log(i);
    break;
  }
}
  */

/* 
12. Print this pattern: 
*
**
***
****
*****

for (let i = 0; i <= 5; i++) {
  let row = ""
  for (let j = 0; j < i; j++) {
    row +="*";
  }
  console.log(row);
}
*/

/* 
13. Print this pattern: 
*****
****
***
**
*



for (let i = 0; i <= 5; i++) {
  let row = "";
  for (let j = 5; i < j; j--) {
    row += "*";
  }
  console.log(row);
}
*/

/* 
14. Print this pattern: 
*
***
*****
*******
*****


for (let i = 0; i <= 7; i += 2) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
console.log("*****");
*/

/* 
15. Print this pattern: 
1
12
123
1234


for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j < i; j++) {
    row += j;
  }
  console.log(row);
}
*/

/* 
Mini build:
Number Analyzer: Take one number n and print:
1. whether it is prime
2. its digit sum, its reverse and whether it's a palindrome
3. its factorial(only if n is 12 or less)
4. the fibonacci series up to n
*/

function numberAnalyzer(n) {
  console.log(`Your number is ${n}`);

  function prime(p) {
    //whether it is prime
    let isPrime = true;
    if (p <= 1) {
      isPrime = false;
    }
    for (let i = 2; i < p; i++) {
      if (p % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`${p} is a prime number.`);
    } else {
      console.log(`${p} is not a prime number.`);
    }
  }

  function drp(num) {
    //its digit sum, its reverse and whether it's a palindrome: 121
    let sum = 0;
    let rev = 0;
    let og = num;
    while (num > 0) {
      let a = num % 10;
      rev = rev * 10 + a;
      sum += a;
      num = Math.floor(num / 10);
    }
    console.log(`Digit sum: ${sum}`);
    console.log(`It's Reverse: ${rev}`);
    if (rev === og) {
      console.log("It is a Palindrome");
    } else {
      console.log("Not a palindrome");
    }
  }

  function factorial(fact) {
    //its factorial(only if n is 12 or less)
    let s = 1;
    if (fact >= 0 && fact <= 12) {
      for (let i = fact; i > 0; i--) {
        s = s * i;
      }
      console.log(`Factorial: ${s}`);
    } else {
      console.log("Enter a number between 0-12 for factorial");
    }
  }

  function fibonacci(fibo) {
    //the fibonacci series up to n
    let a = 0;
    let b = 1;
    console.log("Fibonacci:");

    for (let i = 1; i <= fibo; i++) {
      console.log(a)

      let c = a + b;
      a = b;
      b = c;
    }
  }

  prime(n);
  drp(n);
  factorial(n);
  fibonacci(n);
}
numberAnalyzer(11);
