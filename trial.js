//Big O notation
//Constant time O (1)
// Accessing an element in an array by its index

function getElement(arr, index) {
    return arr[index]; // O(1) - always takes one step
  }
  
  //console.log(getElement([1, 2, 3, 4, 45], 2)); // Output: 3, regardless of array size
  

  //Logarithmic time O (log n)
  //Binary search in a sorted array to find a specific element

  function binarySearch(arr, target) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) return mid;
      else if (arr[mid] < target) start = mid + 1;
      else end = mid - 1;
    }
    return -1; // Not found
  }
  
  const sortedArr = [1, 3, 5, 7, 9]; // Can have any size
 // console.log(binarySearch(sortedArr, 7)); // O(log n) - grows slowly with array size
  

 //Linear time O (n)
 //Iterating through each element in an array or list

 function sumElements(arr) {
    let sum = 0;
    for (const num of arr) {
      sum += num;
    }
    return sum;
  }
  
  const largeArr = [...Array(1000)].map(() => Math.random()); // Can have any size
  //console.log(sumElements(largeArr)); // O(n) - grows proportionally with array size
  

  // Quadratic time
  //Nested loops iterating over all pairs of elements in an array (e.g., bubble sort)

  function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  
  const hugeArr = [...Array(10000)].map(() => Math.random()); // Can have any size
 // console.log(bubbleSort(hugeArr)); // O(n^2) - grows significantly with array size
  

  //Exponetial time
  //Naive recursive Fibonacci calculation

  function fibonacciNaive(n) {
    if (n <= 1) return n;
    return fibonacciNaive(n - 1) + fibonacciNaive(n - 2);
  }
  
  console.log(fibonacciNaive(300)); // O(2^n) - explodes quickly with larger inputs
  
  