// Arrays
{
  // 如果指定的属性在指定的对象或其原型链中，则in 运算符返回true。
  let trees = new Array("redwood", "bay", "cedar", "oak", "maple");
  0 in trees; // ?
  3 in trees; // ?
  6 in trees; // ?
  "bay" in trees; // ?
  "length" in trees; // returns true (length is an Array property)
  // Custom objects
  var car = { make: "Honda", model: "Accord", year: 1998 };
  "make" in car; // returns true
  "model" in car; // returns true
}
{
  (function 扩展语法() {
    let parts = ["shoulder", "knees"];
    let lyrics = ["head", ...parts, "and", "toes"]; //?
    function f(x, y, z) {
      console.log("wow");
    }
    var args = [0, 1, 2];
    f(...args);
  })();
}
{
  (function 空值合并运算符() {
    //a ?? b 的结果是：
    // 如果 a 是已定义的，则结果为 a，
    // 如果 a 不是已定义的，则结果为 b
    //result = a ?? b ↔️ result =(a !==null&& a !==undefined)? a : b;
    const a = { a1: 0, a2: 1 };
    const b = { b1: 3, b2: 4 };
    const result1 = a.a1 ?? b.b1; //?
    const result2 = a.a0 ?? b.b1; //?
  })();
  {
    //原型是对象上特殊的属性，对象可以通过原型来共享数据,通过Object.create共享(更常见)
    {
      //Object.create
      const o = { foo: "foo" };
      const a = Object.create(o);
      const b = Object.create(o);
      a.bar = "bar1";
      b.bar = "bar2";
      console.log(a.foo, a.bar);
      console.log(b.foo, b.bar);
    }
    {
      //构造器的prototype
      function Foo(message = "foo") {
        this.foo = message;
      }
      Foo.prototype.bar = "bar";
      const a = new Foo("foo1"),
        b = new Foo("foo2");
      console.log(a.foo, b.foo);
      console.log(b.foo, b.bar);
    }
  }
}
