export default relearn;
// Number（数字）
// String（字符串）
// Boolean（布尔）
// Symbol（符号）（ES2015 新增）
// Object（对象）
// Function（函数）
// Array（数组）
// Date（日期）
// RegExp（正则表达式）
// null（空）
// undefined（未定义）

//数字:
/* 
JavaScript 采用“遵循 IEEE 754 标准的双精度 64 位格式”
（"double-precision 64-bit format IEEE 754 values"）表示数字 */
{
  console.log(0.1 + 0.2);
  // why? =>浮点数精度问题 https://zhuanlan.zhihu.com/p/95318421
  // 解决方案:
  //1.Number.EPSILON
  //Number.EPSILON 属性表示 1 与Number可表示的大于 1 的最小的浮点数之间的差值
  const equals1 = (a, b) => {
    return Math.abs(a - b) < Number.EPSILON;
  };
  console.log(equals1(0.1 + 0.2, 0.3));
  //2.计算数字放大再缩小
  console.log((0.1 * 1000 + 0.2 * 1000) / 1000 === 0.3);
}
{
  console.log(parseInt("123", 10)); // 123
  console.log(parseInt("010", 10)); // 10
  parseInt("11", 2); // 3
  console.log(parseFloat("1.234"));
  //   一元运算符 + 也可以把数字字符串转换成数值
  console.log(parseInt("hello", 10));
  //内置函数 isNaN() 来判断一个变量是否为 NaN
  isNaN(NaN); // true
  console.log(1 / 0, -1 / 0);
  //可以使用内置函数 isFinite() 来判断一个变量是否是一个有穷数， 如果类型为Infinity, -Infinity 或 NaN则返回false
  console.log(isFinite(1 / 0));
  isFinite("0"); // true
  // 如果是纯数值类型的检测，则返回 false：
  Number.isFinite("0"); // false
  /* 
	parseInt() 和 parseFloat() 函数会尝试逐个解析字符串中的字符，
	直到遇上一个无法被解析成数字的字符，然后返回该字符前所有数字字符组成的数字。
	但是运算符 "+"对字符串的转换方式与之不同， 
	只要字符串含有无法被解析成数字的字符，该字符串就将被转换成 NaN。
	可分别使用这两种方法解析“10.2abc”这一字符串，并比较得到的结果，
	来理解这两种方法的区别 */
}
{
  console.log("string".charAt(3), "s".toUpperCase(), "hello world".length);
}
{
  /* 
	  JavaScript 包含布尔类型，这个类型的变量有两个可能的值，
	  分别是 true 和 false（两者都是关键字）。根据具体需要，JavaScript 按照如下规则将变量转换成布尔类型：
	  false、0、空字符串（""）、NaN、null 和 undefined 被转换为 false
	  所有其他值被转换为 true */
  // 也可以使用 Boolean() 函数进行显式转换
  Boolean(""); // false
  Boolean(234); // true
  /* 
	一个实用的技巧——通过与空字符串相加，可以将某个变量快速转换成字符串类型 */
  console.log("3" + 4 + 5);
  console.log(3 + 4 + "5");
  //由两个“=（等号）”组成的相等运算符有类型自适应的功能
  console.log(123 == "123", 1 == true);
}
{
  (function 创建对象and判断对象类型() {
    //两种简单方法可以创建一个空对象
    let obj1 = new Object();
    let obj2 = {};
    console.log(typeof obj1, typeof obj2);
    console.log(type([]));
    //生产环境中实际使用的时候👇https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof#real-world_usage
    //ts或许更好
    function type(obj, fullClass) {
      // get toPrototypeString() of obj (handles all types)
      // Early JS environments return '[object Object]' for null, so it's best to directly check for it.
      if (fullClass) {
        return obj === null
          ? "[object Null]"
          : Object.prototype.toString.call(obj);
      }
      if (obj == null) {
        return (obj + "").toLowerCase();
      } // implicit toString() conversion

      var deepType = Object.prototype.toString
        .call(obj)
        .slice(8, -1)
        .toLowerCase();
      if (deepType === "generatorfunction") {
        return "function";
      }

      // Prevent overspecificity (for example, [object HTMLDivElement], etc).
      // Account for functionish Regexp (Android <=2.3), functionish <object> element (Chrome <=57, Firefox <=52), etc.
      // String.prototype.match is universally supported.

      return deepType.match(
        /^(array|bigint|date|error|function|generator|regexp|symbol)$/
      )
        ? deepType
        : typeof obj === "object" || typeof obj === "function"
        ? "object"
        : typeof obj;
    }
  })();
  (function 对象访问方法x2() {
    var obj = {
      name: "Carrot",
      _for: "Max", //'for' 是保留字之一，使用'_for'代替
      details: {
        color: "orange",
        size: 12,
      },
    };
    obj.details.color; //?
    obj["details"]["size"]; //?
  })();
  (function 原型() {
    // 用原型定义一个对象
    var You = new Person("You", 24);
    function Person(name, age) {
      //👆这个是原型
      this.name = name;
      this.age = age;
    }
  })();
  (function 原型和原型链() {
    function doSomething() {}
    doSomething.prototype; //?
    let doSome = function () {};
    doSome.prototype; //?
    doSome.prototype.foo = "bar";
    doSome.prototype; //?
  })();
  //TODO原型和原型链
}
{
  //数组
  (function 创建数组的方式() {
    var a = new Array();
    a[0] = "dog";
    a[1] = "cat";
    a[2] = "hen";
    a.length; //?
    var b = ["dog", "cat", "hen"];
    b.length; //?
  })();
  (function 遍历() {
    //for of
    //for in
    let a = [11, 22, 33];
    for (const cur of a) {
      console.log(cur);
    }
    for (const key in a) {
      if (Object.hasOwnProperty.call(a, key)) {
        const element = a[key];
        console.log(element);
      }
      console.log(a[key]); //与👆的区别是什么?
    }
    a.forEach((cur, idx, arr) => {
      console.log(cur);
    });
  })();
  (function 数组方法() {
    let a = [11, 22, 33],
      b = [44, 55, 66],
      c = [a, ...b];
    {
      //不改变原数组
      a.concat(b, c); //?
      a.join("_"); //?
    }
    {
      //改变原数组
      [...a].reverse(); //?
    }
  })();
}
