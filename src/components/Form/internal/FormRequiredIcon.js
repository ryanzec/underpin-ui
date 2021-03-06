import styled from 'styled-components';

import * as themesCss from 'src/styles/themes';
import * as formCss from 'src/components/Form/internal/formCss';

import SvgIcon from 'src/components/SvgIcon/SvgIcon';

export const FormRequiredIcon = styled(SvgIcon)`
  height: ${formCss.variables.sizeRequiredIconInput};
  width: ${formCss.variables.sizeRequiredIconInput};
  color: ${themesCss.light.state.danger};
  position: relative;
  left: 3px;
  top: -5px;
`;

export default FormRequiredIcon;
