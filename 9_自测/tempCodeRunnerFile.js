function fn() {
  console.log(this.name);
}
let obj = {
  name: "行星飞行",
  func: fn,
};
let obj1 = {
  name: "听风是风",
  o: obj,
};
obj1.o.func(); //行星飞行