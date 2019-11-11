import React from 'react'
import Enzyme from './utils/enzyme_config';
import Example from '../src/EnzymeExample';

const {shallow}=Enzyme

// Shallow Rendering用于将一个组件渲染成虚拟DOM对象，但是只渲染第一层，不渲染所有子组件，所以处理速度非常快。并且它不需要DOM环境，因为根本没有加载进DOM。
describe('Enzyme shallow', function () {
  it('Example component', function () {
      const name='按钮名'
      let app = shallow(<Example text={name} />)
      let btnName= app.find('button').text()
      console.log('button Name:'+btnName)
  })
})