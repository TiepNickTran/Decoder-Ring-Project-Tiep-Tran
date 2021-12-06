// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    const engAlphabet = "abcdefghijklmnopqrstuvwxyz";
    input = input.toLowerCase();
    if (!input || !alphabet || alphabet.length !== 26) return false;

    // return false if the alphabet has a repeated character.
    const alphabetSplit = alphabet.split("");
    for (let i = 0; i < alphabetSplit.length; i++) {
      const result = alphabetSplit.filter(
        (alpha) => alpha === alphabetSplit[i]
      );
      if (result.length > 1) return false;
    }

    //if encoding then engAlphabet = key and alphabet = value of object key and reverse if decoding
    const [main, secondary] = encode ? [engAlphabet, alphabet] : [alphabet, engAlphabet];
    const key = main.split("").reduce(
      (acc, letter, index) => {
        acc[letter] = secondary[index];
        return acc;
      },
      { " ": " " } // initial value of reduce. Keep empty space as is
    );
    //split input into chars and use key / value pair of object name key to return the corresponding value
    return input
      .split("")
      .map((letter) => key[letter])
      .join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
