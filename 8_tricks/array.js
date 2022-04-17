//数组
(function 快速创建一个空的二维数组() {
  {
    let store = [];
    for (let i = 0; i < triangle.length; i++) {
      store[i] = [];
    }
  }
  {
    let m = 3,
      n = 5;
    new Array(m).fill(0).map(() => new Array(n).fill(0));
  }
});
//字符串
(function 首字母转大写() {
  let a = "hello";
  const trans = (cur) => cur.charAt(0).toUpperCase() + cur.slice(1);
  console.log(trans(a));
})();

{
  const a = ["aaafsd", "aawwewer", "aaddfff"];
  //最大公共前缀
  let longestCommonPrefix = (strings) => {
    if (!strings.length) return "";
    let [a, ...b] = strings;
    let result = "";
    for (let i in a) {
      let flag = b.every((item) => item[i] === a[i]);
      if (flag) result += a[i];
      else break;
    }
    return result;
  };

  console.log(longestCommonPrefix(a));
}
