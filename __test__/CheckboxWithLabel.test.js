import React, {createRef} from 'react'

import * as TestUtils from 'react-dom/test-utils'
import CheckboxWithLabel from '../src/CheckboxWithLabel'


it('CheckboxWithLabel changes the text after click', () => {
  const checkboxLabelRef = createRef()
  const checkboxInputRef = createRef()
  TestUtils.renderIntoDocument(
    <CheckboxWithLabel
      labelRef={checkboxLabelRef}
      inputRef={checkboxInputRef}
      labelOn="On"
      labelOff="Off"
    >
    </CheckboxWithLabel>
  )

  const labelNode = checkboxLabelRef.current
  const inputNode = checkboxInputRef.current

  expect(labelNode.textContent).toEqual('Off')
  TestUtils.Simulate.change(inputNode)
  expect(labelNode.textContent).toEqual('On')
})

