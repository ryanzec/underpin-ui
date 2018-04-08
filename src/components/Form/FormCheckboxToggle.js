import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import styled from 'styled-components';

import * as structureCss from 'src/styles/structure';
import * as themesCss from 'src/styles/themes';
import * as formCss from 'src/components/Form/internal/formCss';

export const ContainerStyled = styled.div`
  position: relative;
  cursor: pointer;
  text-align: right;

  ${props => (props.checked ? 'text-align: left;' : '')};
`;

ContainerStyled.propsTypes = {
  checked: PropTypes.bool,
};

ContainerStyled.defaultProps = {
  checked: false,
};

export const ToggleBarStyled = styled.div`
  ${formCss.checkboxToggleBarSizerStyles()} color: ${themesCss.light.global.white};
  background-color: ${props => (props.checked ? themesCss.light.global.green2 : themesCss.light.global.gray4)};
  border-radius: ${structureCss.borderRadius.pill};
`;

ToggleBarStyled.propsTypes = {
  checked: PropTypes.bool,
};

ToggleBarStyled.defaultProps = {
  checked: false,
};

export const ToggleCircleStyled = styled.div`
  ${props => formCss.checkboxToggleCircleSizerStyles(props.checked)} position: absolute;
  background-color: ${themesCss.light.global.white};
  border-radius: ${structureCss.borderRadius.pill};
  transition: transform 0.1s ease;
`;

ToggleCircleStyled.propsTypes = {
  checked: PropTypes.bool,
};

ToggleCircleStyled.defaultProps = {
  checked: false,
};

class FormCheckboxToggle extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    offNode: PropTypes.node,
    onNode: PropTypes.node,
  };

  static defaultProps = {
    checked: false,
    offNode: 'Off',
    onNode: 'On',
  };

  render() {
    const {checked, offNode, onNode, ...restOfProps} = this.props;

    return (
      <ContainerStyled
        checked={checked}
        {...restOfProps}
      >
        <ToggleCircleStyled checked={checked} />
        <ToggleBarStyled checked={checked}>
          <span>{checked ? onNode : offNode}</span>
        </ToggleBarStyled>
      </ContainerStyled>
    );
  }
}

export default FormCheckboxToggle;
