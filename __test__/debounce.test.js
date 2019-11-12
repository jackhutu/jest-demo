const debounce = require('../src/debounce')
const MockDate = require('mockdate')
var now = +new Date();
function fastforward(time) {
  now += time;
  MockDate.set(now);
  jest.runTimersToTime(time);
}
//mockdate 通过修改全局的 Date 类，达到控制 Date 的时间的目的。
//在 mock timer 的帮助下，我们可以测试在实际使用时可能会用到很长时间间隔定时器的模块，例如一个跨天的倒计时模块。它可以方便地让测试覆盖到代码的每一个分支。
describe('debounce', function() {
  it('should be called after 100 ms', function() {
    const mockFn = jest.fn();
    const run = debounce(mockFn, 100);
    jest.useFakeTimers();

    run();

    fastforward(50);   // 第 50 ms
    run();
    expect(mockFn).not.toHaveBeenCalled();

    fastforward(50);   // 第 100 ms
    expect(mockFn).not.toHaveBeenCalled();

    fastforward(50);   // 第 150 ms
    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.useRealTimers();
    MockDate.reset();
  });
});

// 没有mockdate测试失败
// describe('debounce', function() {
//   it('should be called after 100 ms', function() {
//     const mockFn = jest.fn();
//     const run = debounce(mockFn, 100);
//     jest.useFakeTimers();

//     run();

//     jest.runTimersToTime(50);   // 第 50 ms
//     run();
//     expect(mockFn).not.toHaveBeenCalled();

//     jest.runTimersToTime(50);   // 第 100 ms
//     expect(mockFn).not.toHaveBeenCalled();

//     jest.runTimersToTime(50);   // 第 150 ms
//     expect(mockFn).toHaveBeenCalledTimes(1);

//     jest.useRealTimers();
//   });
// });