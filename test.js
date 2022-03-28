// var readline = require("readline");
// process.stdin.setEncoding("utf-8");

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   prompt: "",
// });
// rl.prompt();

// var solveMeFirst = (a, b) => a + b;

// rl.on("line", function (data) {
//   let arr = data.split(" ");
//   if (arr && arr.length == 2) {
//     let c = solveMeFirst(+arr[0], +arr[1]);
//     process.stdout.write("" + c + "\n");
//   }
// });

// var readline = require("readline");
// process.stdin.setEncoding("utf-8");

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   prompt: "",
// });
// rl.prompt();

// var solveMeFirst = (a, b) => {
//   //TO fix是四舍五入,有坑
//   //求个十百位的简单方法
//   // var声明的变量是不是会挂载到window上? var和直接...=...有什么区别
//   // ES6百年以后产生的es5代码
//   let i = a;
//   const res = [];
//   while (i <= b) {
//     let num = "" + i;
//     let ge = num.charAt(2);
//     let shi = num.charAt(1);
//     let bai = num.charAt(0);
//     // if (i === 370) console.log(bai, shi, ge);
//     if (Math.pow(bai, 3) + Math.pow(shi, 3) + Math.pow(ge, 3) === i) {
//       res.push(i);
//     }
//     i++;
//   }
//   if (res.length === 0) return "no";
//   return res.join(" ");
// };

// rl.on("line", function (data) {
//   let arr = data.split(" ");
//   if (arr && arr.length == 2) {
//     let c = solveMeFirst(+arr[0], +arr[1]);
//     process.stdout.write("" + c + "\n");
//   }
// });

// var readline = require("readline");
// process.stdin.setEncoding("utf-8");

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   prompt: "",
// });
// rl.prompt();

// var solveMeFirst = (N) => {
//   //FIXME:为什么这么长?
//   let map = [1, 1];
//   function f(n) {
//     if (n < 2) return 1;
//     let res1, res2;
//     if (map[n - 1] === undefined) {
//       res1 = f(n - 1);
//       map[n - 1] = res1;
//     } else {
//       res1 = map[n - 1];
//     }
//     if (map[n - 2] === undefined) {
//       res2 = f(n - 2);
//       map[n - 2] = res2;
//     } else {
//       res2 = map[n - 2];
//     }
//     return res1 + res2;
//   }
//   return f(N);
// };

// rl.on("line", function (data) {
//   let c = solveMeFirst(+data);
//   process.stdout.write("" + c + "\n");
// });

//代金券
var readline = require("readline");
process.stdin.setEncoding("utf-8");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});
rl.prompt();

var solveMeFirst = (N) => {
  //FIXME:为什么这么长?
  let map = [1, 1];
  function f(n) {
    if (n < 2) return 1;
    let res1, res2;
    if (map[n - 1] === undefined) {
      res1 = f(n - 1);
      map[n - 1] = res1;
    } else {
      res1 = map[n - 1];
    }
    if (map[n - 2] === undefined) {
      res2 = f(n - 2);
      map[n - 2] = res2;
    } else {
      res2 = map[n - 2];
    }
    return res1 + res2;
  }
  return f(N);
};

rl.on("line", function (data) {
  let arr = data.split(" ");
  if (arr && arr.length == 2) {
    let c = solveMeFirst(+arr[0], +arr[1]);
    process.stdout.write("" + c + "\n");
  }
});

//⭐多行的输入输出怎么做
