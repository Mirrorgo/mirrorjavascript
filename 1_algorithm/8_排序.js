let input = [99, 0, 2, 4, 1, 6, 8, 13, 66, 2];
{
  //一般实际开发中
  console.log([...input].sort((a, b) => a - b));
}
{
  (function bubbleSort(inp) {
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
  //选择排序:范围内选择一个最小的
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
  const nums = [...inp];
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
{
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
}

console.log(input, "原数组");
