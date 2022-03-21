/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = {};
  let max = 0;
  let pslow = 0,
    pfast = 0;
  while (pfast < s.length) {
    if (map[s[pfast]] === undefined) {
      pfast++;
      map[s[pfast]] = 1;
    } else {
      pslow++;
      map[s[pslow]] = undefined;
    }
    max = Math.max(pfast - pslow, max);
  }
  return max;
};
