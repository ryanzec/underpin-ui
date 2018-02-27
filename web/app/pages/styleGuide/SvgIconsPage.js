import PropTypes from 'prop-types';
import React from 'react';

import CodeExample from 'app/react/components/CodeExample';

import DefaultExample from './assets/examples/SvgIcons/SvgIconsDefaultExample';
import StylesExample from './assets/examples/SvgIcons/SvgIconsStylesExample';
import IndicatorsExample from './assets/examples/SvgIcons/SvgIconsIndicatorsExample';

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
          codeContent=""
          exampleComponent={DefaultExample}
        />
        <h4>Styles</h4>
        <CodeExample
          codeContent=""
          exampleComponent={StylesExample}
        />
        <h4>Indicators</h4>
        <CodeExample
          codeContent=""
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
