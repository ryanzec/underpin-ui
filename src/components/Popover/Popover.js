import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import PopoverContainer from 'src/components/Popover/PopoverContainer';

export class Popover extends PureComponent {
  static propTypes = {
    render: PropTypes.func.isRequired,
  };

  state = {
    isActive: false,
  };

  onShow = () => {
    this.setState({
      isActive: true,
    });
  };

  onHide = () => {
    this.setState({
      isActive: false,
    });
  };

  render() {
    const {isActive} = this.state;
    const passDown = {
      isActive,
      onShow: this.onShow,
      onHide: this.onHide,
    };

    const renderChildren = this.props.render(passDown);

    if (process.env.NODE_ENV !== 'production') {
      if (renderChildren.length !== 2) {
        console.error(
          `the 'Popover' component expects the render props to produce 2 children, instead got ${renderChildren.length}`
        );
      }
    }

    return (
      <PopoverContainer isActive={isActive}>
        {renderChildren[0]}
        {renderChildren[1]}
      </PopoverContainer>
    );
  }
}

export default Popover;
