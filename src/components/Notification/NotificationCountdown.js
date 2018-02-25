import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

export const ContainerStyled = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
`;

export const createComponentDidMount = (instance) => {
  return () => {
    instance.runCountdownUpdater();
  };
};

export const createRunCountdownUpdate = (instance) => {
  return () => {
    const now = new Date().getTime();

    instance.time = now;
    let timeLeft = instance.timeLength - (instance.time - instance.start);

    if (timeLeft < 0) {
      timeLeft = 0;
    }

    const percentage = parseFloat(timeLeft / instance.timeLength * 100).toFixed(2);

    if (instance.countdownElement) {
      ReactDOM.findDOMNode(instance.countdownElement).style.width = `${percentage}%`;

      if (percentage > 0) {
        requestAnimationFrame(instance.runCountdownUpdater.bind(instance));
      }
    }
  };
};

export const createSetCountdownElement = (instance) => {
  return (element) => {
    instance.countdownElement = element;
  };
};

class NotificationCountdown extends PureComponent {
  static propTypes = {
    length: PropTypes.number.isRequired,
  };

  static defaultProps = {
    length: 0,
  };

  componentDidMount = createComponentDidMount(this);

  time = 0;
  timeLength = this.props.length;
  start = new Date().getTime();
  countdownElement = null;

  setCountdownElement = createSetCountdownElement(this);
  runCountdownUpdater = createRunCountdownUpdate(this);

  render() {
    return <ContainerStyled ref={this.setCountdownElement} />;
  }
}

export default NotificationCountdown;
