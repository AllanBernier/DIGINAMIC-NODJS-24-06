

const foobarqix = (num) => {
  let res = ''

  if (num % 3 === 0) res += "Foo"
  if (num % 5 === 0) res += "Bar"
  if (num % 7 === 0) res += "Bar"

  const numStr = num.toString()
  for (let c of numStr) {
    if (c === '5') res += "Bar"
    if (c === '3') res += "Foo"
    if (c === '7') res += "Qix"
  }

  return res !== '' ? res : num
}


module.exports = foobarqix