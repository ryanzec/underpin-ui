import {PureComponent} from 'react';
import PropTypes from 'prop-types';
import fastEquals from 'fast-equals';

class FormUpdater extends PureComponent {
  static propTypes = {
    values: PropTypes.object,
    onUpdate: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: {},
  };

  constructor(props) {
    super(props);

    this.state = {
      values: props.values,
      submitting: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!fastEquals.deep(nextProps.values, this.props.values)) {
      this.setState({
        values: nextProps.values,
      });

      nextProps.onUpdate(nextProps.values);
    }
  }

  render() {
    return null;
  }
}

export default FormUpdater;
