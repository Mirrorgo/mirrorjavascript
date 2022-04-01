function deepClone(oldObj) {
  if (typeof oldObj !== "object") return oldObj;
  let newObj = oldObj instanceof Array ? [] : {};
  for (const key in oldObj) {
    newObj[key] = deepClone(oldObj[key]);
  }
  return newObj;
}

let obj = {
  a: [],
  b: {
    ss: [1, 2, 3],
    c: 0,
  },
  c: 1,
};
console.log(deepClone(obj));
//instanceof的试用
