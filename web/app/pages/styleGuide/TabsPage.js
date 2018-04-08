import PropTypes from 'prop-types';
import React from 'react';

import CodeExample from '../../react/components/CodeExample';

import tabsBasicExample from 'raw-loader!app/pages/styleGuide/assets/examples/Tabs/TabsBasic.example';

class TabsPage extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="p-style-guide-tabs">
        <h1>Tabs</h1>
        <CodeExample
          axis="horizontal"
          example={tabsBasicExample}
        />
      </div>
    );
  }
}

export default TabsPage;
