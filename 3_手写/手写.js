(function getUrlParams() {
  //解析url里面的参数并转成对象
  (function (url) {
    //js正则表达式的返回值类型真的是数组吗👇
    //https://segmentfault.com/q/1010000041561168?_ea=218145866
    let reg = /\?(?:(\w)=(\d)&)*(\w)=(\d)$/;
    let getGroup = (nums) => {
      let i = 1,
        res = {};
      while (i < nums.length) {
        res[nums[i]] = nums[i + 1];
        i += 2;
      }
      return res;
    };
    console.log(getGroup(url.match(reg)));
  })("https://www.juejin.cn?a=1&b=2"); //{a:1,b:2}
});
(function createCallFunction() {
  // 原理:把 foo 添加到 obj 里，执行 foo 拿到返回值，
  // 再从 obj 里把 foo 删掉
  // 用 Symbol 是因为他是独一无二的，避免和 obj 里的属性重名
  /* Function.prototype.myCall = function (ctx, ...args) {
    //用箭头函数是不行的,why
    ctx = ctx || window; // ctx 就是 obj
    let fn = Symbol();
    ctx[fn] = this; // this 就是 foo
    // let result = ctx[fn](...arguments);
    let result = ctx[fn](...args);
    delete ctx[fn];
    return result;
  };
  let obj = { name: "lee" };
  function foo(...args) {
    // console.log(this.name, arguments);
    console.log(this.name, args);
  }
  foo.myCall(obj, "111", "222"); */
  Function.prototype.myCall = function (target, ...args) {
    // this 指向调用 myCall函数的对象
    if (typeof this !== "function") {
      throw new TypeError("not a function");
    }
    target = target || window;
    target.fn = this; // 隐式绑定，改变构造函数的调用者间接改变 this 指向
    let result = target.fn(...args);
    return result;
  };
  // 测试
  let obj = { name: 123 };
  function foo(...args) {
    console.log(this.name, args);
  }
  let s = foo.myCall(obj, "111", "222");
})();

(function 实现reduce() {})();
(function 实现Currying() {})();
