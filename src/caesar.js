// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // helper function
    function codeShifting(shiftedIndex) {
      let hiddenMessage = "";
      if (shiftedIndex > 25) {
        shiftedIndex = shiftedIndex - 26;
        hiddenMessage += alphabet[shiftedIndex];
      } else if (shiftedIndex < 0) {
        shiftedIndex = shiftedIndex + 26;
        hiddenMessage += alphabet[shiftedIndex];
      } else {
        // not greater than 25 or less than 0
        hiddenMessage += alphabet[shiftedIndex];
      }
      return hiddenMessage;
    }
    
    if (!shift || shift === 0 || 25 < shift || shift < -25) return false;
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    input = input.toLowerCase();
    let result = "";
    
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        if (alphabet.includes(input[i])) {
          let shiftedIndex = alphabet.indexOf(input[i]) + shift;
          result += codeShifting(shiftedIndex);
        } else {
          result += input[i];
        }
      }
      return result;
    } else {
      //decoding
      for (let i = 0; i < input.length; i++) {
        if (alphabet.includes(input[i])) {
          let shiftedIndex = alphabet.indexOf(input[i]) - shift;
          result += codeShifting(shiftedIndex);
        } else {
          result += input[i];
        }
      }
      return result;
    }
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };