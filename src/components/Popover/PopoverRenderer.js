import {Component} from 'react';
import PropTypes from 'prop-types';

import * as componentUtils from 'src/utils/component';

export class PopoverRenderer extends Component {
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

    componentUtils.childCountExact(renderChildren, 1, 'PopoverRenderer');

    return renderChildren;
  }
}

export default PopoverRenderer;
