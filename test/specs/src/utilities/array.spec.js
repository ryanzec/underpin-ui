import test from 'ava';

import * as arrayUtils from 'src/utils/array';

test('toggleArrayValue should add value when not present', (tester) => {
  const expectedValue = ['test', 'test2', 'test3', 'test4'];

  tester.deepEqual(arrayUtils.toggleArrayValue(['test', 'test2', 'test3'], 'test4'), expectedValue);
});

test('toggleArrayValue should remove value when present', (tester) => {
  const expectedValue = ['test', 'test3'];

  tester.deepEqual(arrayUtils.toggleArrayValue(['test', 'test2', 'test3'], 'test2'), expectedValue);
});
