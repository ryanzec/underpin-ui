import PropTypes from 'prop-types';
import React from 'react';

import tabsBasicExample from 'raw-loader!app/pages/styleGuide/assets/examples/Buttons/ButtonBasic.example.js';

import CodeExample from 'app/react/components/CodeExample';

class ButtonsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="p-style-guide-buttons">
        <h1>Buttons</h1>
        <CodeExample example={tabsBasicExample} />
      </div>
    );
  }
}

ButtonsPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default ButtonsPage;
