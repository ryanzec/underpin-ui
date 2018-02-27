import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import styled from 'styled-components';
import {capitalize} from 'lodash';

import * as structureCss from 'src/styles/structure';
import * as themesCss from 'src/styles/themes';
import * as buttonCss from 'src/components/Button/internal/buttonCss';

import Button from 'src/components/Button/Button';
import SvgIcon from 'src/components/SvgIcon/SvgIcon';

export const fillStyles = (props) => {
  let color = props.styleType === 'link' ? themesCss.light.application.textLinkColor : buttonCss.variables.color;

  if (props.isThin && props.styleType) {
    color = buttonCss.variables[`backgroundColor${capitalize(props.styleType)}`];
  }

  return `
    fill: ${color};
  `;
};

export const baseContainerStyles = () => {
  return `
    margin-right: ${structureCss.spacing.extraTiny};
  `;
};

const StyledSvgIcon = styled(SvgIcon)`
  ${baseContainerStyles} ${fillStyles};
`;

StyledSvgIcon.propTypes = {
  styleType: PropTypes.oneOf(['success', 'info', 'warning', 'danger', 'link']),
  isThin: PropTypes.bool,
};

StyledSvgIcon.defaultProps = {
  styleType: null,
  isThin: false,
};

export class SvgIconButton extends PureComponent {
  static propTypes = {
    icon: PropTypes.string.isRequired,
  };

  render() {
    const {children, icon, ...restOfProps} = this.props;

    return (
      <Button {...restOfProps}>
        <StyledSvgIcon icon={icon} />
        {this.props.children}
      </Button>
    );
  }
}

export default SvgIconButton;
