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
  (function 浮点数() {
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
    //3.toFixed然后+转数字
    let sum = 0.1 + 0.2;
    console.log(+sum.toFixed(2)); // 0.3
  })();
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
}
{
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
}
{
  (function 函数() {
    //函数实际上是访问了函数体中一个名为 arguments 的内部对象
    function avg(...args) {
      let sum = 0;
      // arguments.forEach((cur) => { sum+=cur })
      //STAR why forEach无法使用?=> arguments是一个类数组对象,除了length属性和索引元素之外没有任何Array属性
      //对参数使用slice会阻止某些JavaScript引擎中的优化 (比如 V8 - 更多信息)。如果你关心性能，尝试通过遍历arguments对象来构造一个新的数组。另一种方法是使用被忽视的Array构造函数作为一个函数
      //var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
      //NOTE 以下三个方法都可以,但是
      console.log(arguments);
      for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
      }
      // args.forEach((cur) => (sum += cur));
      // [...arguments].forEach((cur) => (sum += cur));
      return sum / arguments.length;
    }
    avg(1, 2, 3, 4); //?
    //avg只能接受 , 分隔的参数,如果要输入数组得用👇
    avg.apply(null, [6, 7, 8, 9]); //?
    avg(...[6, 7, 8, 9]); //?
  })();
}
{
  //自定义对象
  (function 自定义对象and原型() {
    //NOTE:
    //构造函数----prototype--->原型对象
    //构造函数<--constructor---原型对象
    //  || new                  /\
    //  ||                      ||
    //   =====>实例对象===== __proto__  浏览器console中常为[[Prototype]]
    /* STAR:JavaScript 允许你在程序中的任何时候修改原型（prototype）中的一些东西，
    也就是说你可以在运行时(runtime)给已存在的对象添加额外的方法,比如👇 */
    {
      let s = "Simon";
      String.prototype.reversed = function () {
        var r = "";
        for (var i = this.length - 1; i >= 0; i--) {
          r += this[i];
        }
        return r;
      };
      s.reversed(); // ?
      //TODO:如果弄一个原型的块级作用域?也就是花括号外移除String.reversed函数
    }
    //FIXME:此时在花括号外也会收到原型的影响
    "123".reversed(); //?
    //Javascript中,function是允许拥有属性的,so,所有函数会有一个特别的属性:prototype
    //在 JavaScript 中，构造器其实就是一个普通的函数。当使用 new 操作符 来作用这个函数时，它就可以被称为构造方法（构造函数）
    //hasOwnProperty和Object.keys()是 JavaScript 中处理属性并且不会遍历原型链的方法。
  })();
  {
    //STAR
    //不要随意扩展原生对象的原型,除非你希望支持JavaScript引擎的新特性
    //[四个拓展原型链的方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#%E6%80%BB%E7%BB%93%EF%BC%9A4_%E4%B8%AA%E7%94%A8%E4%BA%8E%E6%8B%93%E5%B1%95%E5%8E%9F%E5%9E%8B%E9%93%BE%E7%9A%84%E6%96%B9%E6%B3%95)
  }
}
{
  (function JSON_JS() {
    let jsonStr = '{"userName": "tiu","userAge": 26,"isMale": true}';
    let json = JSON.parse(jsonStr); //?
    let str = JSON.stringify(json); //?
  })();
}
