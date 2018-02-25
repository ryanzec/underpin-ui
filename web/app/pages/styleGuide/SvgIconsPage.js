import PropTypes from 'prop-types';
import React from 'react';

import CodeExample from 'app/react/components/CodeExample';

import DefaultExample from './assets/examples/SvgIcons/SvgIconsDefaultExample';
import StylesExample from './assets/examples/SvgIcons/SvgIconsStylesExample';
import IndicatorsExample from './assets/examples/SvgIcons/SvgIconsIndicatorsExample';

import {readFileSync} from 'fs';
import {join} from 'path';

const defaultExampleContent = readFileSync(
  join(__dirname, '/assets/examples/SvgIcons/SvgIconsDefaultExample.js'),
  'utf8'
);
const stylesExampleContent = readFileSync(
  join(__dirname, '/assets/examples/SvgIcons/SvgIconsStylesExample.js'),
  'utf8'
);
const indicatorsExampleContent = readFileSync(
  join(__dirname, '/assets/examples/SvgIcons/SvgIconsIndicatorsExample.js'),
  'utf8'
);

class SvgIconsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="p-style-guide-svg-icons">
        <h1>SVG Icons</h1>
        <h4>Default</h4>
        <CodeExample
          codeContent={defaultExampleContent}
          exampleComponent={DefaultExample}
        />
        <h4>Styles</h4>
        <CodeExample
          codeContent={stylesExampleContent}
          exampleComponent={StylesExample}
        />
        <h4>Indicators</h4>
        <CodeExample
          codeContent={indicatorsExampleContent}
          exampleComponent={IndicatorsExample}
        />
      </div>
    );
  }
}

SvgIconsPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default SvgIconsPage;
