import React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import * as component from 'src/components/Button/Button';

const Button = component.Button;

test('render properly with default props', (tester) => {
  const wrapper = shallow(<Button />);

  tester.snapshot(toJson(wrapper));
});

test('render properly with passed in props', (tester) => {
  const props = {
    isThin: true,
    isPill: true,
  };
  const wrapper = shallow(<Button {...props}>button</Button>);

  tester.snapshot(toJson(wrapper));
});
