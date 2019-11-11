// jest.spyOn()方法同样创建一个mock函数，但是该mock函数不仅能够捕获函数的调用情况，还可以正常的执行被spy的函数。
// 实际上，jest.spyOn()是jest.fn()的语法糖，它创建了一个和被spy的函数具有相同内部代码的mock函数。


import events from './events';
import * as asyncFunc from './async';

test('使用jest.spyOn()监控asyncFunc.fetchUser被正常调用', async() => {
  expect.assertions(2);
  const spyFn = jest.spyOn(asyncFunc, 'fetchPostsList');
  await events.getPostList();
  expect(spyFn).toHaveBeenCalled();
  expect(spyFn).toHaveBeenCalledTimes(1);
})