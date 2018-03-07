import React from 'react';
import test from 'ava';

import * as componentUtils from 'src/utils/component';

test('childCountExact should not throw error when correct children count given', (tester) => {
  try {
    componentUtils.childCountExact([<span key="1" />], 1, 'TEST');

    tester.pass('error not thrown');
  } catch (error) {
    tester.fail('error should not have been thrown');
  }
});

test('childCountExact should throw error when incorrect children count given', (tester) => {
  const children = [<span key="1" />];
  const expectedCount = 2;
  const identifier = 'TEST';

  try {
    componentUtils.childCountExact(children, expectedCount, identifier);

    tester.pass('error not thrown');
  } catch (error) {
    tester.is(error.message, `${identifier} expected ${expectedCount} children but got ${children.length}`);
  }
});

test('childCountRange should not throw error when correct children count given', (tester) => {
  try {
    componentUtils.childCountRange([<span key="1" />], 0, 2, 'TEST');

    tester.pass('error not thrown');
  } catch (error) {
    tester.fail('error should not have been thrown');
  }
});

test('childCountRange should not throw error when minimum children count given', (tester) => {
  try {
    componentUtils.childCountRange([<span key="1" />], 1, 2, 'TEST');

    tester.pass('error not thrown');
  } catch (error) {
    tester.fail('error should not have been thrown');
  }
});

test('childCountRange should not throw error when maximum children count given', (tester) => {
  try {
    componentUtils.childCountRange([<span key="1" />], 0, 1, 'TEST');

    tester.pass('error not thrown');
  } catch (error) {
    tester.fail('error should not have been thrown');
  }
});

test('childCountRange should throw error when children is below expected', (tester) => {
  const children = [<span key="1" />];
  const expectedMinimum = 2;
  const expectedMaximum = 4;
  const identifier = 'TEST';

  try {
    componentUtils.childCountRange(children, expectedMinimum, expectedMaximum, identifier);

    tester.pass('error not thrown');
  } catch (error) {
    tester.is(
      error.message,
      `${identifier} expected between ${expectedMinimum} and ${expectedMaximum} children but got ${children.length}`
    );
  }
});

test('childCountRange should throw error when children is above expected', (tester) => {
  const children = [<span key="1" />, <span key="2" />, <span key="3" />];
  const expectedMinimum = 0;
  const expectedMaximum = 2;
  const identifier = 'TEST';

  try {
    componentUtils.childCountRange(children, expectedMinimum, expectedMaximum, identifier);

    tester.pass('error not thrown');
  } catch (error) {
    tester.is(
      error.message,
      `${identifier} expected between ${expectedMinimum} and ${expectedMaximum} children but got ${children.length}`
    );
  }
});
