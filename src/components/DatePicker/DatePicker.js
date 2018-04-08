import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import moment from 'moment-timezone';
import styled from 'styled-components';

import * as structureCss from 'src/styles/structure';
import * as themesCss from 'src/styles/themes';
import * as cssUtils from 'src/utils/css';
import * as datePickerCss from 'src/components/DatePicker/internal/datePickerCss';

import Button from 'src/components/Button/Button';
import DatePickerDay from './DatePickerDay';
import FormTextbox from 'src/components/Form/FormTextbox';
import SvgIcon from 'src/components/SvgIcon/SvgIcon';

export const ContainerStyled = styled.div`
  display: inline-block;
  border: 1px solid ${themesCss.light.global.gray4};
  border-radius: 5px;
  background-color: ${themesCss.light.global.white};
`;

export const ButtonStyled = styled(Button)`
  width: 100%;

  ${cssUtils.borderRadius('top', 0)};
`;

// @todo: can these next two components be combined?
export const PreviousMonthIconStyled = styled(SvgIcon)`
  cursor: pointer;

  ${cssUtils.flexboxSpecificValue('width', '16px')};
`;

export const NextMonthIconStyled = styled(SvgIcon)`
  cursor: pointer;

  ${cssUtils.flexboxSpecificValue('width', '16px')};
`;

export const TopBarStyled = styled.div`
  display: flex;
  background-color: ${themesCss.light.global.gray2};
  padding: ${structureCss.spacing.tiny} ${structureCss.spacing.small} ${structureCss.spacing.tiny}
    ${structureCss.spacing.small};

  ${cssUtils.borderRadius('top', '4px')};
`;

export const TopBarMonthTextStyled = styled.div`
  flex: 1;
  text-align: center;
`;

export const DaysContainerStyled = styled.div`
  margin: ${structureCss.spacing.tiny};
`;

export const WeekStyled = styled.div`
  display: flex;
`;

export const DaysOfWeekStyled = styled.div`
  display: flex;
  padding: 0 ${structureCss.spacing.tiny};
  background-color: ${themesCss.light.global.gray2};
`;

export const DayOfWeekStyled = styled.div`
  ${datePickerCss.applyDaysBaseStyles};
`;

export const TimeContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 125px;
  margin: 0 auto;
  margin-bottom: ${structureCss.spacing.small};
`;

export const TimeTextboxStyled = styled(FormTextbox)`
  ${cssUtils.flexboxSpecificValue('width', '35px')};
