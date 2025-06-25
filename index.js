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

/**
 * Search algorithms
 * Linear Search
 * Binary Search
 * Big O Time complexity
 *
 */
// Linear Search
function findTarget(target, arr = new Array()) {
  // The Time complexity for this is Linear Big O(n)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(findTarget(5, [10, 2, 5, 6]));
/**
 * Binary search only works on a sorted array
 * it works like this
 * you , sort the list  find the middle term , check if target
 * is equal to the middle term , or greater or less
 * if its less , take the lerft side and perform the binary serach
 * same as right
 * Here i could have used Pointers , index 0 and index -1
 * middle = left + right / 2 math.floor()
 */
function binarySearch(arr = new Array(), target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middle_term = Math.floor(leftIndex + rightIndex) / 2;

    if (target === arr[middle_term]) {
      return middle_term;
    }
    if (target < arr[middle_term]) {
      rightIndex = middle_term - 1;
    } else {
      leftIndex = middle_term + 1;
    }
  }
  return -1;
}
// we reduce input size by half
// so Big O ->  O long(n)
console.log(binarySearch(5, [10, 2, 5, 6]));

function recursive_BinarySearch(arr, target) {}

/**
 * Sorting Algorithms
 * Bubble
 * insertion
 * ..more
 */

function bubbleSort(arrIntegers = new Array()) {
  let swaped;
  do {
    swaped = false;

    for (let i = 0; i < arrIntegers.length; i++) {
      if (arrIntegers[i] > arrIntegers[i + 1]) {
        let temp = arrIntegers[i];
        arrIntegers[i] = arrIntegers[i + 1];
        arrIntegers[i + 1] = temp;
        swaped = true;
      }
    }
  } while (swaped);
}
// This consist of two neted loops , meaning is TC, Quadratic time
// Big O  = On2
// and Qyadratic Tc is not good for sorting
// make our system crash or be slow

function insertionSort(arr = new Array()) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

/**
 * This quick sort using recuraion
 */
function quickSort(arr = new Array()) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
// worst case quadrartic
// avg case ologn
// best case =

function mergeSort(arr = new Array()) {
  function merge(left, right) {
    const sorted = [];
    while (left.length && right.length) {
      if (left[0 <= right[0]]) {
        sorted.push(left.shift());
      } else {
        sorted.push(right.shift());
      }
    }
    return [...sorted, ...left, ...right];
  }

  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(right));
}
/**
 * Cartasian Product
 */

/**
 * Iterate on the two sets using nested for loop
 *
 * The time complexity is depending on the lenghts of the lists
 * Big O(m*n)
 */
function cartasianProduct(setA = new Array(), setB = new Array()) {
  const results = [];
  for (let i = 0; i < setA.length; i++) {
    for (j = 0; j < setB.length; j++) {
      results.push([setA[i], setB[j]]);
    }
  }

  return results;
}

/**
 *
 * @param {*} n
 * Climbing stair is like fibbonacci aequence
 */
function climbingStairCase(n) {
  const noOfWays = [1, 2];
  for (let i = 2; i < n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }

  return noOfWays[n - 1];
}
// Time C => BiG O(n) Linear

/**
 * n is Number of rods
 * @param {*} n
 * @param {*} fromRod
 * @param {*} toRod
 * @param {*} usingRod
 */
function TowerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  TowerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  TowerOfHanoi(n - 1, usingRod, toRod, fromRod);
}
// Big O(2pown)

/**
 * Algorithms design techniques
 * 
 * Bruce force -> simple and exhausive technique that evolves every pissoble
 * outcome to find the best solution example:Linear search 
 * 
 * Greedy => Choose the best option at the current time , without any considerstion 
 * for the future 
 * 
 * 
 * 
  Divide and Conquer => dive into smaller sub probs, each sub solved and combined
  to the overoll solution 
  store then res , eg Binary Search , quick sort , merge sort and Towerofhanoi


Dynamic Programming => divide into small parts 
store the results and reuse it for the same sub problem 
this is called memoizatin and is an optimization etchnique that 
improves the TC of algorithm 
 

Backtracking => Generate all possible solutions , check if the solution setisfies 
all the given constraints

Solve more problems 
video 35 https://www.youtube.com/watch?v=tCvSDnRsGnw&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=35

 */

