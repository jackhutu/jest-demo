import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, fireEvent, findByText } from '@testing-library/react';
import TestAsync from '../TestAsync'

afterEach(cleanup);
  // 测试异步waitFor/ findBy*
  it('increments counter after 0.5s', async () => {
    const { getByTestId, getByText } = render(<TestAsync />); 

    fireEvent.click(getByTestId('button-up'))

    await(()=>expect(findByText('1')).toHaveTextContent('1')) 

});