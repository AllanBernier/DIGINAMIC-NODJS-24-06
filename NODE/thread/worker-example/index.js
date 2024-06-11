const {Worker} = require("worker_threads")


const useWorker = () => {

  const worker = new Worker("./worker.js")

  worker.on('message', (msg) => {
    console.log(msg)
  })

  worker.on('error', (err) => {
    console.log(err)
  });

}

setInterval( () => {
  console.log("Process working")
}, 1000)

useWorker()