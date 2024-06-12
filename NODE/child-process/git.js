const {exec, spawn} = require("child_process")

// Git add
// Git commit -m "process.argv[2]"
// Git Push
// $node git.js "child process"


const message = process.argv[2]

if ( !message ) {
  console.log("Message required !")
  process.exit(0)
}

const add = spawn("git", ["add", "*"]);
 
// add.stdout.on("data", (buffer) => {

// });

add.on("exit", () => {
  console.log("added")
  
  const commit = spawn("git", ['commit', "-m", message])

  commit.stdout.on("data", (buffer) => {
    console.log(buffer.toString())
    console.log("commit")

    const push = spawn("git", ['push'])

    push.on("exit", (msg) => {
      console.log(msg)
      console.log("Pushed")
    })
  })  
})

