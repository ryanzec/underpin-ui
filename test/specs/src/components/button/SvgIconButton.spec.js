import React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import * as component from 'src/components/Button/SvgIconButton';

const SvgIconButton = component.SvgIconButton;

test('render properly with default props', (tester) => {
  const props = {
    icon: 'test',
    isThin: true,
    isPill: true,
  };
  const wrapper = shallow(<SvgIconButton {...props}>Test</SvgIconButton>);

  tester.snapshot(toJson(wrapper));
});

test('render properly pssing the props through', (tester) => {
  const props = {
    icon: 'test',
    styleType: 'danger',
  };
  const wrapper = shallow(<SvgIconButton {...props}>Test</SvgIconButton>);

  tester.snapshot(toJson(wrapper));
});
