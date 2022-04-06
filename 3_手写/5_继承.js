//es5继承
{
  // 创建一个父类
  function Parent() {}
  Parent.prototype.getName = function () {
    return "沐华";
  };
  // 子类
  function Child() {}

  // 方式一
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child; // 重新指定 constructor
  // 方式二
  Child.prototype = Object.create(Parent.prototype, {
    constructor: {
      value: Child,
      writable: true, // 属性能不能修改
      enumerable: true, // 属性能不能枚举(可遍历性)，比如在 for in/Object.keys/JSON.stringify
      configurable: true, // 属性能不能修改属性描述对象和能否删除
    },
  });

  console.log(new Child().getName); // 沐华
}
//es6继承
{
  // 创建一个父类
  class Parent {
    constructor(props) {
      this.name = "沐华";
    }
  }
  // 创建一个继承自父类的子类
  class Child extends Parent {
    // props是继承过来的属性， myAttr是自己的属性
    constructor(props, myAttr) {
      // 调用父类的构造函数，相当于获得父类的this指向
      super(props);
    }
  }
  console.log(new Child().name); // 沐华
}
