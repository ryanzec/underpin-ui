import React from 'react';
import {connect} from 'react-redux';

import Tabs from 'src/components/Tabs/Tabs';
import Tab from 'src/components/Tabs/Tab';

import MainNavigation from './MainNavigation';
import MainNavigationSection from './MainNavigationSection';

class Application extends React.Component {
  onClickGitHub = () => {
    window.open('https://github.com/ryanzec/underpin-ui', '_blank');
  };

  renderHeader() {
    return (
      <div className="application-container__header">
        <div className="application-container__header-logo">Underpin UI</div>
        <div>
          <Tabs isBlock>
            <Tab
              isActive
              isBlock
            >
              Documentation
            </Tab>
            <Tab
              isBlock
              onClick={this.onClickGitHub}
            >
              GitHub
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }

  renderContent() {
    return <div className="application-container__main-content">{this.props.children}</div>;
  }

  renderMenu() {
    let menuNode = null;
    const menuSectionNodes = [];

    if (this.props.menuItems.length > 0) {
      this.props.menuItems.forEach((menuSection, key) => {
        menuSectionNodes.push(
          <MainNavigationSection
            headerNode={menuSection.display}
            items={menuSection.items}
            key={key}
          />
        );
      });

      menuNode = <MainNavigation>{menuSectionNodes}</MainNavigation>;
    }

    return menuNode;
  }

  render() {
    return (
      <div className="application-container">
        {this.renderHeader()}
        <div className="application-container__main">
          {this.renderMenu()}
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

let mapStateToProps = function({menu}) {
  return {
    menuItems: menu.items,
  };
};

export default connect(mapStateToProps)(Application);
