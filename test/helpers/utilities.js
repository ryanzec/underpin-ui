import sass from 'node-sass';
import isArray from 'lodash/isArray';

export const cleanCss = (css) => {
  const cssString = isArray(css) ? css.join(' ') : css;
  const results = sass.renderSync({
    data: `.test{${cssString}}`,
    outputStyle: 'expanded',
  });

  return `\n${results.css.toString()}`;
};
