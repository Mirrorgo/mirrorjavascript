let input = [99, 0, 2, 4, 1, 6, 8, 13, 66, 2];
/* 面试中👇
基础排序算法：
* 冒泡排序
* 选择排序
* 插入排序
进阶排序算法
* 归并排序
* 快速排序
*/
{
  //一般实际开发中
  console.log([...input].sort((a, b) => a - b));
}
//比如Chrome V8中,出于对性能的考虑,sort方法使用了两种方案: 插入排序和快排.
//当目标数组长度小于10时，使用插入排序；反之，使用快排
{
  (function bubbleSort(inp) {
    //相邻比对, 大的后移, 每轮把一个最大的数字冒泡到数组末尾
    const nums = [...inp];
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = 0; j < nums.length - 1 - i; j++) {
        if (nums[j] > nums[j + 1])
          [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
    console.log(nums, "bubble");
  })(input);
}
(function bubbleSort(inp) {
  const nums = [...inp];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  console.log(nums, "这不是冒泡");
})(input);

(function selectOrder(inp) {
  //选择排序:范围内选择一个最小的,放在最前面
  const nums = [...inp];
  for (let i = 0; i < nums.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[minIdx] > nums[j]) minIdx = j;
    }
    if (minIdx !== i) [nums[minIdx], nums[i]] = [nums[i], nums[minIdx]];
  }
  console.log(nums, "select");
})(input);

(function insertOrder(inp) {
  // 插入排序
  /* 
  核心思想:"找到元素在它前面那个序列中的正确位置"
  具体来说，插入排序所有的操作都基于一个这样的前提：当前元素前面的序列是有序的。
  基于这个前提，从后往前去寻找当前元素在前面那个序列里的正确位置 
  */
  const nums = [...inp];
  for (let i = 1; i < nums.length; i++) {
    let j = i;
    while (j > 0 && nums[j - 1] > nums[i]) {
      j--;
    }
    nums.splice(j, 0, ...nums.splice(i, 1));
  }
  console.log(nums, "insert");
})(input);
//---------------
(function mergeSort(inp) {
  //归并排序
  const nums = [...inp];
  const ms = (group) => {
    if (group.length === 1) return group;
    if (group.length === 2) {
      if (group[0] > group[1]) [group[1], group[0]] = [group[0], group[1]];
      return group;
    }
    const mid = Math.floor(group.length / 2);
    const left = ms(group.slice(0, mid));
    const right = ms(group.slice(mid, group.length));
    return mergeArray(left, right);
  };
  console.log(ms(nums), "merge");
  function mergeArray(left, right) {
    let p1 = 0,
      p2 = 0;
    const res = [];
    while (p1 < left.length && p2 < right.length) {
      if (left[p1] < right[p2]) {
        res.push(left[p1]);
        p1++;
      } else {
        res.push(right[p2]);
        p2++;
      }
    }
    if (p1 === left.length) return res.concat(right.slice(p2));
    else return res.concat(left.slice(p1));
  }
})(input);

function quickSort(nums) {
  if (nums.length <= 1) return nums;
  const left = [],
    right = [];
  let pivot = Math.floor(nums.length / 2);
  for (let i = 0; i < nums.length; i++) {
    if (i === pivot) continue;
    if (nums[i] < nums[pivot]) left.push(nums[i]);
    else right.push(nums[i]);
  }
  return quickSort(left).concat(nums[pivot], quickSort(right));
}
console.log(quickSort(input), "quick");

// merge类似自底向上, quick是自顶向下

console.log(input, "原数组");
