function calculateVoteTally(votes) {
  return votes.upVotes - votes.downVotes;
}
function generateFibonacci(length) {
    if (length <= 0) {
      throw new Error('Length must be greater than 0');
    }
  
    if (length === 1) {
      return [1];
    }
  
    const fibonacciArray = [1, 1];
  
    for (let i = 2; i < length; i++) {
      fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
    }
  
    return fibonacciArray;
  }
 
  
  module.exports = calculateVoteTally;
  
  module.exports = generateFibonacci;