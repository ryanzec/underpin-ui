import styled from 'styled-components';

import * as structureCss from 'src/styles/structure';
import * as themesCss from 'src/styles/themes';

export const PopoverContent = styled.div`
  padding: 8px;
  border: 1px solid ${themesCss.light.global.gray4};
  background-color: ${themesCss.light.global.white};
  border-radius: ${structureCss.borderRadius.tiny};
`;

export default PopoverContent;
