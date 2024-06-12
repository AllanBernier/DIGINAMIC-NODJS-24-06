let {sum, substract, multiply, toUpperCase, divide, reverseString, isPalindrome} = require("../lib/utils")


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



// divide(6, 3) devrait retourner 2.
// divide(10, 2) devrait retourner 5.
// divide(5, 0) devrait lancer une erreur Division by zero.
// divide(-6, 3) devrait retourner -2.
// divide(7, 2) devrait retourner 3.5.

describe("Divide", () => {
  test("divide(6,3) should return 2", () => {
    const a = 6
    const b = 3

    const res = divide(a,b)
    
    expect(res).toBe(2)
  })


  test("divide(5,0) should throw error", () => {
    const a = 5
    const b = 0

    const res = () => divide(a,b)
    
    expect(res).toThrow(Error);
  })

})



// modulus(10, 3) devrait retourner 1.
// modulus(9, 3) devrait retourner 0.
// modulus(7, 4) devrait retourner 3.
// modulus(-7, 4) devrait retourner -3.
// modulus(7, -4) devrait retourner 3.
 
// reverseString("hello") devrait retourner "olleh".
// reverseString("world") devrait retourner "dlrow".
// reverseString("a") devrait retourner "a".
// reverseString("") devrait retourner "".
// reverseString("racecar") devrait retourner "racecar".

describe("reverseString", () => {
  test("reverseString('hello') sould return 'olleh'", () => {
    const str = "hello"

    const res = reverseString(str)

    expect(res).toBe('olleh')
  })
})
 
// isPalindrome("madam") devrait retourner true.
// isPalindrome("hello") devrait retourner false.
// isPalindrome("racecar") devrait retourner true.
// isPalindrome("A man a plan a canal Panama") devrait retourner false (tester la version sans les espaces et minuscules).
// isPalindrome("") devrait retourner true.



describe("isPalindrome", () => {

  beforeAll(() => {
    reverseString = jest.fn()
  })
  

  test("isPalindrome('madam') should return true", () => {
    const str = "madam"
    reverseString.mockReturnValueOnce("madam")

    const res = isPalindrome(str)

    expect(res).toBe(true)
  })


  afterAll(() => {
    let {reverseString} = require("../lib/utils")  
  })

})


// isEven(4) devrait retourner true.
// isEven(5) devrait retourner false.
// isEven(0) devrait retourner true.
// isEven(-2) devrait retourner true.
// isEven(-3) devrait retourner false.