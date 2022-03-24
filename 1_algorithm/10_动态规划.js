//这样的问题，往往可以用动态规划进行求解（这个结论大家先记下来，后面我们会有很多验证它的机会）👇
//!. 要求你给出达成某个目的的解法个数
//2. 不要求你给出每一种解法对应的具体路径

(function 找硬币() {
  //题目描述：给定不同面额的硬币 coins 和一个总金额 amount。
  //编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
  // minCount(coins.pop(),a-c[0])
})();

const coinChange = (function () {})(
  /* var coinChange = function (coins, amount) {
  if (Math.min(...coins) > amount) return -1;
  function minCoin(a) {
    if (coins.includes(a)) return 1;
    return (
      Math.min(
        ...coins.map((cur, idx) => {
          if (a > cur) {
            return minCoin(a - cur);
          }
        })
      ) + 1
    );
  }
  return minCoin(amount);
  // minCoin(a) =Math.min(minCoin(a-c[0]),) +1
  // minCoin(a) = Math.min(...coins.map((cur)=>minCoin(a-cur)) )+1
};

let coins = [1, 2, 5],
  amount = 11;
console.log(coinChange(coins, amount)); */

  function _0_1背包问题() {
    /* 有 n 件物品，物品体积用一个名为 w 的数组存起来，
物品的价值用一个名为 value 的数组存起来；
每件物品的体积用 w[i] 来表示，每件物品的价值用 value[i] 来表示。
现在有一个容量为 c 的背包，问你如何选取物品放入背包，
才能使得背包内的物品总价值最大？
注意：每种物品都只有1件
*/
  }
)();
