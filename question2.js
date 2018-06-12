// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.
//
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.
//
// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

const decodeString = (s) => {
  let decodedStr = '';
  let repeatNum;

  for (let i = 0; i < s.length; i++) {
    let numCheck = Number(s[i]);
    if (isNaN(numCheck) === false) {
      repeatNum = numCheck;
    } else if (s[i] === '[') {
      decodedStr += (decodeString(s.slice(i + 1))).repeat(repeatNum - 1);
    } else if (s[i] === ']') {
      return decodedStr;
    } else {
      decodedStr += s[i];
    }
  }
}
