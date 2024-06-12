
const sum = (a, b) => {
  return a + b
}

const substract = (a, b) => {
  return a - b
}

const multiply = (a,b) => {
  return a * b
}
 
const toUpperCase = (str) => {
  return str.toUpperCase()
}


const divide = (a,b) => {
  if (b === 0)
    throw new Error("Division by zero")

  return a/b
}

const modulo = (a,b) => {
  return a%b
} 

const reverseString = (str) => {
  return str.split('').reverse().join('')
}

const isPalindrome = (str) => {
  return str === reverseString(str)
}


const isEven = (num) => {
  return num % 2 === 0
}


module.exports = {sum, substract, multiply, toUpperCase, divide, isEven, isPalindrome, modulo, reverseString}

