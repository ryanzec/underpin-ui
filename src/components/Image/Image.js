import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {isString} from 'lodash';

export const getInitialState = () => {
  return {
    errorLoading: false,
  };
};

export const createOnError = (instance) => {
  return () => {
    instance.setState({
      errorLoading: true,
    });
  };
};

class Image extends PureComponent {
  static propTypes = {
    notFoundNode: PropTypes.node,
    src: PropTypes.string,
  };

  static defaultProps = {
    notFoundNode: null,
    src: null,
  };

  state = getInitialState();

  onError = createOnError(this);

  render() {
    const {children, notFoundNode, ...restOfProps} = this.props;

    if (this.state.errorLoading === true || !this.props.src) {
      return isString(this.props.notFoundNode) ? <span>{this.props.notFoundNode}</span> : this.props.notFoundNode;
    }

    return (
      /* eslint-workaround */
      <img
        onError={this.onError}
        role="presentation"
        {...restOfProps}
      />
    );
  }
}

export default Image;
