import sum from './sum'
import func from './func'

test('adds 1 + 2 to equal 3', ()=> {
  expect(sum(1,2)).toBe(3)
})

// 常用的几个Jest断言
// .not
test('不等于', () =>{
  expect(sum(2,2)).not.toBe(3)
})

// .toEqual
test('恒等于', ()=>{
  expect(sum(2,2)).toEqual(4)
})


test('getAuthor()返回的对象深度相等', () => {
  expect(func.getAuthor()).toEqual(func.getAuthor());
})

test('getAuthor()返回的对象内存地址不同', () => {
  expect(func.getAuthor()).not.toBe(func.getAuthor());
})
// .toHaveLength 测试字符串和数组类型的长度是否满足预期。
test('getIntArray(3)返回的数组长度应该为3', () => {
  expect(func.getIntArray(3)).toHaveLength(3);
})
// .toThrow测试方法是否按照预期抛出异常
test('getIntArray(3.3)应该抛出错误', () => {
  function getIntArrayWrapFn() {
    func.getIntArray(3.3);
  }
  expect(getIntArrayWrapFn).toThrow('"getIntArray"只接受整数类型的参数');
})
//.toMatch传入一个正则表达式，它允许我们用来进行字符串类型的正则匹配。
test('getAuthor().name应该包含"hu"这个姓氏', () => {
  expect(func.getAuthor().name).toMatch(/hu/i);
})