`;

export const createComponentWillReceiveProps = (instance) => {
  return (newProps) => {
    if (moment.isMoment(newProps.selectedDay)) {
      instance.setState({
        viewDate: newProps.selectedDay,
        hours: instance.convertTimeValueToString(newProps.selectedDay.hours()),
        minutes: instance.convertTimeValueToString(newProps.selectedDay.minutes()),
        seconds: instance.convertTimeValueToString(newProps.selectedDay.seconds()),
      });
    }
  };
};

export const createComponentWillMount = (instance) => {
  return () => {
    let viewDate;

    if (moment.isMoment(instance.props.selectedDay)) {
      viewDate = instance.props.selectedDay;
    } else {
      viewDate = moment();
    }

    instance.setState({
      viewDate,
    });
  };
};

export const createOnClickNextMonth = (instance) => {
  return () => {
    instance.setState({
      viewDate: instance.state.viewDate.clone().add(1, 'month'),
    });
  };
};

export const createOnClickPreviousMonth = (instance) => {
  return () => {
    instance.setState({
      viewDate: instance.state.viewDate.clone().subtract(1, 'month'),
    });
  };
};

export const createOnFocusTime = (instance) => {
  return (event) => {
    const formField = event.target.getAttribute('data-form-field');

    if (parseInt(instance.state[formField], 10) === 0) {
      instance.setState({
        [formField]: '',
      });
    }
  };
};

export const createOnBlurTime = (instance) => {
  return (event) => {
    const formField = event.target.getAttribute('data-form-field');
    let newValue = instance.convertTimeValueToString(event.target.value);

    this.setState(
      {
        [formField]: newValue,
      },
      () => {
        let newDate;

        if (moment.isMoment(instance.props.selectedDay)) {
          newDate = instance.props.selectedDay.clone();
        } else {
          newDate = moment();
        }

        newDate.hours(instance.state.hours);
        newDate.minutes(instance.state.minutes);
        newDate.seconds(instance.state.seconds);

        instance.props.onClickDate(newDate);
      }
    );
  };
};

export const createOnChangeTime = (instance) => {
  return (event) => {
    const formField = event.target.getAttribute('data-form-field');
    let newValue = instance.convertTimeValueToString(event.target.value, false);

    if (newValue > 24 && formField === 'hours') {
      newValue = '23';
    } else if (newValue > 60) {
      newValue = '59';
    }

    this.setState({
      [formField]: newValue,
    });
  };
};

export const createConvertTimeValueToString = () => {
  return (value, addLeadingZero = true) => {
    let parsedValue = parseInt(value, 10);

    if (isNaN(parsedValue)) {
      parsedValue = 0;
    }

    if (addLeadingZero) {
      return `${parsedValue}`.length === 1 ? `0${parsedValue}` : `${parsedValue}`;
    }

    return parsedValue === 0 ? '' : `${parsedValue}`;
  };
};

export const createGetCalendarMonthWeeks = (instance) => {
  return () => {
    const baseMonth = instance.state.viewDate.month();
    const currentProcessingDay = instance.state.viewDate
      .clone()
      .startOf('month')
      .weekday(0);
    const calendarMonthWeeks = [];

    do {
      const weekDays = [];

      for (let x = 0; x < 7; x += 1) {
        weekDays.push(currentProcessingDay.clone());

        currentProcessingDay.add(1, 'days');
      }

      calendarMonthWeeks.push(weekDays);
    } while (currentProcessingDay.month() === baseMonth);

    return calendarMonthWeeks;
  };
};

export const createIsActiveDay = (instance) => {
  return (day) => {
    let isActive = false;

    if (moment.isMoment(instance.props.selectedDay)) {
      if (isActive) {
        return;
      }

      if (day.diff(instance.props.selectedDay.clone().startOf('day'), 'days') === 0) {
        isActive = true;
      }
    }

    return isActive;
  };
};

export const createIsDisabledDay = (instance) => {
  return (day) => {
    let isDisabled = false;

    if (instance.props.minDate || instance.props.maxDate) {
      isDisabled
        = (instance.props.minDate && instance.props.minDate.isAfter(day))
        || (instance.props.maxDate && instance.props.maxDate.isBefore(day));
    }

    return isDisabled;
  };
};

export const createOnClickDate = (instance) => {
  return (day) => {
    return () => {
      if (!instance.isDisabledDay(day)) {
        const {hours, minutes, seconds} = instance.state;
        const newDate = day.clone();

        newDate.hours(hours);
        newDate.minutes(minutes);
        newDate.seconds(seconds);

        instance.props.onClickDate(newDate);
      }
    };
  };
};

class DatePicker extends PureComponent {
  static propTypes = {
    onClickDate: PropTypes.func.isRequired,
    selectedDay: PropTypes.object,
    minDate: PropTypes.object,
    maxDate: PropTypes.object,
    displayTime: PropTypes.bool,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    onClickDate: null,
    selectedDay: null,
    minDate: null,
    maxDate: null,
    displayTime: true,
    onClose: null,
  };

  constructor(props) {
    super(props);
    let startedSelectedDate;

    if (moment.isMoment(props.selectedDay)) {
      startedSelectedDate = props.selectedDay;
    }

    this.state = {
      viewDate: null,
      hours: startedSelectedDate ? this.convertTimeValueToString(startedSelectedDate.hours()) : '00',
      minutes: startedSelectedDate ? this.convertTimeValueToString(startedSelectedDate.minutes()) : '00',
      seconds: startedSelectedDate ? this.convertTimeValueToString(startedSelectedDate.seconds()) : '00',
    };
  }

  componentWillMount = createComponentWillMount(this);
  componentWillReceiveProps = createComponentWillMount(this);

  onClickNextMonth = createOnClickNextMonth(this);
  onClickPreviousMonth = createOnClickPreviousMonth(this);
  onFocusTime = createOnFocusTime(this);
  onBlurTime = createOnBlurTime(this);
  onChangeTime = createOnChangeTime(this);
  onClickDate = createOnClickDate(this);

  convertTimeValueToString = createConvertTimeValueToString();
  getCalendarMonthWeeks = createGetCalendarMonthWeeks(this);
  isActiveDay = createIsActiveDay(this);
  isDisabledDay = createIsDisabledDay(this);

  renderCalendarMonthWeeks() {
    const viewMonth = this.state.viewDate.month();
    const calendarMonthWeeks = this.getCalendarMonthWeeks();
    const weekNodes = [];

    calendarMonthWeeks.forEach((week) => {
      const dayNodes = [];
      const key = `week-of-${week[0].format('YYYY-DD-MM')}`;

      week.forEach((day) => {
        let isOtherMonth = day.month() !== viewMonth;
        let key = day.format('YYYY-DD-MM');

        dayNodes.push(
          <DatePickerDay
            disabled={this.isDisabledDay(day)}
            isActive={this.isActiveDay(day)}
            isOtherMonth={isOtherMonth}
            key={key}
            onClick={this.onClickDate(day)}
          >
            {day.date()}
          </DatePickerDay>
        );
      });

      weekNodes.push(<WeekStyled key={key}>{dayNodes}</WeekStyled>);
    });

    return weekNodes;
  }

  renderTime() {
    if (!this.props.displayTime) {
      return null;
    }

    return (
      <TimeContainerStyled>
        <TimeTextboxStyled
          data-form-field="hours"
          onBlur={this.onBlurTime}
          onChange={this.onChangeTime}
          onFocus={this.onFocusTime}
          value={this.state.hours}
        />:
        <TimeTextboxStyled
          data-form-field="minutes"
          onBlur={this.onBlurTime}
          onChange={this.onChangeTime}
          onFocus={this.onFocusTime}
          value={this.state.minutes}
        />:
        <TimeTextboxStyled
          data-form-field="seconds"
          onBlur={this.onBlurTime}
          onChange={this.onChangeTime}
          onFocus={this.onFocusTime}
          value={this.state.seconds}
        />
      </TimeContainerStyled>
    );
  }

  renderClose() {
    if (!this.props.onClose) {
      return null;
    }

    return <ButtonStyled onClick={this.props.onClose}>Close</ButtonStyled>;
  }

  render() {
    const {children, onClickDate, selectedDay, minDate, maxDate, displayTime, onClose, ...restOfProps} = this.props;

    return (
      <ContainerStyled {...restOfProps}>
        <TopBarStyled>
          <PreviousMonthIconStyled
            icon="KeyboardArrowLeft"
            onClick={this.onClickPreviousMonth}
          />
          <TopBarMonthTextStyled>{this.state.viewDate.format('MMMM YYYY')}</TopBarMonthTextStyled>
          <NextMonthIconStyled
            icon="KeyboardArrowRight"
            onClick={this.onClickNextMonth}
          />
        </TopBarStyled>
        <DaysOfWeekStyled>
          <DayOfWeekStyled>Su</DayOfWeekStyled>
          <DayOfWeekStyled>Mo</DayOfWeekStyled>
          <DayOfWeekStyled>Tu</DayOfWeekStyled>
          <DayOfWeekStyled>We</DayOfWeekStyled>
          <DayOfWeekStyled>Th</DayOfWeekStyled>
          <DayOfWeekStyled>Fr</DayOfWeekStyled>
          <DayOfWeekStyled>Sa</DayOfWeekStyled>
        </DaysOfWeekStyled>
        <DaysContainerStyled>{this.renderCalendarMonthWeeks()}</DaysContainerStyled>
        {this.renderTime()}
        {this.renderClose()}
      </ContainerStyled>
    );
  }
}

export default DatePicker;
