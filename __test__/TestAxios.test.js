import React from 'react'
import "@testing-library/jest-dom/extend-expect";
import { render, waitFor, fireEvent, screen } from '@testing-library/react'
import axiosMock from 'axios'
import TestAxios from '../TestAxios'

/**
 * 这个测试用例有点不同，因为我们必须处理HTTP请求。为此，我们必须在jest.mock('axios')的帮助下模拟axios请求。

现在，我们可以使用axiosMock并对其应用get()方法。最后，我们将使用Jest函数mockResolvedValueOnce()来传递模拟数据作为参数。

现在，对于第二个测试，我们可以单击按钮来获取数据并使用async/await来解析它。现在我们要测试三件事:

如果HTTP请求已经正确完成
如果使用url完成了HTTP请求
如果获取的数据符合期望。
对于第一个测试，我们只检查加载消息在没有数据要显示时是否显示。


 */
jest.mock('axios')

it('should display a loading text', () => {

 const { getByTestId } = render(<TestAxios />)

  expect(getByTestId('loading')).toHaveTextContent('Loading...')
})

it('should load and display the data', async () => {
  const url = '/greeting'
  const { findByTestId,getByTestId } = render(<TestAxios url={url} />)

  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: 'hello there' },
  })

  fireEvent.click(getByTestId('fetch-data'))

  const greetingData = await waitFor(() => getByTestId('show-data'))

  expect(axiosMock.get).toHaveBeenCalledTimes(1)
  expect(axiosMock.get).toHaveBeenCalledWith(url)
  expect(greetingData).toHaveTextContent('hello there')

})