import styled from 'styled-components';

import * as structureCss from 'src/styles/structure';
import * as themesCss from 'src/styles/themes';

export const TooltipContent = styled.div`
  padding: ${structureCss.spacing.extraTiny};
  color: ${themesCss.light.application.textLightColor};
  background-color: rgba(10, 10, 10, 0.8);
  border-radius: 3px;
`;

export default TooltipContent;
