import PropTypes from 'prop-types';
import React from 'react';

import svgIconBasicExample from 'raw-loader!app/pages/styleGuide/assets/examples/SvgIcons/SvgIconBasic.example';
import svgIconStyleTypesExample from 'raw-loader!app/pages/styleGuide/assets/examples/SvgIcons/SvgIconStyleTypes.example';
import svgIconIndicatorExample from 'raw-loader!app/pages/styleGuide/assets/examples/SvgIcons/SvgIconIndicator.example';

import CodeExample from 'app/react/components/CodeExample';

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
        <CodeExample example={svgIconBasicExample} />
        <h4>Styles</h4>
        <CodeExample example={svgIconStyleTypesExample} />
        <h4>Indicators</h4>
        <CodeExample example={svgIconIndicatorExample} />
      </div>
    );
  }
}

SvgIconsPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default SvgIconsPage;
