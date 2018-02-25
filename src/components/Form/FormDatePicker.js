import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import moment from 'moment-timezone';
import styled from 'styled-components';

import PopoverContainer from 'src/components/Popover/PopoverContainer';
import FormTextbox from './FormTextbox';
import DatePicker from 'src/components/DatePicker/DatePicker';

export const PopoverContainerStyled = styled(PopoverContainer)`
  z-index: 1000;
  cursor: pointer;
`;

export const createOnFocus = (instance) => {
  return () => {
    instance.setState({
      isActive: true,
    });
  };
};

export const createOnClose = (instance) => {
  return () => {
    instance.setState({
      isActive: false,
    });
  };
};

export const createGetInputValue = (instance) => {
  return () => {
    let inputValue = '';

    if (moment.isMoment(instance.props.selectedDay)) {
      inputValue = instance.props.selectedDay.format(instance.props.format);
    }

    return inputValue;
  };
};

class FormDatePicker extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
    selectedDay: PropTypes.object,
    onClickDate: PropTypes.func.isRequired,
    format: PropTypes.string,
  };

  static defaultProps = {
    onClick: null,
    selectedDay: null,
    onClickDate: null,
    format: 'MMM Do, YYYY',
    placement: 'top-end',
  };

  state = {
    isActive: false,
  };

  onFocus = createOnFocus(this);
  onClose = createOnClose(this);
  getInputValue = createGetInputValue(this);

  render() {
    const {onClick, selectedDay, onClickDate, format, ...restOfProps} = this.props;

    return (
      <PopoverContainerStyled
        isActive={this.state.isActive}
        {...restOfProps}
      >
        <FormTextbox
          onFocus={this.onFocus}
          readOnly
          value={this.getInputValue()}
        />
        <DatePicker
          onClickDate={onClickDate}
          onClose={this.onClose}
          selectedDay={selectedDay}
        />
      </PopoverContainerStyled>
    );
  }
}

export default FormDatePicker;
