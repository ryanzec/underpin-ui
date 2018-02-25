import test from 'ava';
import * as testUtilities from 'test/helpers/utilities';

import * as component from 'src/components/Button/GroupedButton';

test('baseContainerStyles generated the correct styles', (tester) => {
  tester.snapshot(testUtilities.cleanCss(component.baseContainerStyles()));
});
