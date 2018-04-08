import {Component} from 'react';
import PropTypes from 'prop-types';

import * as componentUtils from 'src/utils/component';

export const getInitialState = (instance) => {
  return {
    isExpanded: instance.props.initiallyExpanded,
  };
};

export const createOnToggleList = (instance) => {
  return () => {
    instance.setState((oldState) => {
      return {
        isExpanded: !oldState.isExpanded,
      };
    });
  };
};

export class ExpandableListRenderer extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    initiallyExpanded: PropTypes.bool,
  };

  static defaultProps = {
    initiallyExpanded: false,
  };

  state = getInitialState(this);

  onToggleList = createOnToggleList(this);

  render() {
    const {isExpanded} = this.state;
    const passDown = {
      isExpanded,
      onToggleList: this.onToggleList,
    };
    const renderChildren = this.props.render(passDown);

    componentUtils.childCountExact(renderChildren, 1, 'ExpandableListRenderer');

    return renderChildren;
  }
}

export default ExpandableListRenderer;
