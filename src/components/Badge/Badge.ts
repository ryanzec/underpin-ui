import {capitalize} from 'lodash';
// import * as styledComponents from 'styled-components';
import * as PropTypes from 'prop-types';
// const capitalize = require('lodash/capitalize');
import styled from 'styled-components';
// console.log(capitalize);
// console.log(test);

import * as badgeCss from 'src/components/Badge/internal/badgeCss';
import * as buttonCss from 'src/components/Button/internal/buttonCss';
import * as cssUtils from 'src/utils/css';
import {Component} from 'react/index';

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

export const pillStyles = (props: any) => {
  if (!props.isPill) {
    return '';
  }

  return `
    border-radius: ${badgeCss.variables.borderRadiusPill};
  `;
};

export const styleTypeStyles = (props: any) => {
  if (!props.styleType) {
    return '';
  }

  const backgroundColor = props.styleType
    ? badgeCss.variables[`backgroundColor${capitalize(props.styleType)}`]
    : badgeCss.variables.backgroundColor;

  return props.isThin
    ? cssUtils.thinColors(backgroundColor)
    : cssUtils.fillColors(badgeCss.variables.color, backgroundColor);
};

export interface IBadgeProps {
  styleType: 'safe' | 'info' | 'warning' | 'danger';
  isPill: boolean;
  isThin: boolean;
}

export class ExampleComponent extends Component<IBadgeProps, {}> {}

export const Badge = styled(ExampleComponent)`
  ${baseStyles}
  ${pillStyles}
  ${styleTypeStyles}
`;

// Badge.propTypes = {
//   styleType: PropTypes.oneOf(['safe', 'info', 'warning', 'danger']),
//   isPill: PropTypes.bool,
//   isThin: PropTypes.bool,
// };

Badge.defaultProps = {
  styleType: null,
  isPill: false,
  isThin: false,
};

export default Badge;
