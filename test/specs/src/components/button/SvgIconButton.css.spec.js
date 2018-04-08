import test from 'ava';
import * as testUtilities from 'test/helpers/utilities';

import * as component from 'src/components/Button/SvgIconButton';

test('baseContainerStyles generated the correct styles', (tester) => {
  tester.snapshot(testUtilities.cleanCss(component.baseContainerStyles()));
});

test('fillStyles generated the correct styles for link style type', (tester) => {
  const props = {
    styleType: 'link',
  };

  tester.snapshot(testUtilities.cleanCss(component.fillStyles(props)));
});

test('fillStyles generated the correct styles for default style type', (tester) => {
  const props = {};

  tester.snapshot(testUtilities.cleanCss(component.fillStyles(props)));
});

test('fillStyles generated the correct styles for success style type', (tester) => {
  const props = {
    styleType: 'success',
  };

  tester.snapshot(testUtilities.cleanCss(component.fillStyles(props)));
});

test('fillStyles generated the correct styles for info style type', (tester) => {
  const props = {
    styleType: 'info',
  };

  tester.snapshot(testUtilities.cleanCss(component.fillStyles(props)));
});

test('fillStyles generated the correct styles for warning style type', (tester) => {
  const props = {
    styleType: 'warning',
  };

  tester.snapshot(testUtilities.cleanCss(component.fillStyles(props)));
});

test('fillStyles generated the correct styles for danger style type', (tester) => {
  const props = {
    styleType: 'danger',
  };

  tester.snapshot(testUtilities.cleanCss(component.fillStyles(props)));
});
