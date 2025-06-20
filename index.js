"use Strict";

/**
 * what is Liquiduity
 * for every bu there is sell
 * for every winner , loser
 * every time you loose a trade you are adding liquidity into the
 * market
 * when sellers and buyers stop losses loose
 * they add liquidity causing the reversal direction  we call that liquidity sweep
 *
 */

/**
 * first we do identify market structre
 * 1 -> MARKET STRUCTURE overoll diretion low higs and low lows
 * 2 ->  BOS -> SPOT LIQUIDITY using double bottom if selling or double top if buying
 * 3 -> wait for liqidity grap / sweep and then  place the order
 *
 */

/**
 * this function creates an object
 * when it is called  ,  the person will be stored in heap memory
 * once the function done executing the object is nolonger reachable
 * meaning that javascript garbage collector  is gonna automatically mark the object
 * spec->V8 engine
 * and then remove it from memory , and use that space for other ..
 * the object is outside of the scope , unreahable
 * Jascript has Automatic Memory management'
 *
 * Develoers dont need to allocafe or deallocate memories
 * @param {*} objectName
 */

// function createObject(objectName) {
//   let person = {
//     name: objectName,
//     date: new Date().getTime(),
//   };

//   console.log(person.name, person.date);
// }

// createObject("Mandla");

/**
 * ALGORITHMS IN JAVASCRIPT
 * Trees ang graphs
 * time and space complexity
 * Big O Notation
 * Math algorithms
 * Sort algorithms
 * Search
 * Misc.algo and problem solving
 * 
   How to present complexity
   Big(O) Notation worst case complexity
   Omega Notation Best case complexity
   Theta Notation  Avarage case complexity

   Big O -> decribes the complexity of an algo using algebraic term


 *
 *
 *
 */
// code Example
// BIg O Time complexity
// 3 statements to execute

// if n 4
/**
 *
 * line 1 exutes 1 times
 * line 2 executes 4 times
 * line 3  = 1 time
 *
 * @param {*} n
 * @returns
 * this is 4 + 2  == n + 2
 * Time coplexity depends in inoput size
 *
 * O(n) Linear // also because of the loop
 *
 */
function summation(n) {
  let sum = 0; //1
  for (let i = 1; i <= n; i++) {
    sum += i; // 2
  }
  return sum; // 3
}

function summation2(n) {
  // this is O(1) contstnt
  return (n * (n + 1)) / 2;
}
// Two loops means O(n2) Quadrartic

/**
 * Math Algorithms
 * Fibb
 * factorial
 * prime number
 * power of two
 * recursion
 * Fibb uisng recursion
 * Fact using re
 *
 *
 */

/**
 * Aprroach when solving a problem
 * problem statement
 * implement solution
 * Detertime Big O of the Solution
 *
 * @param {*} n
 */

function fibb_sequence(n) {
  let sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    // on

    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}

console.log(fibb_sequence(2));
// THe Big O Notation here is n + 2
// O(n) as n increases time increases

function factorial(n) {
  let fact = 1;

  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorial(4));
// THE Big O -s O(N) linear

function primeNumber(n) {
  if (n < 2) {
    console.log("Not prime");
  }
  for (i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      console.log("Its Not prime ");
      return;
    }
  }
  console.log("Prime");
}

primeNumber(10);
// The Big O is O(n) linear time complexity
// as input increases the for loop execution steps increaes
// now this has O(sqrt(n))

/**
 * divide n by 2 and more until there is no reminder
 *
 * @param {*} n
 */
function powerOfTwo(n) {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}
// Big O notation olong n , n is reduicng by half

function isPoweBitWise(n) {
  if (n < 1) return false;

  return (n & (n - 1)) === 0;
}

/**
 * Recursion
 * Uisng recursion when solving a problem is not an ideal solution becasue it taskes
 * more time to execute wich could lead to system failure Big O(2n)
 * so sticking with iterative solution is a good idea , where its linear solution
 *
 */

function fibb_sequence_recursion(n) {
  if (n < 2) return 0; // base case , stop the calling
  return fibb_sequence_recursion(n - 1) + fibb_sequence_recursion(n - 2);
}

/**
 * This is not an ideal solution because its taking much more time
 * to execute , recursive solotion
 * Sorry this is a good case
 * Big O is O(n)
 *
 * @param {*} n
 * @returns
 */

function factorial_recursive(n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return 1;
  }
  return n * factorial_recursive(n - 1);
}

console.log("Shoild be 120");
console.log(factorial_recursive(5));
