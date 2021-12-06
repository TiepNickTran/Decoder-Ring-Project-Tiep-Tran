const polybiusModule = (function () {
  // you can add any code you want within this function scope

     const polySquare = {
    a:"11", b:"21", c:"31", d:"41",         e:"51",
    f:"12", g:"22", h:"32", i:"42", j:"42", k:"52",
    l:"13", m:"23", n:"33", o:"43",         p:"53",
    q:"14", r:"24", s:"34", t:"44",         u:"54",
    v:"14", w:"25", x:"35", y:"45",         z:"55",
    }

  function polybius(input, encode = true) {
    input = input.toLowerCase();
    if (!input) return false;

    if (encode) {
      let encodedMessage = "";
      for (let i = 0; i < input.length; i++) {
        if (polySquare[input[i]]) {
          encodedMessage += polySquare[input[i]];
          console.log(encodedMessage);
        } else {
          encodedMessage += input[i];
        }
      }
      return encodedMessage;
    } else {  // DECODE
      //if input.length is an even number
      if (Number.isInteger(input.replace(" ", "").length / 2)) {
        let decodedMessage = "";
        const posDigits = "12345";
        for (let i = 0; i < input.length; i++) {
          if (posDigits.includes(input[i])) {
            let tempNumber = input[i] + input[i + 1];
            if (tempNumber == 42) {
              decodedMessage += "(i/j)";
              i++;
            } else {
              // if tempNumber's not 42
              decodedMessage += Object.keys(polySquare).find(
                (key) => polySquare[key] === tempNumber);
              i++;
            }
          } else {
            // keep same input if its not within the posDigits
            decodedMessage += input[i];
          }
        }
        return decodedMessage;
      } else return false;    // if input.length is not an even number
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
