const { exec } = require('child_process')



const outil = process.argv[2]

exec(outil + ' --version', (err, stdout, stderr) => {

  if(err) {
    console.log("err :" + err)
  }

  if(stdout) {
    console.log(`stdout : ${outil} version is ${stdout}`)
  }

  if(stderr) {
    console.log("stderr :" + stderr)
  }

})
