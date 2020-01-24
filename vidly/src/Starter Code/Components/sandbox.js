const reverseString = str => {
  let strToReturn = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strToReturn += str[i];
  }
  return strToReturn;
};

console.log(reverseString("Hello"));

obj = {
  a: 1,
  b: 2
};

const { a, b } = obj;
