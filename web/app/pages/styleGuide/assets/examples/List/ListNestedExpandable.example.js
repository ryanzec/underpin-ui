/* eslint-disable */
class Example extends PureComponent {
  nestedExpandableListRenderer = ({isExpanded, onToggleList}) => {
    return (
      <List styleType="plain" isExpandable>
        <ExpandableListHeader isExpanded={isExpanded} onClick={onToggleList}>
          Toggle List
        </ExpandableListHeader>
        <ListItem isExpandable isExpanded={isExpanded}>
          <ExpandableListRenderer render={this.anotherNestedExpandableListRenderer} />
        </ListItem>
        <ListItem isExpandable isExpanded={isExpanded}>
          Ipsum dolor sit amet, consectetur adipiscing
        </ListItem>
        <ListItem isExpandable isExpanded={isExpanded}>
          Lorem Ipsum dolor sit amet, adipiscing
        </ListItem>
        <ListItem isExpandable isExpanded={isExpanded}>
          Lorem Ipsum dolor sit amet, consectetur adipiscing
        </ListItem>
      </List>
    );
  };

  anotherNestedExpandableListRenderer = ({isExpanded, onToggleList}) => {
    return (
      <List styleType="plain" isExpandable>
        <ExpandableListHeader isExpanded={isExpanded} onClick={onToggleList}>
          Toggle List
        </ExpandableListHeader>
        <ListItem isExpandable isExpanded={isExpanded}>
          Ipsum dolor sit amet, consectetur adipiscing
        </ListItem>
        <ListItem isExpandable isExpanded={isExpanded}>
          Lorem Ipsum dolor sit amet, adipiscing
        </ListItem>
        <ListItem isExpandable isExpanded={isExpanded}>
          Lorem Ipsum dolor sit amet, consectetur adipiscing
        </ListItem>
      </List>
    );
  };

  expandableListRenderer = ({isExpanded, onToggleList}) => {
    return (
      <List styleType="plain" isExpandable>
        <ExpandableListHeader isExpanded={isExpanded} onClick={onToggleList}>
          Toggle List
        </ExpandableListHeader>
        <ListItem isExpandable isExpanded={isExpanded}>
          Ipsum dolor sit amet, consectetur adipiscing
        </ListItem>
        <ListItem isExpandable isExpanded={isExpanded}>
          Lorem Ipsum dolor sit amet, adipiscing
        </ListItem>
        <ListItem isExpandable isExpanded={isExpanded}>
          <ExpandableListRenderer render={this.nestedExpandableListRenderer} />
        </ListItem>
        <ListItem isExpandable isExpanded={isExpanded}>
          Lorem Ipsum dolor sit amet, consectetur adipiscing
        </ListItem>
      </List>
    );
  };

  render() {
    return <ExpandableListRenderer render={this.expandableListRenderer} />;
  }
}

ReactDOM.render(<Example />, mountNode);
