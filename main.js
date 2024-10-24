export function capitalize(string) {
  return string.toUpperCase();
}
export function reverseString(string) {
  return Array.from(string).reverse().join("");
}

export function calculator() {
  return {
    subtract: function (a, b) {
      let arr = [a, b];
      const difference = arr.reduce((diff, value) => diff - value);
      return difference;
    },

    add: function (a, b) {
      let arr = [a, b];

      const sum = arr.reduce((sum, value) => sum + value, 0);
      return sum;
    },

    multiply: function (a, b) {
      let arr = [a, b];

      const product = arr.reduce((product, value) => product * value);
      return product;
    },

    divide: function (a, b) {
      let arr = [a, b];

      const product = arr.reduce((product, value) => product / value);
      if (arr[1] == 0) {
        clearExpression();
        return "Error!";
      }
      return product;
    },
  };
}

export function caesarCipher(text, shift) {
  let textArray = Array.from(text);
  let test = textArray.map((character) => {
    let shifted = character.charCodeAt(0);
    for (let i = 0; i < shift; i++) {
      shifted++;
      if (shifted == 91) shifted = 65;
      if (shifted == 123) shifted = 97;
    }
    return String.fromCharCode(shifted);
  });

  return test.join("");
}

export function analyzeArray(array) {
  return {
    average: array.reduce((prev, current) => (prev += current)) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}
