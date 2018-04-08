import test from 'ava';

import * as buttonCss from 'src/components/Button/internal/buttonCss';

test('variables are correct', (tester) => {
  tester.snapshot(buttonCss.variables);
});
