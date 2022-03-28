{
  let minimumTotal = function (triangle) {
    let store = [];
    for (let i = 0; i < triangle.length; i++) {
      store[i] = [];
    }
    return minPath(0, 0);
    function minPath(i, j) {
      if (i === triangle.length - 1) return triangle[i][j];
      let min1, min2;
      if (store[i + 1][j] === undefined) {
        min1 = minPath(i + 1, j);
        store[i + 1][j] = min1;
      } else {
        min1 = store[i + 1][j];
      }
      if (store[i + 1][j + 1] === undefined) {
        min2 = minPath(i + 1, j + 1);
        store[i + 1][j + 1] = min2;
      } else {
        min2 = store[i + 1][j + 1];
      }
      return Math.min(min1 + triangle[i][j], min2 + triangle[i][j]);
    }
  };
}

{
  let minimumTotal = function (triangle) {
    let store = [];
    for (let i = 0; i < triangle.length; i++) {
      store[i] = [];
    }
    return minPath(0, 0);
    function minPath(i, j) {
      if (i === triangle.length - 1) return triangle[i][j];
      const getMin = (i, j) => {
        if (store[i][j] === undefined) store[i][j] = minPath(i, j);
        return store[i][j];
      };
      return Math.min(getMin(i + 1, j), getMin(i + 1, j + 1)) + triangle[i][j];
    }
  };
}
{
  let minimumTotal = function (triangle) {
    let store = [];
    for (let i = 0; i < triangle.length; i++) {
      store[i] = [];
    }
    return minPath(0, 0);
    function minPath(i, j) {
      if (i === triangle.length - 1) return triangle[i][j];
      const getMin = (i, j) => {
        if (store[i][j] === undefined) store[i][j] = minPath(i, j);
        return store[i][j];
      };
      return Math.min(getMin(i + 1, j), getMin(i + 1, j + 1)) + triangle[i][j];
    }
  };
}
{
  //  不需要额外的空间，直接在原三角数组里面维护状态
  let minimumTotal = function (triangle) {
    const n = triangle.length;
    if (n === 1) {
      return triangle[0][0];
    }
    // 从倒数第二行开始
    for (let i = n - 2; i >= 0; i--) {
      for (let j = 0; j <= i; j++) {
        triangle[i][j] =
          Math.min(triangle[i + 1][j + 1], triangle[i + 1][j]) + triangle[i][j];
      }
    }
    return triangle[0][0];
  };
}
