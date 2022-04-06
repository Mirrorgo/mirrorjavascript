//初始化二维数组
{
  Array(3)
    .fill(0)
    .map(() => Array(5).fill(0)); //?
}

//找到总和,最小值,最大值
{
  const array = [5, 4, 7, 8, 9, 2];
  array.reduce((a, b) => a + b); //?
  array.reduce((a, b) => (a > b ? a : b)); //?
  Math.max(...array); //?
  array.reduce((a, b) => (a < b ? a : b)); //?
  Math.min(...array); //?
}
//去除falsy值
{
  const array = [3, 0, 6, 7, "", false];
  array.filter(Boolean); //?
}
//去重
{
  const array = [5, 4, 7, 8, 9, 2, 7, 5];
  array.filter((cur, idx, arr) => arr.indexOf(cur) === idx); //?
  [...new Set(array)]; //?
}
//计数器
{
  let string = "kapilalipak";
  const table = {};
  for (let char of string) {
    table[char] = table[char] + 1 || 1;
  }
  table;
}
{
  let string = "kapilalipak";
  const countMap = new Map();
  for (let i = 0; i < string.length; i++) {
    if (countMap.has(string[i])) {
      countMap.set(string[i], countMap.get(string[i]) + 1);
    } else {
      countMap.set(string[i], 1);
    }
  }
  countMap;
}
//将Object属性转成属性数组
{
  const obj = { a: 1, b: 2, c: 3 };
  Object.entries(obj); //?
  const object1 = {
    a: "somestring",
    b: 42,
  };
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }
  const arr = [
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ];
  Object.fromEntries(arr); //?
}
//ES6的解构赋值虽然好用。但是要注意解构的对象不能为undefined、null。
//否则会报错，故要给被解构的对象一个默认值。
{
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  };
  const { a, b, c, d, e } = obj || {};
  a;
  const obj2 = undefined;
  //   const { f } = obj2;
}
//简化if中的判断条件
{
  let type = 1;
  if (type == 1 || type == 2 || type == 3 || type == 4) {
    //...
  }
  //👇简化后
  const condition = [1, 2, 3, 4];
  if (condition.includes(type)) {
    //...
  }
}
//精确搜索中,find替代filter,优化性能,因为find找到后就不会继续遍历了
{
  const a = [1, 2, 3, 4, 5];
  a.find((cur) => cur === 3); //?
}

{
  const deps = {
    采购部: [1, 2, 3],
    人事部: [5, 8, 12],
    行政部: [5, 14, 79],
    运输部: [3, 64, 105],
  };
  Object.values(deps).flat(Infinity); //?
}
//并发请求
{
  const fn = () => {
    Promise.all([fn1(), fn2()]).then((res) => {
      console.log(res); // [1,2]
    });
  };
}
//获取数组or字符串的倒数第i个
{
  const arr = [1, 2, 3, 4];
  const string = "5678";
  arr.at(-1); //?
  string.at(-1); //?
}
//bigint
{
  let a = 3n;
  typeof a; //?
  a;
}
//确定对象的数据类型
{
  const myType = function (type) {
    return Object.prototype.toString.call(type).slice(8, -1);
  };
  console.log(myType(new Array(1)));
}
{
  /* TODO
   * 使用动态导入import()实现按需加载(优化静态import)
   * 使用顶层await(top-level await)简化async函数
   * 使用Proxy替代Object.defineProperty
   */
}
