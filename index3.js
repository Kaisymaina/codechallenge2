function checkPrime(num) {

    if (num < 2) return false;
  
    for (let i = 2; i < num; i++) {
  
      if (num % i = 0) {
  
        return false;
  
      }
  
    }
  
    return true;
  
  }
  
  
  function detectPrime(arr) {
  
    return arr.some(checkPrime);
  
  }
  
  
  console.log(detectPrime([7]));