var coinChange = function (coins, amount) {
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