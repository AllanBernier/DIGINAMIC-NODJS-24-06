const {parentPort} = require("worker_threads")

const isPrime = (n) => {
  if (n < 3) return n > 1;
  else if (n % 2 === 0 || n % 3 === 0) return false;
  else if (n < 25) return true;
  let i = 5;
  while (i * i <= n ) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}


let current_number = 1000000000000000
while(true){
  if (isPrime(current_number)){
    parentPort.postMessage("Prime number found : " + current_number)
  }

  current_number++
}
