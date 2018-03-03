import PropTypes from 'prop-types';
import React from 'react';

import List from 'src/components/List/List';
import ListItem from 'src/components/List/ListItem';
import ExpandableList from 'src/components/List/ExpandableList';

class BadgesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="p-style-guide-lists">
        <h1>Lists</h1>
        <h2>Plain List</h2>
        <List styleType="plain">
          <ListItem>ipsum dolor sit amet, consectetur adipiscing</ListItem>
          <ListItem>Lorem ipsum dolor sit amet, adipiscing</ListItem>
          <List styleType="plain">
            <ListItem>ipsum dolor sit amet, consectetur adipiscing</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, adipiscing</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing</ListItem>
            <ListItem>Lorem ipsum sit amet, consectetur adipiscing</ListItem>
            <List styleType="plain">
              <ListItem>ipsum dolor sit amet, consectetur adipiscing</ListItem>
              <ListItem>Lorem ipsum dolor sit amet, adipiscing</ListItem>
              <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing</ListItem>
              <ListItem>Lorem ipsum sit amet, consectetur adipiscing</ListItem>
              <ListItem>Lorem ipsum dolor sit, consectetur adipiscing</ListItem>
              <ListItem>Lorem ipsum dolor sit amet, consectetur</ListItem>
            </List>
            <ListItem>Lorem ipsum dolor sit, consectetur adipiscing</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur</ListItem>
          </List>
          <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing</ListItem>
          <ListItem>Lorem ipsum sit amet, consectetur adipiscing</ListItem>
          <ListItem>Lorem ipsum dolor sit, consectetur adipiscing</ListItem>
          <List styleType="plain">
            <ListItem>ipsum dolor sit amet, consectetur adipiscing</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, adipiscing</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing</ListItem>
            <ListItem>Lorem ipsum sit amet, consectetur adipiscing</ListItem>
            <ListItem>Lorem ipsum dolor sit, consectetur adipiscing</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur</ListItem>
          </List>
          <ListItem>Lorem ipsum dolor sit amet, consectetur</ListItem>
        </List>
        <h2>Expandable List</h2>
        <ExpandableList handleNode="Toggle List">
          <ListItem isExpandable>ipsum dolor sit amet, consectetur adipiscing</ListItem>
          <ListItem isExpandable>Lorem ipsum dolor sit amet, adipiscing</ListItem>
          <ListItem isExpandable>Lorem ipsum dolor sit amet, consectetur adipiscing</ListItem>
          <ListItem isExpandable>Lorem ipsum sit amet, consectetur adipiscing</ListItem>
          <ListItem isExpandable>Lorem ipsum dolor sit, consectetur adipiscing</ListItem>
          <ListItem isExpandable>Lorem ipsum dolor sit amet, consectetur</ListItem>
          <ListItem isExpandable>ipsum dolor sit amet, consectetur adipiscing</ListItem>
          <ListItem isExpandable>Lorem ipsum dolor sit amet, adipiscing</ListItem>
          <ListItem isExpandable>Lorem ipsum dolor sit amet, consectetur adipiscing</ListItem>
          <ListItem isExpandable>Lorem ipsum sit amet, consectetur adipiscing</ListItem>
          <ListItem isExpandable>Lorem ipsum dolor sit, consectetur adipiscing</ListItem>
          <ListItem isExpandable>Lorem ipsum dolor sit amet, consectetur</ListItem>
        </ExpandableList>
        <h2>Ordered</h2>
        <List tag="ol">
          <ListItem>ipsum dolor sit amet, consectetur adipiscing</ListItem>
          <ListItem>Lorem ipsum dolor sit amet, adipiscing</ListItem>
          <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing</ListItem>
          <ListItem>Lorem ipsum sit amet, consectetur adipiscing</ListItem>
          <ListItem>Lorem ipsum dolor sit, consectetur adipiscing</ListItem>
          <ListItem>Lorem ipsum dolor sit amet, consectetur</ListItem>
        </List>
        <h2>Unordered</h2>
        <List>
          <ListItem>ipsum dolor sit amet, consectetur adipiscing</ListItem>
          <ListItem>Lorem ipsum dolor sit amet, adipiscing</ListItem>
          <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing</ListItem>
          <ListItem>Lorem ipsum sit amet, consectetur adipiscing</ListItem>
          <ListItem>Lorem ipsum dolor sit, consectetur adipiscing</ListItem>
          <ListItem>Lorem ipsum dolor sit amet, consectetur</ListItem>
        </List>
        <h2>Nested</h2>
        <List>
          <ListItem>ipsum dolor sit amet, consectetur adipiscing</ListItem>
          <ListItem>Lorem ipsum dolor sit amet, adipiscing</ListItem>
          <List>
            <ListItem>ipsum dolor sit amet, consectetur adipiscing</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, adipiscing</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing</ListItem>
            <ListItem>Lorem ipsum sit amet, consectetur adipiscing</ListItem>
            <List>
              <ListItem>ipsum dolor sit amet, consectetur adipiscing</ListItem>
              <ListItem>Lorem ipsum dolor sit amet, adipiscing</ListItem>
              <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing</ListItem>
              <ListItem>Lorem ipsum sit amet, consectetur adipiscing</ListItem>
              <ListItem>Lorem ipsum dolor sit, consectetur adipiscing</ListItem>
              <ListItem>Lorem ipsum dolor sit amet, consectetur</ListItem>
            </List>
            <ListItem>Lorem ipsum dolor sit, consectetur adipiscing</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur</ListItem>
          </List>
          <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing</ListItem>
          <ListItem>Lorem ipsum sit amet, consectetur adipiscing</ListItem>
          <ListItem>Lorem ipsum dolor sit, consectetur adipiscing</ListItem>
          <List>
            <ListItem>ipsum dolor sit amet, consectetur adipiscing</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, adipiscing</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing</ListItem>
            <ListItem>Lorem ipsum sit amet, consectetur adipiscing</ListItem>
            <ListItem>Lorem ipsum dolor sit, consectetur adipiscing</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur</ListItem>
          </List>
          <ListItem>Lorem ipsum dolor sit amet, consectetur</ListItem>
        </List>
      </div>
    );
  }
}

BadgesPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default BadgesPage;
