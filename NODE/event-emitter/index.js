const EventEmitter = require("events")

const em = new EventEmitter()



em.on('monEvent', () => {
  console.log("Event emitted")
})

// em.emit('monEvent')



// em.on('hello', (name) => {
//   console.log(`Hello ${name}`)
// })

// em.emit("hello", "Jhon")


// em.on('hello-with-object', (user) => {
//   console.log(`Hello ${user.name}`)
// })

// em.emit("hello-with-object", {name : "Doe"})

