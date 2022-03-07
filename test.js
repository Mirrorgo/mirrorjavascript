(function 数组方法() {
  let a = [11, 22, 33],
    b = [44, 55, 66],
    c = [a, ...b];
  {
    [...a].pop(); //?
    [...a].push(1); //?
    a.push(1); //?
    a;
    console.log([].push(1, 2, 3, 3)); //?
  }
})();
