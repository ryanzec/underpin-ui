import {capitalize} from 'lodash';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import * as badgeCss from 'src/components/Badge/internal/badgeCss';
import * as buttonCss from 'src/components/Button/internal/buttonCss';
import * as cssUtils from 'src/utils/css';
import * as React from 'react';

export const baseStyles = () => {
  return `
    display: inline-flex;
    align-items: center;
    padding: ${badgeCss.variables.padding};
    border-radius: ${badgeCss.variables.borderRadius};
    margin-right: ${buttonCss.variables.margin};
    font-size: ${badgeCss.variables.fontSize};
    border: ${badgeCss.variables.borderWidthThin} solid ${badgeCss.variables.backgroundColor};
    ${cssUtils.fillColors(badgeCss.variables.color, badgeCss.variables.backgroundColor)}
  `;
};

export const pillStyles = (props: IBadgeProps) => {
  if (!props.isPill) {
    return '';
  }

  return `
    border-radius: ${badgeCss.variables.borderRadiusPill};
  `;
};

export const styleTypeStyles = (props: IBadgeProps) => {
  const backgroundColor = props.styleType
    ? badgeCss.variables[`backgroundColor${capitalize(props.styleType)}`]
    : badgeCss.variables.backgroundColor;

  return props.isThin
    ? cssUtils.thinColors(backgroundColor)
    : cssUtils.fillColors(badgeCss.variables.color, backgroundColor);
};

export interface IBadgeProps {
  className?: string;
  styleType?: 'safe' | 'info' | 'warning' | 'danger';
  isPill: boolean;
  isThin: boolean;
}

export class BadgeComponent extends React.Component<IBadgeProps, {}> {
  render() {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}

export const Badge = styled(BadgeComponent)`
  ${baseStyles}
  ${pillStyles}
  ${styleTypeStyles}
`;

Badge.defaultProps = {
  styleType: null,
  isPill: false,
  isThin: false,
};

export default Badge;
