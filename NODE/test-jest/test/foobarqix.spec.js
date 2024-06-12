const foobarqix = require("../lib/foobarqix") 


describe("foobarqix", () => {


  test("foobarqix(1) Should return 1", () => {
    const num = 1

    const res = foobarqix(num)

    expect(res).toBe(1)
  })


  
  test("foobarqix(2) Should return 2", () => {
    const num = 2

    const res = foobarqix(num)

    expect(res).toBe(2)
  })

  
  test("foobarqix(3) Should return FooFoo", () => {
    const num = 3

    const res = foobarqix(num)

    expect(res).toBe("FooFoo")
  })

  test("foobarqix(5) Should return BarBar", () => {
    const num = 5

    const res = foobarqix(num)

    expect(res).toBe("BarBar")
  })

  test("foobarqix(6) Should return Foo", () => {
    const num = 6

    const res = foobarqix(num)

    expect(res).toBe("Foo")
  })
  
  test("foobarqix(9) Should return Foo", () => {
    const num = 9

    const res = foobarqix(num)

    expect(res).toBe("Foo")
  })
  
  test("foobarqix(10) Should return Bar", () => {
    const num = 10

    const res = foobarqix(num)

    expect(res).toBe("Bar")
  })
  
  test("foobarqix(15) Should return FooBarBar", () => {
    const num = 15

    const res = foobarqix(num)

    expect(res).toBe("FooBarBar")
  })
  

})



// 7  => QixQix (divisible by 7, contains 7)
// 8  => 8
// 9  => Foo
// 10 => Bar
// 13 => Foo
// 15 => FooBarBar (divisible by 3, divisible by 5, contains 5)
// 21 => FooQix
// 33 => FooFooFoo (divisible by 3, contains two 3)
// 51 => FooBar
// 53 => BarFoo