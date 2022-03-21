(function 实现防抖() {
  function debounce(fn, delay) {
    let timer = null;
    return function () {
      if (timer !== null) clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...arguments);
        timer = null;
      }, delay);
    };
  } //想一个比较好的测试debounce的方法👇
  //window.onscroll = debounce(()=>console.log('123'),500)
})();
(function 实现节流() {
  function throttle(fn, delay) {
    let timer = null;
    return function () {
      if (timer !== null) return;
      timer = setTimeout(() => {
        fn(...arguments);
        console.log(timer);
        timer = null; //👈很重要
      }, delay);
    };
  }
})();
{
  function throttle(fn, delay) {
    let flag = true;
    return function () {
      if (flag) {
        setTimeout(() => {
          fn.call(this, ...arguments);
        }, delay);
      }
      flag = false;
    };
  }
}
