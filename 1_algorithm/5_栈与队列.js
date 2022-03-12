//一个数组两层遍历，属于比较少见且高危的操作,这时应该思考有没有别的操作
(function 栈() {
  (function 有效括号() {
    //给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
    const leftToRight = {
      "(": ")",
      "[": "]",
      "{": "}",
    };
    const isValid = (string) => {
      if (!string) return true;
      if (string.length % 2 !== 0) return false;
      const stack = [];
      for (let i = 0; i < string.length; i++) {
        if (Object.keys(leftToRight).includes(string[i]))
          stack.push(leftToRight[string[i]]);
        else if (!stack.length || stack.pop() !== string[i]) return false;
      }
      return !stack.length;
    };
    console.log(isValid("(()){}"));
  })();
  (function 每日温度() {
    //根据每日气温列表，请重新生成一个列表，
    //对应位置的输出是需要再等待多久温度才会升高超过该日的天数。
    //如果之后都不会升高，请在该位置用 0 来代替
    const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
    const nextHigh = (inputs) => {};
  })();
  //TODO:
  //https://juejin.cn/book/6844733800300150797/section/6844733800354709511
})();
