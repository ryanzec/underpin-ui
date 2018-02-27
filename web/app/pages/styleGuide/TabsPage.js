import PropTypes from 'prop-types';
import React from 'react';

import CodeExample from '../../react/components/CodeExample';

import InteractiveExample from './assets/examples/Tabs/TabsInteractiveExample';

import Tab from 'src/components/Tabs/Tabs';
import TabItem from 'src/components/Tabs/Tab';

class TabsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="p-style-guide-tabs">
        <h1>Tabs</h1>
        <CodeExample
          codeContent=""
          exampleComponent={InteractiveExample}
        />
      </div>
    );
  }
}

TabsPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default TabsPage;
