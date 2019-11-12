function debounce(fn, wait) {
  let timestamp = null, timer = null, context;
  return function(...args) {
    timestamp = +new Date();
    context = this;
    function later() {
      const last = (+new Date()) - timestamp;
      if (last < wait && last > 0) {
        clearTimeout(timer);
        timer = setTimeout(later, wait - last);
      } else {
        fn.call(context, ...args);
        clearTimeout(timer);
      }
    }
    if (!timer) {
      timer = setTimeout(later, wait);
    }

  };
}

module.exports = debounce