const getDouble = require('./timeout')

jest.useFakeTimers();
const mockFn = jest.fn();
getDouble(10, mockFn);

test('timeout ', function(){
  expect(mockFn).not.toHaveBeenCalled()
  jest.runAllTimers();
  expect(mockFn).toHaveBeenCalledTimes(1);
  expect(mockFn).toHaveBeenCalledWith(100);
  jest.useRealTimers();
})
