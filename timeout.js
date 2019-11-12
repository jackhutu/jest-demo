function getDouble(val, callback) {
  if(val < 0) {
    return;
  }
  setTimeout(() => {
    callback(val * val);
  }, 100);
};

module.exports = getDouble;
