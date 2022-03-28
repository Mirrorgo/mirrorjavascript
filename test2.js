class User {
  constructor(name) {
    // 调用 setter
    // this.任意内容 = name;
    this.name = name; //? 问segfault
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
console.log(user);
console.log(user.name); // John
console.log(user);
user = new User(""); // Name is too short.
console.log(user); //User {}