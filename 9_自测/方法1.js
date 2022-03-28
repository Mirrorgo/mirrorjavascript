let obj = { a: 0, b: 1 };
function A() {}
Object.getOwnPropertyNames(obj); //?

let a = new A();
Object.getPrototypeOf(a); //?
//相当于获取a.__proto__

A.prototype; //?
console.log(A); //[Function: A]

//class
class User {
  constructor() {}
}
console.log(User); //[class User]

//动态创建类
{
  function makeClass(phrase) {
    // 声明一个类并返回它
    return class {
      sayHi() {
        console.log(phrase);
      }
    };
  }
  // 创建一个新的类
  let User = makeClass("Hello");
  new User().sayHi(); // Hello
}

//
{
  class User {
    constructor(name) {
      // 调用 setter
      this.name = name;
    }
    get name() {
      return this._name;
    }
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  }
  let user = new User("John");
  console.log(user.name); // John
  user = new User(""); // Name is too short.
}
