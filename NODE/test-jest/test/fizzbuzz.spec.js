const fizzbuzz = require('../lib/fizzbuzz')

describe("fizz buzz", () => {

  test("fizzbuzz(1) should return 1", () => {
    const num = 1

    const res = fizzbuzz(num)

    expect(res).toBe(1)
  })


  test("fizzbuzz(2) should return 2", () => {
    const num = 2

    const res = fizzbuzz(num)

    expect(res).toBe(2)
  })


  test("fizzbuzz(3) should return fizz", () => {
    const num = 3

    const res = fizzbuzz(num)

    expect(res).toBe('fizz')
  })


  test("fizzbuzz(6) should return fizz", () => {
    const num = 6

    const res = fizzbuzz(num)

    expect(res).toBe('fizz')
  })


  
  test("fizzbuzz(5) should return buzz", () => {
    const num = 5

    const res = fizzbuzz(num)

    expect(res).toBe('buzz')
  })


  test("fizzbuzz(10) should return buzz", () => {
    const num = 10

    const res = fizzbuzz(num)

    expect(res).toBe('buzz')
  })

  test("fizzbuzz(15) should return buzz", () => {
    const num = 15

    const res = fizzbuzz(num)

    expect(res).toBe('fizzbuzz')
  })
  

  test("fizzbuzz(30) should return buzz", () => {
    const num = 30

    const res = fizzbuzz(num)

    expect(res).toBe('fizzbuzz')
  })

})
