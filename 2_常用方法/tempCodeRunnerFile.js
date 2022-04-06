const myType = function (type) {
    return Object.prototype.toString.call(type).slice(8, -1);
  };
  console.log(myType(new Array(1)));