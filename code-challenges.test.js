// UNIT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly. If you get stuck, please leave comments to help us understand your thought process.

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

// b) Create the function that makes the test pass.
function fibonacci(n) {
  const sequence = [1, 1];
  
  for (let i = 2; i < n; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }

  return sequence;
}

describe("fibonacci", () => {
  it("a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence", () => {
    const fibonacciLength1 = 6;
    // Expected output: [1, 1, 2, 3, 5, 8]
    const fibonacciLength2 = 10;
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    expect(fibonacci(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fibonacci(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});

// Pseudo code:Create a function to pass the test

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

//const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
//const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// Pseudo code:Creating an object containing up and down tally, calculate the tally and return that.
// code-challenges.test.js

// a) Jest test
describe("calculateDifference", () => {
  it("calculates the difference between upVotes and downVotes", () => {
    const votes1 = { upVotes: 13, downVotes: 2 };
    // Expected output: 11
    expect(calculateDifference(votes1)).toEqual(11);

    const votes2 = { upVotes: 2, downVotes: 33 };
    // Expected output: -31
    expect(calculateDifference(votes2)).toEqual(-31);
  });
});

// b) Function to calculate the difference
function calculateDifference(votes) {
  return votes.upVotes - votes.downVotes;
}