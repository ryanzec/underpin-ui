import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import styled from 'styled-components';
import capitalize from 'lodash/capitalize';

import * as themesCss from 'src/styles/themes';
import * as notificationCss from 'src/components/Notification/internal/notificationCss';

import SvgIcon from 'src/components/SvgIcon/SvgIcon';

export const styleTypeStyles = (props) => {
  if (!props.styleType) {
    return '';
  }

  const color = props.isFilled
    ? themesCss.light.global.white
    : notificationCss.variables[`color${capitalize(props.styleType)}Dark`];

  return `
    color: ${color}
  `;
};

export const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;

  ${styleTypeStyles};
`;

ContainerStyled.propsTypes = {
  styleType: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
};

ContainerStyled.defaultProps = {
  styleType: null,
};

export const ActionStyled = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;

export const DividerStyled = styled.span`
  margin-left: calc(${notificationCss.variables.padding} / 2);
  margin-right: calc(${notificationCss.variables.padding} / 2);
`;

class NotificationActions extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(['icons', 'text']),
    actions: PropTypes.oneOf(['positive', 'negative', 'both']),
    onClickPositive: PropTypes.func,
    onClickNegative: PropTypes.func,
    isFilled: PropTypes.bool,
    styleType: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
  };

  static defaultProps = {
    type: 'icons',
    actions: 'negative',
    onClickPositive: null,
    onClickNegative: null,
    isFilled: false,
    styleType: 'info',
  };

  renderTextActions() {
    let nodes;
    const positiveNode = (
      <ActionStyled
        key="0"
        onClick={this.props.onClickPositive}
      >
        Accept
      </ActionStyled>
    );
    const negativeNode = (
      <ActionStyled
        key="1"
        onClick={this.props.onClickNegative}
      >
        Decline
      </ActionStyled>
    );
    const dividerNode = <DividerStyled key="2">|</DividerStyled>;

    if (this.props.actions === 'negative') {
      nodes = [negativeNode];
    } else if (this.props.actions === 'positive') {
      nodes = [positiveNode];
    } else {
      nodes = [negativeNode, dividerNode, positiveNode];
    }

    return nodes;
  }

  renderIconActions() {
    let nodes;
    const positiveNode = (
      /* eslint-workaround */
      <SvgIcon
        icon="Check"
        key="0"
        onClick={this.props.onClickPositive}
      />
    );
    const negativeNode = (
      /* eslint-workaround */
      <SvgIcon
        icon="Clear"
        key="1"
        onClick={this.props.onClickNegative}
      />
    );

    if (this.props.actions === 'negative') {
      nodes = [negativeNode];
    } else if (this.props.actions === 'positive') {
      nodes = [positiveNode];
    } else {
      nodes = [negativeNode, positiveNode];
    }

    return nodes;
  }

  render() {
    const {children, type, actions, onClickPositive, onClickNegative, ...restOfProps} = this.props;

    return (
      <ContainerStyled {...restOfProps}>
        {this.props.type === 'icons' ? this.renderIconActions() : this.renderTextActions()}
      </ContainerStyled>
    );
  }
}

export default NotificationActions;
