//https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/submissions/
let lengthOfLongestSubstring = function (s) {
  const map = {};
  let max = 0;
  let pslow = 0,
    pfast = 0;
  while (pfast < s.length) {
    if (map[s[pfast]] === undefined) {
      map[s[pfast]] = 1;
      pfast++;
      max = Math.max(pfast - pslow, max);
    } else {
      map[s[pslow]] = undefined;
      pslow++;
    }
  }
  return max;
};
