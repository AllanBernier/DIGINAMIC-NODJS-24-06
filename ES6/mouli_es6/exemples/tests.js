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

const sleep = () => new Promise( (resolve) => setTimeout( () => {
  resolve("Hello")
} , 2000) )


const syncroneFunc = () => {
  console.log("Start")

  sleep().then( () => {
    console.log("Hello")
  })

  console.log("End")
}

const asyncFunc = async () => {
  console.log("Start")

  const result = await sleep()

  console.log("End", result)
}

// asyncFunc()


const promiseFunc = () => {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      const random = Math.random()

      if (random > 0.5){
        resolve(random)
      } else {
        reject( new Error("Erreur dans la promesse") )
      }

    }, 2000)
  })
}

const execFunc = () => {

  promiseFunc()
  .then((result ) => {
    console.log("res", result)
  }).catch( (err) => {
    console.error(err)
  })

}

const cathPromise =async () => {
  try {
    const result = await promiseFunc()
    console.log(result)
  } catch (error) {
    console.error(error)
  }

}

// execFunc()
// cathPromise()


const p1 = async () => new Promise( resolve => setTimeout( () => resolve("p1"), 500 ))
const p2 = async () => new Promise( resolve => setTimeout( () => resolve("p2"), 2000 ))
const p3 = async () => new Promise( resolve => setTimeout( () => resolve("p3"), 1000 ))

const seq = async () => {
  try {
    r1 = await p1()
    console.log("1")
    r2 = await p2()
    console.log("2")
    r3 = await p3()
    console.log("3")

    console.log(r1, r2, r3)
  } catch (err){
    console.log("err")
  }
}


const parralelle = async () => {
  try {

    [r1, r2, r3 ] = await Promise.all([p1(), p2(), p3() ])

    console.log(r1, r2, r3)
  } catch (err){
    console.log("err")
  }
}



parralelle()