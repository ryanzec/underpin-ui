import PropTypes from 'prop-types';
import React from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';

// TODO: should I have each section control its own routes
import {routes as styleGuideRoutes} from 'app/pages/styleGuide/module';
import {routes as subSystemsRoutes} from 'app/pages/subSystems/module';
import {routes as showcaseRoutes} from 'app/pages/showcase/module';

import CodePage from 'app/pages/styleGuide/CodePage';
import NotFoundPage from 'app/react/components/NotFoundPage';

import {toggleChrome} from 'app/stores/application/applicationActions';

import FormCheckableInput from 'src/components/Form/FormCheckableInput';
import Tabs from 'src/components/Tabs/Tabs';
import Tab from 'src/components/Tabs/Tab';

import MainNavigation from './MainNavigation';
import MainNavigationSection from './MainNavigationSection';

export const ChromeToggleContainerStyled = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  opacity: 0.1;
  transition: opacity 0.15s linear;

  &:hover {
    opacity: 1;
  }
`;

export const mapStateToProps = function({menu, application}) {
  return {
    menuItems: menu.items,
    showChrome: application.showChrome,
  };
};

export const mapDispatchToProps = {
  toggleChrome,
};

class Application extends React.Component {
  static propTypes = {
    menuItems: PropTypes.array.isRequired,
    showChrome: PropTypes.bool.isRequired,
    toggleChrome: PropTypes.func.isRequired,
  };

  onClickGitHub = () => {
    window.open('https://github.com/ryanzec/underpin-ui', '_blank');
  };

  onToggleChrome = () => {
    console.log('test');
    this.props.toggleChrome();
  };

  routerIndexRedirectRender = () => {
    return (
      /* eslint-workaround */
      <Redirect
        component={CodePage}
        to="/style-guide/code"
      />
    );
  };

  renderRouter = () => {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={this.routerIndexRedirectRender}
        />
        {styleGuideRoutes}
        {subSystemsRoutes}
        {showcaseRoutes}
        <Route
          component={NotFoundPage}
          path="*"
        />
      </Switch>
    );
  };

  renderHeader() {
    if (!this.props.showChrome) {
      return null;
    }

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
    return <div className="application-container__main-content">{this.renderRouter()}</div>;
  }

  renderMenu() {
    if (!this.props.showChrome) {
      return null;
    }

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
        <ChromeToggleContainerStyled>
          <FormCheckableInput
            checked={this.props.showChrome}
            onChange={this.onToggleChrome}
            type="checkbox"
          >
            Show Example Chrome
          </FormCheckableInput>
        </ChromeToggleContainerStyled>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Application));
