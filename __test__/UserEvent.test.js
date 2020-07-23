import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

test('double click', () => {
  const onChange = jest.fn()
  render(<input type="checkbox" data-testid="checkbox" id="checkbox" onChange={onChange} />)
  const checkbox = screen.getByTestId('checkbox')
  userEvent.dblClick(checkbox)
  expect(onChange).toHaveBeenCalledTimes(2)
  expect(checkbox).toHaveProperty('checked', false)
})

test('type', () => {
  render(<textarea />)

  userEvent.type(screen.getByRole('textbox'), 'Hello,{enter}World!')
  expect(screen.getByRole('textbox')).toHaveValue('Hello,\nWorld!')
})