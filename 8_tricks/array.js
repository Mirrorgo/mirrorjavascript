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
