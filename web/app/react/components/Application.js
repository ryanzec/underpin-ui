import PropTypes from 'prop-types';
import React from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import styled, {css} from 'styled-components';

import * as themesCss from 'src/styles/themes';
import * as structureCss from 'src/styles/structure';
import * as cssUtils from 'src/utils/css';

import StyleGuideRouter from 'app/pages/styleGuide/StyleGuideRouter';
import SubSystemRouter from 'app/pages/subSystems/SubSystemRouter';
import ShowcaseRouter from 'app/pages/showcase/ShowcaseRouter';

import TabsPage from 'app/pages/styleGuide/TabsPage';
import NotFoundPage from 'app/react/components/NotFoundPage';

import {toggleChrome} from 'app/stores/application/applicationActions';

import FormCheckableInput from 'src/components/Form/FormCheckableInput';
import Tabs from 'src/components/Tabs/Tabs';
import Tab from 'src/components/Tabs/Tab';

import MainNavigationSection from './MainNavigationSection';

const themeColors = themesCss.light;

export const mainNavigiationStyles = () => {
  return css`
    ${cssUtils.flexboxSpecificValue('width', '250px')}
    border-right: 1px solid ${themeColors.application.borderColor}};
    background: ${themeColors.global.gray1};
  `;
};

export const MainNavigiationStyled = styled.div`
  ${mainNavigiationStyles};
`;

export const ChromeToggleContainerStyled = styled.div`
  position: fixed;
  bottom: ${structureCss.spacing.tiny};
  right: ${structureCss.spacing.tiny};
  opacity: 0.1;
  transition: opacity 0.15s linear;

  &:hover {
    opacity: 1;
  }
`;

export const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${themeColors.application.borderColor};
  background-color: ${themesCss.light.global.gray1};
  ${cssUtils.flexboxSpecificValue('height', '47px')};
`;

export const HeaderLogoStyled = styled.div`
  padding: 0 ${structureCss.spacing.extraSmall};
  align-self: stretch;
  display: flex;
  align-items: center;
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
    this.props.toggleChrome();
  };

  routerIndexRedirectRender = () => {
    return (
      /* eslint-workaround */
      <Redirect
        component={TabsPage}
        to="/style-guide/tabs"
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
        <Route
          component={StyleGuideRouter}
          path="/style-guide"
        />
        <Route
          component={SubSystemRouter}
          path="/sub-systems"
        />
        <Route
          component={ShowcaseRouter}
          path="/showcase"
        />
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
      <HeaderStyled>
        <HeaderLogoStyled>Underpin UI</HeaderLogoStyled>
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
      </HeaderStyled>
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

      menuNode = <MainNavigiationStyled>{menuSectionNodes}</MainNavigiationStyled>;
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
