export default sort;
//快排,冒泡,选择排序
//https://leetcode-cn.com/circle/discuss/SVKmhR/
/**
 * --- 测试用例 ---
 *
 * 输入：[1, 34, 5, 76, 8, 6, 9, 7, 6, 3]
 * 输出：[1, 3, 5, 6, 6, 7, 8, 9, 34, 76]
 *
 * --- 说明 ---
 *
 * 思考：快速排序是稳定的吗？
 * 解答：base 的每次选择，会导致快排是不稳定排序。
 */
const input = [1, 34, 5, 76, 8, 6, 9, 7, 6, 3];
console.log(quickSort(input));
function quickSort(input) {
  if (input.length < 2) {
    return input;
  } else {
    var left = [];
    var right = [];
    var pivot = Math.floor(input.length / 2); // Math.floor 向下取整
    var base = input.splice(pivot, 1)[0];
    for (let i = 0; i < input.length; i++) {
      if (input[i] < base) {
        left.push(input[i]);
      } else {
        right.push(input[i]);
      }
    }
  }
  return quickSort(left).concat([base], quickSort(right));
}
