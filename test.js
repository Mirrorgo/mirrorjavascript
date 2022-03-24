{
  let minimumTotal = function (triangle) {
    //how快速创建一个空的二维数组
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
  /* 
执行用时：68 ms
内存消耗：45.7 MB
*/
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

const input = ["join-reese", "harold-finch", "sameen-shaw"];
console.log(
  ((names) =>
    names.map((cur) => {
      formattedName = cur
        .split("-")
        .map((cur) => cur.charAt(0).toUpperCase() + cur.slice(1))
        .join(" ");
      return { name: `${formattedName}` };
    }))(input)
);
