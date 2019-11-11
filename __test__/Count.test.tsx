import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Count from '../src/Count'

configure({adapter: new Adapter()})


test('Count', ()=>{
  const countComponent = mount(<Count></Count>)
  expect(countComponent.find('span').text()).toBe('0')

  countComponent.find('button').simulate('click')
  expect(countComponent.find('span').text()).toBe('1')
})