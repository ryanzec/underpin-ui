import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import styled, {css} from 'styled-components';

import * as structureCss from 'src/styles/structure';
import * as themesCss from 'src/styles/themes';

import {List, ExpandableListRenderer, ExpandableListHeader, ListItem, SvgIcon} from 'src';

export const listItemStyles = (props) => {
  return css`
    cursor: pointer;
    ${props.isActive ? 'font-weight: bold;' : ''} &:hover {
      background: ${themesCss.light.application.activeState};
    }
  `;
};

const ListItemStyled = styled(ListItem)`
  ${listItemStyles};
`;

export const expandableListStyles = () => {
  const padding = structureCss.spacing.extraSmall;

  return css`
    padding: ${padding} ${padding} 0 ${padding};
  `;
};

const ListStyled = styled(List)`
  ${expandableListStyles};
`;

export const mapStateToProps = ({router}) => {
  return {
    router,
  };
};

class MainNavigationSection extends React.Component {
  getCssClasses() {
    let cssClasses = ['main-navigation__section'];

    if (this.props.className) {
      cssClasses = cssClasses.concat(this.props.className.split(' '));
    }

    return cssClasses;
  }

  onClickMenuItem = (event) => {
    if (event.currentTarget.getAttribute('data-to')) {
      this.context.router.history.push(event.currentTarget.getAttribute('data-to'));
    }
  };

  navigationRenderer = ({isExpanded, onToggleList}) => {
    return (
      <ListStyled styleType="plain">
        <ExpandableListHeader
          isExpanded={isExpanded}
          onClick={onToggleList}
        >
          {this.props.headerNode}
        </ExpandableListHeader>
        {this.renderItems(isExpanded)}
      </ListStyled>
    );
  };

  renderItems(isExpanded) {
    let itemNodes = [];

    if (this.props.items.length > 0) {
      this.props.items.forEach((item) => {
        let svgIconNode = null;

        if (item.icon) {
          svgIconNode = <SvgIcon icon={item.icon} />;
        }

        itemNodes.push(
          <ListItemStyled
            data-to={item.to}
            isActive={this.props.router.location.pathname === item.to}
            isExpandable
            isExpanded={isExpanded}
            key={item.id}
            onClick={this.onClickMenuItem}
          >
            {svgIconNode}
            {item.display}
          </ListItemStyled>
        );
      });
    }

    return itemNodes;
  }

  render() {
    return (
      // eslint-work-around
      <ExpandableListRenderer
        initiallyExpanded
        render={this.navigationRenderer}
      />
    );
  }
}

MainNavigationSection.propTypes = {
  className: PropTypes.string,
  headerNode: PropTypes.node.isRequired,
  items: PropTypes.array.isRequired,
  router: PropTypes.object.isRequired,
};

MainNavigationSection.contextTypes = {
  router: PropTypes.object,
};

MainNavigationSection.defaultProps = {
  className: null,
  headerNode: null,
  items: [],
};

export default connect(mapStateToProps)(MainNavigationSection);
