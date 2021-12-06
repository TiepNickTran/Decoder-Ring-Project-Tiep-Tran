const { expect } = require("chai")
const { caesar } = require("../src/caesar.js")

describe("caesar", () => {
  it("Should return the correct shifted char base on index + shifted value", () => {
      const actual = caesar("thinkful", 3, encode = true)
      const expected = "wklqnixo"
      expect(actual).to.equal(expected)
  })
  it("Should return the correct shifted char base on index - shifted value", () => {
      const actual = caesar("thinkful", -3)
      const expected = "qefkhcri"
      expect(actual).to.equal(expected)
  })
  it("Should decode and return the correct shifted char base on index + shifted value", () => {
      const actual = caesar("wklqnixo", 3, false)
      const expected = "thinkful"
      expect(actual).to.equal(expected)
  })
  it("Should return the same input if it does not match the alphabet characters", () => {
      const actual = caesar("This is a secret message!", 8)
      const expected = "bpqa qa i amkzmb umaaiom!"
      expect(actual).to.equal(expected)
    })
  it("Should decode and return the input even if there is a character not within alphabet", () => {
      const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
      const expected = "this is a secret message!"
      expect(actual).to.equal(expected)
    })
  
    it("Should return false if there is no shift value", () => {
      const actual = caesar("thinkful")
      const expected = false
      expect(actual).to.equal(expected)
    })
    it("Should return false if shift value is greater than 25", () => {
      const actual = caesar("thinkful", 99)
      const expected = false
      expect(actual).to.equal(expected)
    })
    it("Should return false if shift value is less than -25", () => {
      const actual = caesar("thinkful", -26)
      const expected = false
      expect(actual).to.equal(expected)
    })
})