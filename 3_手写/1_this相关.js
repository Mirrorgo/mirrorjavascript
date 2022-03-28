//https://juejin.cn/post/6844904151227301901#comment
//参考👆
const obj = { name: 123 };
const foo = function (...args) {
  console.log(this.name, args);
};
(function 实现call() {
  Function.prototype.myCall = function (thisArg, ...argArray) {
    // 原理:把函数添加到对象中,执行函数,然后删除函数
    if (typeof this !== "function") {
      throw new TypeError("not a function");
    }
    thisArg = thisArg || globalThis;
    let fn = Symbol(); //防止重名
    thisArg[fn] = this; //隐式绑定, 对于👇的例子, 等价于obj.fn = foo
    let res = thisArg[fn](...argArray);
    delete thisArg[fn]; //运行完了之后需要删除对应的方法
    return res;
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
    let fn = Symbol();
    thisArg[fn] = this;
    let res = thisArg.fn(...argArray);
    delete thisArg[fn];
    return res;
  };
  foo.myApply(obj, [1, 2, 3]);
  delete Function.prototype.myApply;
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
    let leadingThirtySevenList = list.myBindWithCall(null, 37);
    console.log(leadingThirtySevenList(1, 2, 3));
  }
  delete Function.prototype.myBindWithCall;
});
(function 实现instanceof() {
  // instanceof是一个运算符,无法直接声明,只能构造一个函数了
  //STAR: 原理=>接受两个参数,判断第二个参数是不是在第一个参数的原型链上
  const myInstanceOf = function (left, right) {
    // 获得构造函数的原型
    let prototype = right.prototype;
    // 判断构造函数的原型 是不是 在实例的原型链上
    do {
      // 没找到就把上一层拿过来，继续循环，再向上一层找
      left = Object.getPrototypeOf(left); // 获得实例对象的原型 也就是 left.__proto__
      // 原型链一层层向上找，都没找到 最终会为 null
      if (left === null) return false;
      if (prototype === left) return true;
    } while (true);
  };
  myInstanceOf([], Object); //?
  myInstanceOf([], Array); //?
});
