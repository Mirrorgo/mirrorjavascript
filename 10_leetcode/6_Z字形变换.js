/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let z = new Array(numRows).fill(0).map(() => []);
  for (let i = 0; i < s.length; i++) {
    if (numRows < 2) return s;
    let more;
    more = i % (numRows * 2 - 2);
    if (more < numRows) {
      z[more].push(s[i]);
    } else {
      z[2 * numRows - more - 2].push(s[i]);
    }
  }
  return z.flat().join("");
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("P", 1));
