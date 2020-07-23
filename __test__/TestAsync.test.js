import '@testing-library/jest-dom'
import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, fireEvent, findByText,screen, waitFor } from '@testing-library/react';
import TestAsync from '../TestAsync'

afterEach(cleanup);
  // 测试异步waitFor/ findBy*
  it('increments counter after 0.5s',  async () => {
    render(<TestAsync />); 

    fireEvent.click(screen.getByTestId('button-up'))
    const counter = await waitFor(()=>screen.getByText('1'))
    expect(counter).toHaveTextContent('1')
});