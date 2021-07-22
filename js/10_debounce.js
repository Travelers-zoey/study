/**
 * 防抖：在事件被触发n秒后再次执行回调，n秒内又被触发，则重新计时
 * @param {Function} fn 要执行的函数
 * @param {Number} wait 间隔的秒数
 * @returns
 */
function debounce(fn, wait) {
  let timer = null;
  return function () {
    let context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, wait);
  };
}

function test(num) {
  console.log(num + '哈哈哈哈' + Math.random());
}

//传参通过bind，bind返回的是函数，用其他的只会执行一次
// window.addEventListener("resize", debounce(test, 2000).bind(this, 999));

/**
 * 节流：在一个单位时间内，只能触发一次，如果触发多次，只生效一次
 * @param {Function} fn 要执行的函数
 * @param {Number} wait 单位时间
 * @returns
 */
function throttle(fn, wait) {
  let last = 0;
  return function() {
    let now = new Date().getTime();
    if(now - last > wait) {
      fn.apply(this, arguments);
      last = now;
    }
  }
}

window.addEventListener("resize", throttle(test, 2000).bind(this, 999));
