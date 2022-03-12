//这里给大家一个思维工具：以后只要分析出重复的逻辑（排除掉类似数组遍历这种简单粗暴的重复），
//你都需要把递归从你的大脑内存里调度出来、将其列为“可以一试”的解法之一；
//只要想到递归，立刻回忆我们上一节讲的 DFS 思想、然后尝试套我们这一节末尾教给大家的解题模板。
//这个脑回路未必 100% 准确，但确实有极高的成功概率——题，是有规律的。这，就是规律之一
(function 全排列() {
  //STAR: 全排列
  const input = [1, 2, 3];
  const len = input.length;
  const cur = [];
  const res = [];
  const visited = {};
  (function dfs(nth) {
    if (nth === len) {
      //超出边界了
      res.push([...cur]);
      return;
    }
    for (let i = 0; i < len; i++) {
      if (!visited[input[i]]) {
        visited[input[i]] = 1; //used
        cur.push(input[i]);
        dfs(nth + 1);
        cur.pop();
        visited[input[i]] = 0;
      }
    }
  })(0);
  console.log(res);
})(); //TODO:深度优先也可以写,以后试试

{
  //My 全排列
  // const input = [1, 3, 4, 5, 7];
  const input = [1, 2, 3];
  let allOrder = (nums) => {
    const res = []; //结果
    const used = {};
    const path = [];
    const dfs = (depth) => {
      if (depth === nums.length) {
        res.push([...path]);
        return;
      }
      for (let i = 0; i < nums.length; i++) {
        if (!used[nums[i]]) {
          used[nums[i]] = 1;
          path.push(nums[i]);
          dfs(path.length);
          path.pop();
          used[nums[i]] = 0;
        }
      }
    };
    dfs(0);
    console.log(res, "my all order");
  };
  allOrder(input);
}
