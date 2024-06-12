const {sum, substract, multiply, toUpperCase} = require("../lib/utils")


describe("test sum method", () => {

  beforeAll( () => {
    console.log("Before All")
  })

  afterAll( () => {
    console.log("After All")
  })

  beforeEach( () => {
    console.log("Before Each")
  })

  afterEach( () => {
    console.log("after Each")
  })

  test('sum(5,9) should return 14', () => { 
    const a = 5
    const b = 9

    const res = sum(a,b)

    expect(res).toBe(14)
  })

  test('sum(1,1) should return 2', () => { 
    const a = 1
    const b = 1

    const res = sum(a,b)

    expect(res).toBe(2)
  })
})

