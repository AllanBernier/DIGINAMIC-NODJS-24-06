let array = [1, 2 ,3 ]
// console.log(array)


let arrayCopy = [10, 10, ...array, 10,10]
// console.log(arrayCopy)


let [a,b ,c] = array
// console.log("a" , a)
// console.log("b" , b)
// console.log("c" , c)

let obj = {
  message : "hello world"
} 
// console.log(obj)

obj.type = "success"
// console.log(obj)

let objCopy = { user: 5, ...obj }
// console.log(objCopy)


let {message, type, user} = objCopy
// console.log(message, type, user)


// var et let

// let maLetVariable = 5
// var maVarVariable = 5

function varTest(){
  var x = 1
  if (true) {
    var x = 2
    console.log(x)
  }
  console.log(x)
}

function letTest(){
  let x = 1
  if (true) {
    let x = 2
    console.log(x)
  }
  console.log(x)
}
// letTest()
const API_KEY = "secret_key" 

// console.log(API_KEY)

// API_KEY = 5

// console.log(API_KEY)



function foo(){
  console.log("bar")
}


const bar = () => {
  console.log("foo")
}

const myArray = [1,2,3,4]

for (let i = 0; i < myArray.length; i++) {
  //  console.log(myArray[i], i);
}

// myArray.map( (value, index, array) => console.log(value, index, array) )

const fa = param => param * 2

const sum = (n1, n2) => n1 + n2

const helloworld = () => {
  let name = "hello"
  return name
}

const helloreturnimplicite = () => (
  "hello"
)