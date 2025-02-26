function MathChallenge(num) { 

    const numString = String(num)
    
    let nextNum = '';
    for (let i = numString.length - 1; i > 0; i--) {
      console.log(`i = ${i}`);
      if (numString.charAt(i) > numString.charAt(i - 1)) {
        for (let j = 0; j < numString.length; j++) {
          console.log(`j = ${j}`);
          if (j = i - 1) {
            nextNum += numString.charAt(i);
          }
          else if (j = i) {
            nextNum += numString.charAt(i - 1);
          }
          else {
            nextNum += numString.charAt(j);
          }
          console.log(nextNum);
        }
        return nextNum;
      }
    }
    
    return -1;
  }
     
  // keep this function call here 
  console.log(MathChallenge(9971243));