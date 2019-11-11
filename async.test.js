import asyncFunc from './async'

test('fetchUser() 可以请求到一个含有name属性值为Leanne Graham的对象', () => {
  // 确保在异步的测试用例中，有几个断言会在回调函数中被执行。这在进行异步代码的测试中十分有效。
  expect.assertions(1);
  return asyncFunc.fetchUser()
    .then(data => {
      expect(data.name).toBe('Leanne Graham');
    });
})