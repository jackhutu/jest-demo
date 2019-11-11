import React from 'react'
import Enzyme from './utils/enzyme_config';
import Example from '../src/EnzymeExample';

const {render}=Enzyme
// 静态渲染render 
// render静态渲染，主要用于将React组件渲染成静态的HTML字符串，然后使用Cheerio这个库解析这段字符串，并返回一个Cheerio的实例对象，可以用来分析组件的html结构。针对前面的enzyme.js文件，我们的静态渲染测试的代码如下：
describe('Enzyme render test', function () {
  it('Example render', function () {
      const name='按钮名'
      let app = render(<Example text={name} />)

      const buttonObj=app.find('button')
      const spanObj=app.find('span')

      console.info(`查找到button的个数：${buttonObj.length}`)
      console.info(`查找到span的个数：${spanObj.length}`)

      buttonObj.text(),spanObj.text()
  })
})