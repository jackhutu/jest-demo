import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { act } from 'react-dom/test-utils';

import SettimeCount from '../src/SettimeCount'

configure({adapter: new Adapter()})
// 注入 faker timers
jest.useFakeTimers();

test('Count', ()=>{
  const countComponent = mount(<SettimeCount />)
  expect(countComponent.find('span').text()).toBe('0')
  act(()=>{
    // 等待 1000ms
    jest.advanceTimersByTime(1000)
  })
  expect(countComponent.find('span').text()).toBe('1')
})