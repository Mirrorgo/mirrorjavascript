//https://juejin.cn/post/6844904151227301901#comment
//参考👆
const obj = { name: 123 };
const foo = function (...args) {
  console.log(this.name, args);
};
(function 实现call() {
  Function.prototype.myCall = function (thisArg, ...argArray) {
    if (typeof this !== "function") {
      throw new TypeError("not a function");
    }
    thisArg = thisArg || globalThis;
    thisArg.fn = this; //隐式绑定, 对于👇的例子, 等价于obj.fn = foo
    return thisArg.fn(...argArray);
  };
  foo.call(undefined, "111", "222"); // FIXME:为什么没有抛出not a function 的错误
  foo.call(obj, "111", "222");
  foo.myCall(undefined, "111", "222");
  foo.myCall(obj, "111", "222");
  delete Function.prototype.myCall; //FIXME应该这样吗?
});
(function 实现apply() {
  Function.prototype.myApply = function (thisArg, argArray) {
    if (typeof this !== "function") {
      throw new TypeError("not a function");
    }
    if (!Array.isArray(argArray)) {
      throw new Error("argArray is not a array");
    }
    thisArg = thisArg || globalThis;
    thisArg.fn = this;
    return thisArg.fn(...argArray);
  };
  foo.myApply(obj, [1, 2, 3]);
});
(function 实现bind() {
  //TODO
  (function call实现bind() {
    //需要保证偏函数的功能👉https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#%E5%81%8F%E5%87%BD%E6%95%B0
    Function.prototype.myBindWithCall = function (thisArg, ...argArray) {
      if (typeof this !== "function") {
        throw new TypeError("not a function");
      }
      let that = this;
      thisArg = thisArg || globalThis;
      return function () {
        return that.call(thisArg, ...argArray, ...arguments);
      };
    };
  })();
  {
    //测试1
    function addArguments(arg1, arg2) {
      return arg1 + arg2;
    }
    let addThirtySeven = addArguments.myBindWithCall(null, 37);
    console.log(addThirtySeven(5));
    //测试2
    function list() {
      return Array.prototype.slice.call(arguments);
    }
    let leadingThirtysevenList = list.myBindWithCall(null, 37);
    console.log(leadingThirtysevenList(1, 2, 3));
  }
  // Function.prototype.myBind = function (thisArg, ...argArray) {
  //   if (typeof this !== "function") {
  //     throw TypeError("bind must be called on a function");
  //   }
  // };
})();
