(function array() {
  let a = [11, 22, 33, 44, 55],
    b = [91, 95, 96],
    c = [a, ...b];
  //STAR:不改变原数组
  {
    a.concat(b, c); //?
    /* concat会打平一层,但也仅限于一层 */
    let test = [1, 2];
    console.log(test.concat([3, [4, 5], 6], 4)); //
    console.log(test.concat([3, 4, 5, 6], 4)); //
    //
    a.join("_"); //?
    //返回子数组,以a[start]开头,a[end-1]结尾
    a.slice(2, 4); //?
    a.map((cur) => cur * 2); //?
    console.log(a.reduce((acc, cur, idx) => acc + cur, 0));
    a.filter((cur, idx, arr) => cur > 30); //?
    a;
  }
  //改变原数组
  {
    [...a].reverse(); //?
    //删除并返回数组中的最后一个元素
    [...a].pop(); //?
    //push()方法将一个或多个元素添加到数组的末尾,并返回该数组的新长度
    [...a].push(...b); //?
    [...a].shift(); //?
    //将item插入数组头部，返回数组新长度（考虑 undefined）
    [...a].unshift(b, undefined); //?
    //从?开始，删除?个元素，然后插入所有的?
    [...a].splice(1, 2, b); //?
    [...a].fill(10); //?
    a;
    {
      //sort未指定compareFunc时,按字符排序
      //compareFunc(a,b)<0,那么a移到b前面
      let d = [2, 1, 3, 4, 6, 7, 5, 8, 9, 10, 11, 12];
      [...d].sort(); //?
      [...d].sort((a, b) => a - b); //?
      d;
    }
  }
  //其他常规方法
  {
    a.every((i) => i > 20); //?
    a.find((i) => i > 30); //?
    a.findIndex((i) => i > 30); //?
    c.flat(); //?
    // a.flatMap()
    a.includes(11); //?
    a.join(""); //?
    a.lastIndexOf(44); //?
    a.some((i) => i > 20); //?
    a;
    c;
  }
})();
(function string() {
  let s = " Hello world. I need you ";
  s.split(" "); //?
  s.concat("wow"); //?
  s.includes("a"); //?
  s.indexOf("o"); //?
  s.lastIndexOf("o"); //?
  s.length; //?
  s.match(/\w*\./); //?
  s.matchAll(/w*/g); //?
  s.repeat(2); //?
  s.replace(/\w*\./, "wow"); //?
  s.search("need"); //?
  //---------
  s.slice(3, 5); //?
  s.substring(3, 5); //?
  //substring和slice有什么区别
  s.slice(-3, -1); //?
  s.substring(-3, 3); //?
  //slice传入负数会是倒着数,或者说是与string本身的长度相加之后再截取
  //substring传入负数会把负数转变为0再截取
  s.slice(3, 1); //?
  s.substring(3, 1); //?
  //---------
  s.trim(); //?
})();
(function 综合运用() {})();
