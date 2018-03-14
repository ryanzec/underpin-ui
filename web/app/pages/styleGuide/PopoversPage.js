import PropTypes from 'prop-types';
import React from 'react';

import {
  DropDownMenu,
  DropDownMenuDivider,
  DropDownMenuHeader,
  DropDownMenuItem,
  PopoverRenderer,
  PopoverContainer,
  PopoverContent,
  PopoverHandle,
  TooltipContent,
} from 'src';

class PopoversPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      isActive2: false,
      isActiveDD: false,
      isActiveContextMenu: false,
    };
  }

  onClickPopover = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  onClickOutside = () => {
    this.setState({
      isActive: false,
    });
  };

  onMouseOver = () => {
    this.setState({
      isActive2: true,
    });
  };

  onMouseOut = () => {
    this.setState({
      isActive2: false,
    });
  };

  onClickPopoverDD = () => {
    this.setState({
      isActiveDD: !this.state.isActiveDD,
    });
  };

  onClickOutsideDD = () => {
    this.setState({
      isActiveDD: false,
    });
  };

  onClickPopoverContextMenu = (event) => {
    // prevents the normal right click context menu from showing
    event.preventDefault();

    this.setState({
      isActiveContextMenu: !this.state.isActiveContextMenu,
    });
  };

  onClickOutsideContextMenu = () => {
    this.setState({
      isActiveContextMenu: false,
    });
  };

  popoverPropRenderer({isActive, onShow, onHide}) {
    return (
      <PopoverContainer isActive={isActive}>
        <span
          onMouseEnter={onShow}
          onMouseLeave={onHide}
        >
          be
        </span>
        <PopoverContent>
          <TooltipContent>content2</TooltipContent>
        </PopoverContent>
      </PopoverContainer>
    );
  }

  renderPopover() {
    return (
      <PopoverContainer
        isActive={this.state.isActive}
        placement="top-start"
      >
        <PopoverHandle onClick={this.onClickPopover}>handle</PopoverHandle>
        <PopoverContent isPlain={false}>content</PopoverContent>
      </PopoverContainer>
    );
  }

  renderPopover2() {
    return <PopoverRenderer render={this.popoverPropRenderer} />;
  }

  renderPopoverDD() {
    return (
      <PopoverContainer
        isActive={this.state.isActiveDD}
        onClickOutside={this.onClickOutsideDD}
        placement="top-start"
      >
        <PopoverHandle onClick={this.onClickPopoverDD}>drop down</PopoverHandle>
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
  }

  renderPopoverContentMenu() {
    return (
      <PopoverContainer
        isActive={this.state.isActiveContextMenu}
        onClickOutside={this.onClickOutsideContextMenu}
        placement="top-start"
      >
        <PopoverHandle onContextMenu={this.onClickPopoverContextMenu}>drop down</PopoverHandle>
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
  }

  render() {
    return (
      <div className="p-style-guide-popovers">
        <h1>Popovers</h1>
        <div>
          Ideally the popover {this.renderPopover()} should be able to {this.renderPopover2()} placed anywhere
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          A popover can be a {this.renderPopoverDD()}, it just have specific styling (same thing can be used as{' '}
          {this.renderPopoverContentMenu()} when right clicking).
        </div>
      </div>
    );
  }
}

PopoversPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default PopoversPage;