/**
 * Javascript Data structures
 * Built in DS
 * arrays
 * objects
 * sets
 * Maps
 *
 * Custome DS
 * Stacks
 * Queues
 * Circular Q
 * Linked List
 * hash tables
 * Trees
 * Graphs
 *
 *
 *
 */

const arr_list = [1, 2, 3, 4, "Vishwa"];
for (item of arr_list) {
  console.log(item);
}
/**
 * Big O time complexity
 * insert / remove o1
 * insett rmve from begining = On
 * acces = O1
 * serach On
 * push/pop o(1)
 *
 * foreach ,map , filter  ,reduce O(n)
 *
 */
arr_list.pop();
arr_list.push();
arr_list.unshift();
arr_list.shift();

arr_list.map((i) => {
  return i ** 2;
});

arr_list.forEach((i) => {
  console.log(i >= 45);
});

/**
 * Objects
 */
const obj = {
  name: "Bob",
  "key-three": true,
  age: 25,
  sayName: function () {
    console.log(`${this.name}`);
  },
};

obj.hobby = "Football";
delete obj.hobby;

/**
 * set => removes duplication in alist
 */

const setA = new Set([]);
setA.add(4);
setA.add("king");
console.log(setA.size);
setA.delete("king");

setA.forEach((i) => console.log(i));

for (i of setA) console.log(i);

/**
 * HashMap is like a dictoinary 
 * key value pair data structure 
 * 
 * 
 * 
 
 */

const mapA = new Map(["a", 1], ["b", 45]);

mapA.set("c", 455);
mapA.entries();
mapA.has(); // returns a boolean
mapA.get("any", any);
mapA.delete("king");
mapA.forEach((i) => console.log(i === "king"));
console.log(mapA.size);

/**
 * Sack => cooectionof elements that folows
 * the LIFO Principle
 *
 * Stack Usage =>:
 * Browser history tracking
 * Undo operation when typing
 *call stack in Javascript runtime
 Expression conversions


 in javascriot stack is a custome ds
 e create a class to implemt stack 
 */

class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  // add elements to top of
  push(element) {
    this.items[this.count] = element;
  }
  // remove element
  pop(element) {
    return this.items.pop(element);
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty) {
      return this.items[0];
    }
  }
}

const stack = new Stack();

/**
 * Queue is similra to stack in javascript , absatract data structure
 *Usages 
 Printers
 CPU task scheduling 
 Callback queue in javascript run time

 *
 *
 *
 */
class Queue {
  constructor() {
    this.items = new Array();
    this.count = 0;
  }
  // adding element to the que
  eneque(element) {
    this.items.push(element);
  }
  // removing oldest element from the queue
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.eneque(20);
queue.eneque(30);
queue.eneque(40);
console.log(queue.size());
console.log(queue.dequeue());

console.log(queue.peek());

/**
 * Optimrse way to impement Quee
 */
class OptQueue {
  constructor() {
    this.items = new Object();
    this.rear = 0;
    this.front = 0;
  }

  eneque(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  peek() {
    return this.items[this.front];
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.items.toString());
  }
}
/**
 * Both enque abd deque has constat time complexity
 *
 */

/**
 * Circular Queue
 * Circular Queue Usage
 * Clock
 * Streaming data
 * Traffic lights
 *
 *
 */

class CircularQueue {}
/**
 * Linked List to implement stacks and Queues
 * we create a Node class pointing to its next Node's head
 * we create a Linked List
 * Last Node pointing to null because no head of a next node
 * Still need to deep on Linked list cause dont understand
 */

/**
 * Custome HashMap in js=> Hash Table
 *key value pair data structure
 */

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }
  hash(key) {
    let total = 0;
    for (i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }
  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }
  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }
  display() {
    for (i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);
table.set("name", "Mabndla");

/**
 * Binary Search Tree
 * Insertion => to add a node to the tree
 * Search => to find a node given its value
 * DFS & BFS => to visit all nodes in the tree
 * Deletion -To move a node given its value
 *
 * Pointers left/right
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  /**
   *
   * @returns {boolean}
   */
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const newNode = new TreeNode(value);
  }
}

const bst = new BinarySearchTree();
