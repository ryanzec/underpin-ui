import PropTypes from 'prop-types';
import React from 'react';

import ExpandableList from 'src/components/List/ExpandableList';
import ListItem from 'src/components/List/ListItem';
import SvgIcon from 'src/components/SvgIcon/SvgIcon';

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

  renderItems() {
    let itemNodes = [];

    if (this.props.items.length > 0) {
      this.props.items.forEach((item) => {
        let svgIconNode = null;

        if (item.icon) {
          svgIconNode = <SvgIcon icon={item.icon} />;
        }

        itemNodes.push(
          <ListItem
            data-to={item.to}
            isExpandable
            key={item.id}
            onClick={this.onClickMenuItem}
          >
            {svgIconNode}
            {item.display}
          </ListItem>
        );
      });
    }

    return itemNodes;
  }

  render() {
    return <ExpandableList handleNode={this.props.headerNode}>{this.renderItems()}</ExpandableList>;
  }
}

MainNavigationSection.propTypes = {
  className: PropTypes.string,
  headerNode: PropTypes.node.isRequired,
  items: PropTypes.array.isRequired,
};

MainNavigationSection.contextTypes = {
  router: PropTypes.object,
};

MainNavigationSection.defaultProps = {
  className: null,
  headerNode: null,
  items: [],
};

export default MainNavigationSection;
