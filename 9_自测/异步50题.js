(function () {
  const promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
    console.log(2);
  });
  promise.then(() => {
    console.log(3);
  });
  console.log(4);
  //1 2 4 3
});
(function () {
  const promise = new Promise((resolve, reject) => {
    console.log(1);
    console.log(2);
  });
  promise.then(() => {
    console.log(3);
  });
  console.log(4);
  //1 2 4
});
(function () {
  const promise1 = new Promise((resolve, reject) => {
    console.log("promise1");
    resolve("resolve1");
  });
  const promise2 = promise1.then((res) => {
    console.log(res);
  });
  console.log("1", promise1);
  console.log("2", promise2);
  // 'promise1'
  // '1' Promise{<resolved>: 'resolve1'}
  // '2' Promise{<pending>}
  // 'resolve1'
});
(function () {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 1000);
  });
  const promise2 = promise1.then(() => {
    throw new Error("error!!!");
  });
  console.log("promise1", promise1);
  console.log("promise2", promise2);
  setTimeout(() => {
    console.log("promise1", promise1);
    console.log("promise2", promise2);
  }, 2000);
  // 'promise1' Promise{<pending>}
  // 'promise2' Promise{<pending>}
  // test5.html:102 Uncaught (in promise) Error: error!!! at test.html:102
  // 'promise1' Promise{<resolved>: "success"}
  // 'promise2' Promise{<rejected>: Error: error!!!}
});
(function () {
  const promise = new Promise((resolve, reject) => {
    reject("error");
    resolve("success2");
  });
  promise
    .then((res) => {
      console.log("then1: ", res);
    })
    .then((res) => {
      console.log("then2: ", res);
    })
    .catch((err) => {
      console.log("catch: ", err);
    })
    .then((res) => {
      console.log("then3: ", res);
    });
  // "catch: " "error"
  // "then3: " undefined
});
(function () {});
