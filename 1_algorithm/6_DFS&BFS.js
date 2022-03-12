//有点像树的遍历,但是应用更广,这是一种思想
//深度优先 类似栈
//广度优先 类似队列
// https://juejin.cn/book/6844733800300150797/section/6844733800358887438
const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
    },
    right: {
      val: "E",
    },
  },
  right: {
    val: "C",
    right: {
      val: "F",
    },
  },
};
{
  //先序遍历 == DFS
  const resultOfPreOrder = [];
  const preOrder = function preOrder(node) {
    if (!node) return;
    resultOfPreOrder.push(node.val);
    preOrder(node.left);
    preOrder(node.right);
  };
  preOrder(root);
  console.log(resultOfPreOrder, "preOrder & dfs");
}
{
  const resultOfBFS = [];
  const BFS = (node) => {
    const queue = [];
    queue.push(node);
    while (queue.length !== 0) {
      const top = queue.shift();
      resultOfBFS.push(top.val);
      if (top.left) queue.push(top.left);
      if (top.right) queue.push(top.right);
    }
  };
  BFS(root);
  console.log(resultOfBFS, "bfs");
}
