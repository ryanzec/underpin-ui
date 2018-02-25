import PropTypes from 'prop-types';
import React from 'react';

import Tabs from 'src/components/Tabs/Tabs';
import Tab from 'src/components/Tabs/Tab';

const tabs = [
  'Get Started',
  'Documentation',
  'Community',
  'GitHub',
  'Donate',
];

class TabsInteractiveExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };
  }

  onClickTab = (event) => {
    this.setState({
      activeTab: parseInt(event.target.getAttribute('data-tab-id'), 10),
    });
  }

  render() {
    return (
      <div className="p-style-guide-tabs">
        <h1>Tabs</h1>
        <Tabs>
          {tabs.map((tabName, key) => {
            return (
              <Tab
                key={key}
                isActive={key === this.state.activeTab}
                data-tab-id={key}
                onClick={this.onClickTab}
              >
                {tabName}
              </Tab>
            );
          })}
        </Tabs>
        <br />
        <Tabs isBlock>
          {tabs.map((tabName, key) => {
            return (
              <Tab
                key={key}
                isActive={key === this.state.activeTab}
                data-tab-id={key}
                onClick={this.onClickTab}
                isBlock
              >
                {tabName}
              </Tab>
            );
          })}
        </Tabs>
      </div>
    );
  }
}

TabsInteractiveExample.contextTypes = {
  router: PropTypes.object.isRequired
};

export default TabsInteractiveExample;
