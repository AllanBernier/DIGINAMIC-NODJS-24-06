const { spawn } = require('child_process')

const ls = spawn('ls', ['-l', '-adzadza'])

ls.stdout.on('data', (res) => {
  console.log("out : " + res)
})

ls.stderr.on('data', (err) => {
  console.log("err : " + err)
})

// ls.