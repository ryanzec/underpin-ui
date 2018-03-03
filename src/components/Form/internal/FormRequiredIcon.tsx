import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as React from 'react';
import * as themesCss from 'src/styles/themes';
import * as formCss from 'src/components/Form/internal/formCss';

import SvgIcon from 'src/components/SvgIcon/SvgIcon';

export interface FormRequiredIconPropTypes {
  icon: string;
  poop?: string;
}

export const FormRequiredIconStyled = styled(SvgIcon)`
  height: ${formCss.variables.sizeRequiredIconInput};
  width: ${formCss.variables.sizeRequiredIconInput};
  color: ${themesCss.light.state.danger};
  position: relative;
  left: 3px;
  top: -5px;
`;

export class FormRequiredIcon extends React.PureComponent<FormRequiredIconPropTypes, {}> {
  render() {
    return <FormRequiredIconStyled {...this.props} />;
  }
}

export default FormRequiredIcon;
