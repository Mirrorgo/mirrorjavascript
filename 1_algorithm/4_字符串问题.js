(function 反转字符串() {
  const str = "hello world";
  const res = str.split("").reverse().join("");
  console.log(res);
})();
(function 回文字符串的衍生问题() {
  //给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串
  const input = "abcddfcba";
  console.log(palindromeLike(input), "palindromeLike");
  function palindromeLike(string) {
    let p1 = 0,
      p2 = string.length - 1;
    while (p1 < p2 && string[p1] === string[p2]) {
      p1++;
      p2--;
    }
    if (p1 === p2 || p2 + 1 === p1) return true;
    let _p1 = p1 + 1,
      _p2 = p2 - 1;
    if (partPalindrome(string, _p1, p2) || partPalindrome(string, p1, _p2))
      return true;
    return false;
    function partPalindrome(string, p1, p2) {
      while (p1 < p2) {
        if (string.charAt(p1) === string.charAt(p2)) {
          p1++;
          p2--;
        } else break;
      }
      if (p1 === p2 || p2 + 1 === p1) return true;
      return false;
    }
  }
})();
(function 字符串匹配问题() {
  (function 正则表达式() {
    //实现一个 atoi 函数，使其能将字符串转换成整数
    console.log(atoi("  -123 wow"), "regex");
    function atoi(str) {
      let result = str.match(/\s*(?<number>[-+]?\d*).*/);
      if (result < -Math.pow(2, 31)) {
        return "INT_MIN";
      }
      if (result > Math.pow(2, 31) - 1) {
        return "INT_MAX";
      }
      return +result.groups.number;
    }
  })();
})();
