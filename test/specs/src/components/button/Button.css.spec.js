import test from 'ava';
import * as testUtilities from 'test/helpers/utilities';

import * as component from 'src/components/Button/Button';

test('generateBaseStyles generated the correct styles', (tester) => {
  const props = {};

  tester.snapshot(testUtilities.cleanCss(component.generateBaseStyles(props)));
});

test('generateBaseStyles generated the correct styles for pill', (tester) => {
  const props = {
    isPill: true,
  };

  tester.snapshot(testUtilities.cleanCss(component.generateBaseStyles(props)));
});

test('hoverStyles generated no styles for link style type', (tester) => {
  const props = {
    styleType: 'link',
  };

  tester.snapshot(component.hoverStyles(props), '');
});

test('hoverStyles generated the correct styles for default style type', (tester) => {
  const props = {};

  tester.snapshot(testUtilities.cleanCss(component.hoverStyles(props)));
});

test('hoverStyles generated the correct styles for success style type', (tester) => {
  const props = {
    styleType: 'success',
  };

  tester.snapshot(testUtilities.cleanCss(component.hoverStyles(props)));
});

test('hoverStyles generated the correct styles for info style type', (tester) => {
  const props = {
    styleType: 'info',
  };

  tester.snapshot(testUtilities.cleanCss(component.hoverStyles(props)));
});

test('hoverStyles generated the correct styles for warning style type', (tester) => {
  const props = {
    styleType: 'warning',
  };

  tester.snapshot(testUtilities.cleanCss(component.hoverStyles(props)));
});

test('hoverStyles generated the correct styles for danger style type', (tester) => {
  const props = {
    styleType: 'danger',
  };

  tester.snapshot(testUtilities.cleanCss(component.hoverStyles(props)));
});

test('fillStyles generated no styles when style type is link', (tester) => {
  const props = {
    styleType: 'link',
  };

  tester.is(component.fillStyles(props), '');
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

test('thinStyles generated no styles when element is not thin', (tester) => {
  const props = {
    isThin: false,
  };

  tester.is(component.thinStyles(props), '');
});

test('thinStyles generated the correct styles for link style type', (tester) => {
  const props = {
    styleType: 'link',
    isThin: true,
  };

  tester.snapshot(testUtilities.cleanCss(component.thinStyles(props)));
});

test('thinStyles generated the correct styles for default style type', (tester) => {
  const props = {
    isThin: true,
  };

  tester.snapshot(testUtilities.cleanCss(component.thinStyles(props)));
});

test('thinStyles generated the correct styles for success style type', (tester) => {
  const props = {
    styleType: 'success',
    isThin: true,
  };

  tester.snapshot(testUtilities.cleanCss(component.thinStyles(props)));
});

test('thinStyles generated the correct styles for info style type', (tester) => {
  const props = {
    styleType: 'info',
    isThin: true,
  };

  tester.snapshot(testUtilities.cleanCss(component.thinStyles(props)));
});

test('thinStyles generated the correct styles for warning style type', (tester) => {
  const props = {
    styleType: 'warning',
    isThin: true,
  };

  tester.snapshot(testUtilities.cleanCss(component.thinStyles(props)));
});

test('thinStyles generated the correct styles for danger style type', (tester) => {
  const props = {
    styleType: 'danger',
    isThin: true,
  };

  tester.snapshot(testUtilities.cleanCss(component.thinStyles(props)));
});

test('linkStyles generated no styles when not a link style type', (tester) => {
  const props = {};

  tester.is(component.linkStyles(props), '');
});

test('linkStyles generated the correct styles for link style type', (tester) => {
  const props = {
    styleType: 'link',
  };

  tester.snapshot(testUtilities.cleanCss(component.linkStyles(props)));
});
