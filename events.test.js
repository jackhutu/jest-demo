// 2. jest.mock()
// 在jest中如果想捕获函数的调用情况，则该函数必须被mock或者spy！

import events from './events';
import * as asyncFunc from './async.js'

jest.mock('./async.js');

test('mock 整个 async.js模块', async () => {
  expect.assertions(2);
  await events.getPostList();
  expect(asyncFunc.fetchPostsList).toHaveBeenCalled();
  expect(asyncFunc.fetchPostsList).toHaveBeenCalledTimes(1);
});
