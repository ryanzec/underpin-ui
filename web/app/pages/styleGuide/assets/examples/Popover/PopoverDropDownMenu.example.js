/* eslint-disable */
class Example extends PureComponent {
  propRenderer = ({isActive, onToggle, onHide}) => {
    return (
      <PopoverContainer isActive={isActive} onClickOutside={onHide} placement="top-start">
        <PopoverHandle onClick={onToggle}>drop down menu</PopoverHandle>
        <PopoverContent>
          <DropDownMenu>
            <DropDownMenuHeader>Welcome John Doe</DropDownMenuHeader>
            <DropDownMenuDivider />
            <DropDownMenuItem>Your profile</DropDownMenuItem>
            <DropDownMenuItem>Explore</DropDownMenuItem>
            <DropDownMenuItem>Intergerations</DropDownMenuItem>
            <DropDownMenuItem>Help</DropDownMenuItem>
            <DropDownMenuDivider />
            <DropDownMenuItem>Settings</DropDownMenuItem>
            <DropDownMenuItem>Log out</DropDownMenuItem>
          </DropDownMenu>
        </PopoverContent>
      </PopoverContainer>
    );
  };

  render() {
    return <PopoverRenderer render={this.propRenderer} />;
  }
}

ReactDOM.render(<Example />, mountNode);
