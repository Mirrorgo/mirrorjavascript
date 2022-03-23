//https://leetcode-cn.com/problems/container-with-most-water/
//注意官方题解:https://leetcode-cn.com/problems/container-with-most-water/solution/sheng-zui-duo-shui-de-rong-qi-by-leetcode-solution/
var maxArea = function (height) {
  arr = height;
  let area = 0,
    i = 0,
    j = arr.length - 1;
  while (i < j) {
    if (arr[i] < arr[j]) {
      area = area < arr[i] * (j - i) ? arr[i] * (j - i) : area;
      i++;
    } else {
      area = area < arr[j] * (j - i) ? arr[j] * (j - i) : area;
      j--;
    }
  }
  return area;
};
