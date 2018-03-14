/* eslint-disable */
class Example extends PureComponent {
  generateOnContextMenu = toggleMenu => {
    return event => {
      event.preventDefault();
      toggleMenu();
    };
  };

  propRenderer = ({isActive, onToggle, onHide}) => {
    return (
      <PopoverContainer isActive={isActive} onClickOutside={onHide} placement="top-start">
        <PopoverHandle onContextMenu={this.generateOnContextMenu(onToggle)}>context menu</PopoverHandle>
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
