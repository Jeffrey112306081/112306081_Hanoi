function hanoi(n, source, target, auxiliary, result) {
    if (n > 0) {
      hanoi(n - 1, source, auxiliary, target, result);
      moveDisk(n, source, target, result);
      hanoi(n - 1, auxiliary, target, source, result);
    }
  }
  
  function moveDisk(disk, sourcePeg, targetPeg, result) {
    const sourceIndex = result[sourcePeg].indexOf(disk);
    result[sourcePeg].splice(sourceIndex, 1);
  
    result[targetPeg].unshift(disk);
  
    printState(result);
  }
  
  function printState(result) {
    const resultDiv = document.getElementById('result');
    const stateString = `A:${result['A'].join(',') || ' '}\nB:${result['B'].join(',') || ' '}\nC:${result['C'].join(',') || ' '}\n-----------\n`;
    resultDiv.innerText += stateString;
  }
  
  function solveHanoi() {
    const resultDiv = document.getElementById('result');
    const numDisks = document.getElementById('numDisks').valueAsNumber;
  
    // Clear previous results
    resultDiv.innerText = '';
  
    // Initialize the state
    const initialState = {
      'A': Array.from({ length: numDisks }, (_, index) => index + 1).reverse(),
      'B': [],
      'C': []
    };
  
    // Print the initial state
    printState(initialState);
  
    // Solve Tower of Hanoi
    hanoi(numDisks, 'A', 'C', 'B', initialState);
  }
  