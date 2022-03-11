(function 求差问题() {
  /* 
  给定一个整数数组 nums 和一个目标值 target，
  请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标
  */
  //STAR: 几乎所有的求和问题，都可以转化为求差问题
  const twoSum = function (nums, target) {
    const diff = {};
    for (let i = 0; i < nums.length; i++) {
      if (diff[target - nums[i]] !== undefined)
        return [diff[target - nums[i]], i];
      diff[nums[i]] = i;
    }
    return false;
  };

  const twoSum2 = (nums, target) => {
    let diff = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (diff.get(target - nums[i])) return [diff.get(target - nums[i]), i];
      diff.set(nums[i], i);
    }
  };
  const nums = [1, 3, 5, 3, 8, 10];
  const target = 13;
  console.log(twoSum(nums, target));
  console.log(twoSum2(nums, target));
})();
(function 合并数组() {
  //真题描述：
  //给你两个有序整数数组 nums1 和 nums2，
  //请你将 nums2 合并 nums1 放入result中，使 result 成为一个有序数组。
  const input1 = [1, 2, 3],
    m = 3,
    input2 = [2, 5, 6, 7],
    n = 4;
  //STAR: 双指针
  const merge = (input1, m, input2, n) => {
    let result = new Array(m + n);
    let idx = m + n - 1,
      idx1 = m - 1,
      idx2 = n - 1;
    while (idx1 >= 0 && idx2 >= 0) {
      debugger;
      if (input1[idx1] < input2[idx2]) {
        result[idx] = input2[idx2];
        idx2--;
      } else {
        result[idx] = input1[idx1];
        idx1--;
      }
      idx--;
    }
    for (let i = 0; i <= idx; i++) {
      result[i] = idx2 === -1 ? input1[i] : input2[i];
    }
    return result;
  };
  console.log(merge(input1, m, input2, n), "双指针");
})();
(function 三数求和() {
  //给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
  //使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组
  const input = [1, 3, 5, 2, 7, 3, 4, 8, 3, 9, 10];
  console.log(threeSum(input, 10), "threeSum");
  //STAR：
  //双指针法用在涉及求和、比大小类的数组题目里时，大前提往往是：
  //该数组必须有序。否则双指针根本无法帮助我们缩小定位的范围，压根没有意义
  function threeSum(nums, target) {
    //对撞指针
    let result = [];
    nums = nums.sort((a, b) => a - b);
    console.log("threeSumSorted:", nums);
    let len = nums.length;
    for (let i = 0; i < len - 2; i++) {
      let p1 = i + 1,
        p2 = len - 1;
      if (i > 0 && eq(nums, i, i - 1)) break;
      while (p1 < p2) {
        if (nums[i] + nums[p1] + nums[p2] < target) {
          p1++;
          while (eq(nums, p1, p1 + 1)) {
            p1++;
          }
        } else if (nums[i] + nums[p1] + nums[p2] > target) {
          p2--;
          while (eq(nums, p2, p2 - 1)) {
            p2--;
          }
        } else {
          result.push([nums[i], nums[p1], nums[p2]]);
          p1++, p2--;
          while (eq(nums, p1, p1 + 1)) {
            p1++;
          }
          while (eq(nums, p2, p2 - 1)) {
            p2--;
          }
        }
      }
    }
    function eq(nums, a, b) {
      if (nums[a] === nums[b]) return true;
      return false;
    }
    return result;
  }
})();
