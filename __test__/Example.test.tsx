import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Example from '../src/Example';

configure({ adapter: new Adapter() });

test('<Example>', () => {
    const example = mount(<Example/>);
    expect(example).toMatchSnapshot({});
    expect(example.html()).toBe('<div>Example</div>');
})