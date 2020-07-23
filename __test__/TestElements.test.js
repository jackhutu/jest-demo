import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from '@testing-library/react';
import TestElements from '../TestElements'

afterEach(cleanup);
  // 测试DOM元素
  it('should equal to 0', () => {
    const { getByTestId } = render(<TestElements />); 
    expect(getByTestId('counter')).toHaveTextContent(0)
   });

   it('should be enabled', () => {
     //使用 getByTestId 选择必要的元素(根据 data-testid )并检查是否通过了测试。

    const { getByTestId } = render(<TestElements />);
    expect(getByTestId('button-up')).not.toHaveAttribute('disabled')
  });

  it('should be disabled', () => {
    const { getByTestId } = render(<TestElements />); 
    expect(getByTestId('button-down')).toBeDisabled()
  });