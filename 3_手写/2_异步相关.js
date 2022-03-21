(function 定时器() {
  //用setTimeout实现setInterval
  function mySetInterval(fn, time) {
    return function interval() {
      setTimeout(() => {
        fn();
        interval();
      }, time);
    };
  }
})();

// https://juejin.cn/post/7069805387490263047#comment
const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    // res("p1");
    rej("p1");
  }, 1000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    // res("p2");
    rej("p2");
  }, 2000);
});

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    // res("p3");
    rej("p3");
  }, 3000);
});
// Promise.all([p1, p2, p3]).then(console.log);
{
  //来源👉https://www.bilibili.com/video/BV1TA411t7Nh?spm_id_from=333.880.my_history.page.click
  let promiseAll = function (promises) {
    //TODO:需要兼容iterator? 👉https://zhuanlan.zhihu.com/p/362648760
    return new Promise((resolve, reject) => {
      const promiseResults = [];
      let resolvedCount = 0;
      promises.forEach((cur, idx) => {
        Promise.resolve(cur).then(
          (value) => {
            resolvedCount++;
            promiseResults[idx] = value;
            if (resolvedCount === promises.length)
              return resolve(promiseResults);
          },
          (reason) => {
            return reject(reason);
          }
        );
      });
    });
  };
  // promiseAll([p1, p2, p3]).then(console.log);
}
{
  let promiseRace = function (promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((cur, idx) => {
        Promise.resolve(cur).then(resolve, reject);
      });
    });
  };
  // promiseRace([p1, p2, p3]).then(console.log);
}
{
  let promiseAny = function (promises) {
    return new Promise((resolve, reject) => {
      const promiseResults = [];
      let rejectedCount = 0;
      promises.forEach((cur, idx) => {
        Promise.resolve(cur).then(
          (value) => {
            return resolve(value);
          },
          (reason) => {
            rejectedCount++;
            promiseResults[idx] = reason;
            if (rejectedCount === promises.length)
              return reject(promiseResults);
          }
        );
      });
    });
  };
  // promiseAny([p1, p2, p3]).then(console.log).catch(console.log);
  // promiseAny([p1, p2, p3]).then(console.log);
  promiseAny([p1, p2, p3]).catch(console.log);
}
