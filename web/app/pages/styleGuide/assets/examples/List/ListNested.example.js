/* eslint-disable */
class Example extends PureComponent {
  render() {
    return (
      <List styleType="plain">
        <ListItem>ipsum dolor sit amet, consectetur adipiscing</ListItem>
        <ListItem>Lorem ipsum dolor sit amet, adipiscing</ListItem>
        <ListItem>
          <List styleType="plain">
            <ListItem>ipsum dolor sit amet, consectetur adipiscing</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, adipiscing</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing</ListItem>
            <ListItem>Lorem ipsum sit amet, consectetur adipiscing</ListItem>
            <ListItem>
              <List styleType="plain">
                <ListItem>ipsum dolor sit amet, consectetur adipiscing</ListItem>
                <ListItem>Lorem ipsum dolor sit amet, adipiscing</ListItem>
                <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
      </List>
    );
  }
}

ReactDOM.render(<Example />, mountNode);
