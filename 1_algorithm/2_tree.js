//tree的demo
//TODO:一维数组转tree
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

(function 递归实现() {
  (function preOrder(root) {
    // 递归边界，root 为空
    if (!root) {
      //有的是写root === null,注意根据具体情况区分
      return;
    }
    // 输出当前遍历的结点值
    console.log("当前遍历的结点值是：", root.val);
    // 递归遍历左子树
    preOrder(root.left);
    // 递归遍历右子树
    preOrder(root.right);
  })(root);
  (function inOrder(root) {
    if (!root) {
      return;
    }
    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
  })(root);
  (function postOrder(root) {
    if (!root) return;
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.val);
  })(root);
});
(function 迭代实现() {
  (function preOrder(root) {
    const stack = [];
    let current = root;
    while (current || stack.length > 0) {
      while (current) {
        console.log(current.val);
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();
      current = current.right;
    }
  })(root);
  (function inOrder(root) {
    const stack = [];
    let current = root;
    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();
      console.log(current.val);
      current = current.right;
    }
  })(root);
  //TODO
  var postOrder = function (root) {
    const result = [];
    const stack = [];
    let last = null; // 标记上一个访问的节点
    let current = root;
    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      current = stack[stack.length - 1];
      if (!current.right || current.right == last) {
        current = stack.pop();
        result.push(current.val);
        last = current;
        current = null; // 继续弹栈
      } else {
        current = current.right;
      }
    }
    return result;
  };
})();
