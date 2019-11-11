import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Message from '../src/Message';

configure({ adapter: new Adapter() });

test('Message', () => {
  const message = mount(<Message msg="消息" />)
  expect(message.html()).toBe('<div>消息</div>')

  message.setProps({msg: '更新消息'})
  expect(message.html()).toBe('<div>更新消息</div>')
})  