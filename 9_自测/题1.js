(function 人名首字母转大写() {
  console.log(
    ((names) =>
      names.map((cur) => {
        formattedName = cur
          .split("-")
          .map((cur) => cur.charAt(0).toUpperCase() + cur.slice(1))
          .join(" ");
        return { name: `${formattedName}` };
      }))(["join-reese", "harold-finch", "sameen-shaw"]),
    `
👉[{ name: 'Join Reese' },{ name: 'Harold Finch' },{ name: 'Sameen Shaw' }]👈`
  );
});

{
  function fn() {
    console.log(this.name);
  }
  let obj = {
    name: "行星飞行",
    func: fn,
  };
  let obj1 = {
    name: "听风是风",
    o: obj,
  };
  obj1.o.func(); //行星飞行
}
