{
  let a = Array(2).fill({});
  a[1].wow = "?";
  a;
  let c = [1, 3, 4, 6, 2];
  Math.max(...c); //?
  const array = [3, 0, 6, 7, "", false];
  array.filter(Boolean); //?
  array.filter((cur) => Boolean(cur)); //?
  // 输出
  array.flat(Infinity);
}

{
  let arr = [1, 2, 3];
  let array = arr.filter((item, index) => {
    return item > 2;
  });
  console.log(array);
  arr = [3, 0, 6, 7, "", false];
  filter(arr, Boolean); //?

  function filter(arr, filterCallBack) {
    //检查传入的参数是否正确(第一个参数是否是数组,数组长度不为0,第二个参数是否是function)
    if (
      !Array.isArray(arr) ||
      !arr.length ||
      typeof filterCallBack !== "function"
    ) {
      return [];
    } else {
      let result = [];
      for (let i = 0, len = arr.length; i < len; i++) {
        //对数组中的每个元素进行检查，符合条件就放到返回的数组中
        if (filterCallBack(arr[i])) result.push(arr[i]);
      }
      return result;
    }
  }

  var res = filter(arr, (item) => {
    return item > 2;
  });
  console.log(res);
}
