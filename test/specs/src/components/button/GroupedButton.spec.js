import React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import * as component from 'src/components/Button/GroupedButton';

const GroupedButton = component.GroupedButton;

test('render properly with default props', (tester) => {
  const wrapper = shallow(<GroupedButton>test</GroupedButton>);

  tester.snapshot(toJson(wrapper));
});

test('render properly passing the props through', (tester) => {
  const props = {
    isPill: true,
    isThin: true,
    styleType: 'danger',
  };
  const wrapper = shallow(<GroupedButton {...props}>test</GroupedButton>);

  tester.snapshot(toJson(wrapper));
});
