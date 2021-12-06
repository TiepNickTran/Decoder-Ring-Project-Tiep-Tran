const { expect } = require("chai");
const { substitution } = require("../src/substitution.js");

describe("substitution", () => {
  it("Should return the correct encoded message base on the replacement alphabet", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.equal(expected);
  });
  it("Should return the correct encoded message base on the replacement alphabet even with capital characters", () => {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.equal(expected);
  });
  it("Should return the correct decoded message base on the replacement alphabet", () => {
    const actual = substitution(
      "jrufscpw",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  it("Should still work correctly if there are none alphabet chars in the replacement alphabet", () => {
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = "y&ii$r&" 
    expect(actual).to.equal(expected);
  });
  it("Should still decode correctly if there are none alphabet chars in the input", () => {
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    const expected = "message" 
    expect(actual).to.equal(expected);
  });
  it("Should return false if the replacement alphabet is short / not exactly 26 or when it is not provided", () => {
    const actual = substitution("thinkful", "short");
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("Should return false if the replacement alphabet has a repeated char in it", () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    const expected = false;
    expect(actual).to.equal(expected);
  });
});

