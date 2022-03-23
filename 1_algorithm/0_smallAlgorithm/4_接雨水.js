/**
 * @param {number[]} height
 * @return {number}
 */

//当左边最大挡板＜右边最大挡板，左边向前挺近，
//最终值加上当前左最大挡板-当前左指针所指值（相当于左边只要不超过右边，右边最大挡板稳定兜底，左边无脑挺近累加）
// 大于则反之

var trap = function (height) {
  let end = 0;
  let l = 0,
    r = height.length - 1;
  let maxl = 0,
    maxr = 0;
  while (l < r) {
    maxl = Math.max(height[l], maxl);
    maxr = Math.max(height[r], maxr);
    if (maxl < maxr) {
      end += maxl - height[l];
      l++;
    } else {
      end += maxr - height[r];
      r--;
    }
  }
  return end;
};

/* 官方题解+👇
原来双指针同时开两个柱子接水。大家题解没说清楚，害得我也没看懂。 对于每一个柱子接的水，那么它能接的水=min(左右两边最高柱子）-当前柱子高度，这个公式没有问题。同样的，两根柱子要一起求接水，同样要知道它们左右两边最大值的较小值。

问题就在这，假设两柱子分别为 i，j。那么就有 iLeftMax,iRightMax,jLeftMx,jRightMax 这个变量。由于 j>i ，故 jLeftMax>=iLeftMax，iRigthMax>=jRightMax.

那么，如果 iLeftMax>jRightMax，则必有 jLeftMax >= jRightMax，所有我们能接 j 点的水。

如果 jRightMax>iLeftMax，则必有 iRightMax >= iLeftMax，所以我们能接 i 点的水。

而上面我们实际上只用到了 iLeftMax，jRightMax 两个变量，故我们维护这两个即可。（题解都没说清楚，就说个 LeftMax，RightMax，谁知道为什么就可以这么做了。)
*/
