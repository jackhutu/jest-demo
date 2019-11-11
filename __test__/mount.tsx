import React from 'react'
import Enzyme from './utils/enzyme_config';
import Example from '../src/EnzymeExample';

const {mount}=Enzyme
// 完全渲染mount
// mount渲染用于将React组件加载为真实DOM节点。然而，真实DOM需要一个浏览器环境，为了解决这个问题，我们可以用到jsdom，也就是说我们可以用jsdom模拟一个浏览器环境去加载真实的DOM节点。
// jest 自带jsdom
describe('Enzyme mount的DOM渲染（Full DOM Rendering）中', function () {
  it('Example组件中按钮的名字为子组件Sub中span的值', function () {
    const name='按钮名'
    let app = mount(<Example text={name} />)

    const buttonObj=app.find('button')
    const spanObj=app.find('span')

    console.info(`查找到button的个数：${buttonObj.length}`)
    console.info(`查找到span的个数：${spanObj.length}`)

   buttonObj.text(),spanObj.text()
  })
})