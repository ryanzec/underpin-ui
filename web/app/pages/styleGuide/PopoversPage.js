import PropTypes from 'prop-types';
import React from 'react';

// import CodeExample from '../../react/components/code-example';

// import StylesExample from './src/examples/Buttons/styles';

// import { readFileSync } from 'fs';
// import { join } from 'path';

// const stylesExampleContent = readFileSync(join(__dirname, '/src/examples/Buttons/styles'), 'utf8');

import {
  DropDownMenu,
  DropDownMenuDivider,
  DropDownMenuHeader,
  DropDownMenuItem,
  Popover,
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

  popoverPropRenderer({onShow, onHide}) {
    const handle = (
      <span
        onMouseEnter={onShow}
        onMouseLeave={onHide}
      >
        be
      </span>
    );
    const content = <TooltipContent>content2</TooltipContent>;

    return [handle, content];
  }

  renderPopover() {
    return (
      <PopoverContainer
        isActive={this.state.isActive}
        placement="top-start"
      >
        <PopoverHandle onClick={this.onClickPopover}>handle</PopoverHandle>
        <PopoverContent>content</PopoverContent>
      </PopoverContainer>
    );
  }

  renderPopover2() {
    return <Popover render={this.popoverPropRenderer} />;
  }

  renderPopoverDD() {
    return (
      <PopoverContainer
        isActive={this.state.isActiveDD}
        onClickOutside={this.onClickOutsideDD}
        placement="top-start"
      >
        <PopoverHandle onClick={this.onClickPopoverDD}>drop down</PopoverHandle>
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
        <div>A popover can be a {this.renderPopoverDD()}, it just have specific styling.</div>
      </div>
    );
  }
}

PopoversPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default PopoversPage;
