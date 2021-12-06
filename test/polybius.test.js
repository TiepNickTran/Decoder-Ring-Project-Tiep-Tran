const { expect } = require("chai")
const { polybius } = require("../src/polybius.js")

describe("polybius", () => {
    it("Should return the correct numbers for each character within input", () => {
        const actual = polybius("thinkful")
        const expected = "4432423352125413"
        expect(actual).to.equal(expected)
    })
    it("Should return the correct numbers for each character within input even with capital character", () => {
        const actual = polybius("Hello world")
        const expected = "3251131343 2543241341"
        expect(actual).to.equal(expected)
    })
    it("Should work even with a space within input", () => {
      const actual = polybius("3251131343 2543241341", false)
      const expected = "hello world"
      expect(actual).to.equal(expected)
    })
    it("Should return 42 as i/j", () => {
        const actual = polybius("4432423352125413", false)
        const expected = "th(i/j)nkful"
        expect(actual).to.equal(expected)
    })
    it("Should return false if the input length is odd", () => {
        const actual = polybius("44324233521254134", false)
        const expected = false
        expect(actual).to.equal(expected)
    })
})