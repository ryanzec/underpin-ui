import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import styled from 'styled-components';

import * as structureCss from 'src/styles/structure';
import * as themesCss from 'src/styles/themes';
import * as formCss from 'src/components/Form/internal/formCss';

import SvgIcon from 'src/components/SvgIcon/SvgIcon';

export const validationStyled = (props) => {
  if (!props.validation) {
    return '';
  }

  const darkColor = props.validation === 'valid' ? themesCss.light.state.successDark : themesCss.light.state.dangerDark;

  return `
    color: ${darkColor};
  `;
};

export const ContainerStyled = styled.div`
  display: flex;
  align-items: center;

  &:not(first-child) {
    padding-top: ${structureCss.spacing.extraTiny};
  }

  ${validationStyled};
`;

ContainerStyled.propsTypes = {
  validation: PropTypes.oneOf(['valid', 'invalid']),
};

ContainerStyled.defaultProps = {
  validation: null,
};

export const SvgIconStyled = styled(SvgIcon)`
  height: ${formCss.variables.sizeValidationIconInput};
  width: ${formCss.variables.sizeValidationIconInput};
  margin-right: ${formCss.variables.paddingValidationIcon};
`;

class FormValidationMessage extends PureComponent {
  static propTypes = {
    icon: PropTypes.string,
    validation: PropTypes.oneOf(['valid', 'invalid']),
  };

  static defaultProps = {
    icon: null,
    validation: null,
  };

  render() {
    const {children, icon, ...restOfProps} = this.props;

    let iconNode = null;

    if (this.props.icon) {
      iconNode = <SvgIconStyled icon={this.props.icon} />;
    }

    return (
      <ContainerStyled {...restOfProps}>
        {iconNode}
        {this.props.children}
      </ContainerStyled>
    );
  }
}

export default FormValidationMessage;
