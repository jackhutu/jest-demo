// Jest 中的三个与 Mock 函数相关的API，分别是jest.fn()、jest.spyOn()、jest.mock()。
/**
 * Mock函数提供的以下三种特性，在我们写测试代码时十分有用：

捕获函数调用情况
设置函数返回值
改变函数的内部实现
 */
// 1. jest.fn()
// 默认情况fn()没有返回值, 返回undefined
test('测试jest.fn()调用', () => {
  let mockFn = jest.fn();
  let result = mockFn(1, 2, 3);

  // 断言mockFn的执行后返回undefined
  expect(result).toBeUndefined();
  // 断言mockFn被调用
  expect(mockFn).toBeCalled();
  // 断言mockFn被调用了一次
  expect(mockFn).toBeCalledTimes(1);
  // 断言mockFn传入的参数为1, 2, 3
  expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
})


// 设置fn的返回值
test('测试jest.fn()返回固定值', () => {
  let mockFn = jest.fn().mockReturnValue('default');
  // 断言mockFn执行后返回值为default
  expect(mockFn()).toBe('default');
})

// 设置fn内部实现
test('测试jest.fn()内部实现', () => {
  let mockFn = jest.fn((num1, num2) => {
    return num1 * num2;
  })
  // 断言mockFn执行后返回100
  expect(mockFn(10, 10)).toBe(100);
})

// 设置返回promise
test('测试jest.fn()返回Promise', async () => {
  let mockFn = jest.fn().mockResolvedValue('default');
  let result = await mockFn();
  // 断言mockFn通过await关键字执行后返回值为default
  expect(result).toBe('default');
  // 断言mockFn调用后返回的是Promise对象
  expect(Object.prototype.toString.call(mockFn())).toBe("[object Promise]");
})


import asyncFunc, {fetchPostsList} from './async.js'

test('fetchPostsList中的回调函数应该能够被调用', async () => {
  expect.assertions(1);
  let mockFn = jest.fn();
  await fetchPostsList(mockFn);

  // 断言mockFn被调用
  expect(mockFn).toBeCalled();
})


