import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import styled from 'styled-components';
import capitalize from 'lodash/capitalize';
import * as MaterialIcons from 'react-icons/lib/md';

import * as themesCss from 'src/styles/themes';
import * as svgIconCss from 'src/components/SvgIcon/internal/svgIconCss';

export const applyInnerStatusColors = (props) => {
  if (!props.styleType) {
    return '';
  }

  const color = svgIconCss.variables[`color${capitalize(props.styleType)}`];

  return `
    color: ${color};
  `;
};

export const applyIndicatorStatusColors = (props) => {
  if (!props.indicator) {
    return '';
  }

  const backgroundColor = svgIconCss.variables[`color${capitalize(props.indicator)}`];

  return `
    background-color: ${backgroundColor};
  `;
};

export const SvgIconOuterStyled = styled.div`
  display: inline-flex;
  user-select: none;
`;

export const SvgIconInnerStyled = styled.div`
  display: inline-flex;
  position: relative;
  width: 16px;
  height: 16px;

  ${applyInnerStatusColors} > svg {
    height: 100%;
    width: 100%;
  }
`;

export const SvgIconIndicatorStyled = styled.div`
  height: 0.9rem;
  width: 0.9rem;
  border-radius: 50%;
  border: 1px solid ${themesCss.light.global.white};
  position: absolute;
  top: -2px;
  right: -2px;
  background-color: ${themesCss.light.application.textDarkColor};

  ${applyIndicatorStatusColors};
`;

SvgIconIndicatorStyled.propsTypes = {
  styleType: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
  indicator: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
};

SvgIconIndicatorStyled.defaultProps = {
  styleType: null,
  indicator: null,
};

class SvgIcon extends PureComponent {
  static propTypes = {
    styleType: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
    indicator: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
    icon: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styleType: null,
    indicator: null,
  };

  render() {
    const {children, styleType, indicator, icon, ...restOfProps} = this.props;

    const IconComponent = MaterialIcons[`Md${icon}`];

    if (process.env.NODE_ENV !== 'production') {
      if (!IconComponent) {
        console.error(`could not find the icon  '${icon}'`);
      }
    }

    let indicatorNode;

    if (indicator) {
      indicatorNode = <SvgIconIndicatorStyled indicator={indicator} />;
    }

    return (
      <SvgIconOuterStyled {...restOfProps}>
        <SvgIconInnerStyled styleType={styleType}>
          <IconComponent />
          {indicatorNode}
        </SvgIconInnerStyled>
      </SvgIconOuterStyled>
    );
  }
}

export default SvgIcon;
