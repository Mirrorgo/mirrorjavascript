/**
 * @param {number[][]} triangle
 * @return {number}
 */
//三角形 triangle ，找出自顶向下的最小路径和。
var minimumTotal = function (triangle) {
  //how快速创建一个空的二维数组
  let store = triangle.map(() => []);
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
