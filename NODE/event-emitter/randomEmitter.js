const EventEmitter = require("events")

const em = new EventEmitter()


em.on("get-random", () => {
  const randomnumber = Math.random()
  em.emit('random-result', randomnumber)
})

em.on('random-result', (result) => {
  console.log("Number recieved : " + result)
})

em.emit('get-random')
