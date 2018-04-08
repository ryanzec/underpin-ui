/* eslint-disable */
class Example extends PureComponent {
  expandableListRenderer = ({isExpanded, onToggleList}) => {
    return (
      <List styleType="plain" isExpandable>
        <ExpandableListHeader isExpanded={isExpanded} onClick={onToggleList}>
          Toggle List
        </ExpandableListHeader>
        <ListItem isExpandable isExpanded={isExpanded}>
          ipsum dolor sit amet, consectetur adipiscing
        </ListItem>
        <ListItem isExpandable isExpanded={isExpanded}>
          Lorem ipsum dolor sit amet, adipiscing
        </ListItem>
        <ListItem isExpandable isExpanded={isExpanded}>
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </ListItem>
      </List>
    );
  };

  render() {
    return <ExpandableListRenderer render={this.expandableListRenderer} />;
  }
}

ReactDOM.render(<Example />, mountNode);
