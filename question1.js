// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

const sortByStrings = (s, t) => {
  let chWithIdx = [];

  for (let i = 0; i < s.length; i++) {
    chWithIdx.push([t.indexOf(s[i]), s[i]]);
  }

  return chWithIdx.sort().map((pair) => {
    return pair[1];
  }).join('');
}
