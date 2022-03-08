{
  let s = "Simon";
  // s.reversed(); //?
  // TypeError on line 1: s.reversed is not a function
  String.prototype.reversed = function () {
    var r = "";
    for (var i = this.length - 1; i >= 0; i--) {
      r += this[i];
    }
    return r;
  };
  console.log(s.reversed());
}
console.log("123".reversed());
