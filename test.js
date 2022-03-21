//
// console.log(
//   new Promise((resolve, reject) => {
//     // resolve(1); //Promise { 1 }
//     // reject(2); //Promise { <rejected> 2 }
//     // throw 3; //Promise { <rejected> 3 }
//     // return 4; //Promise { <pending> }
//   })
// );
let o1 = {
  a: 1,
};
let o2 = {
  a: 2,
};
let o3 = {
  a: 3,
};

function fn(b, c) {
  console.log(this.a);
}

let fn1 = fn.bind(o1);
let fn2 = fn1.bind(o2);
let fn3 = fn2.bind(o3);
fn3(); //?
console.log(fn3);
