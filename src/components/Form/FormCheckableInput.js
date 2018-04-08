import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import styled from 'styled-components';

import * as structureCss from 'src/styles/structure';
import * as themesCss from 'src/styles/themes';
import * as formCss from 'src/components/Form/internal/formCss';

import FormLabel from './FormLabel';
import SvgIcon from 'src/components/SvgIcon/SvgIcon';

export const FormLabelStyled = styled(FormLabel)`
  ${formCss.checkableLabelStyles()};
`;

export const alignmentIconStyles = (props) => {
  const alignmentMarginMap = {
    left: 'right',
    right: 'left',
  };

  return `
    margin-${alignmentMarginMap[props.inputAlignment]}: ${structureCss.spacing.extraTiny};
  `;
};

export const validationStyles = (props) => {
  const getColor = () => {
    if (props.disabled) {
      return themesCss.light.global.gray4;
    }

    if (props.validation) {
      return themesCss.light.state[props.validation === 'valid' ? 'success' : 'danger'];
    }

    return themesCss.light.global.blue2;
  };

  return `
    color: ${getColor()};
  `;
};

export const SvgIconStyled = styled(SvgIcon)`
  ${validationStyles} ${alignmentIconStyles};
`;

SvgIconStyled.propsTypes = {
  disabled: PropTypes.bool,
  validation: PropTypes.oneOf(['valid', 'invalid']),
  inputAlignment: PropTypes.oneOf(['left', 'right']),
};

SvgIconStyled.defaultProps = {
  disabled: false,
  validation: null,
  inputAlignment: 'left',
};

export const InputStyled = styled.input`
  display: none;
`;

export const createGetSvgIcon = (instance) => {
  return () => {
    const {checked, type} = instance.props;

    if (type === 'checkbox') {
      return checked ? 'CheckBox' : 'CheckBoxOutlineBlank';
    }

    return checked ? 'RadioButtonChecked' : 'RadioButtonUnchecked';
  };
};

class FormCheckableInput extends PureComponent {
  static propTypes = {
    inputAlignment: PropTypes.oneOf(['left', 'right']),
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    validation: PropTypes.oneOf(['valid', 'invalid']),
    type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  };

  static defaultProps = {
    inputAlignment: 'left',
    checked: false,
    disabled: false,
    validation: null,
  };

  getSvgIcon = createGetSvgIcon(this);

  render() {
    const {children, inputAlignment, validation, checked, disabled, type, ...restOfProps} = this.props;
    const textNode = <span key="text">{children}</span>;
    const iconNode = (
      <SvgIconStyled
        disabled={disabled}
        icon={this.getSvgIcon()}
        inputAlignment={inputAlignment}
        key="icon"
        validation={validation}
      />
    );

    let nodes;

    if (inputAlignment === 'left') {
      nodes = [iconNode, textNode];
    } else {
      nodes = [textNode, iconNode];
    }

    return (
      <FormLabelStyled
        inputAlignment={inputAlignment}
        type={type}
      >
        <InputStyled
          checked={checked}
          disabled={disabled}
          type={type}
          {...restOfProps}
        />
        {nodes}
      </FormLabelStyled>
    );
  }
}

export default FormCheckableInput;
