{
  const fb1 = function fb(n) {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    return fb(n - 2) + fb(n - 1);
  };
  //❌太浪费啦
}
{
  const arr = [];
  const fb2 = function fb(n) {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    if (arr[n]) {
      // 防止重复的递归
      return arr[n];
    } else {
      arr[n] = fb(n - 1) + fb(n - 2);
    }
    return arr[n];
  };
}
