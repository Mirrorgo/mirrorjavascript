function deepClone(obj) {
  if (typeof obj !== "object") return obj;
  let newObj = Array.isArray(obj) ? [] : {};
  for (let i in obj) {
    newObj[i] = deepClone(obj[i]);
  }
  return newObj;
}
