import styled from 'styled-components';

import * as themesCss from 'src/styles/themes';

export const DropDownMenu = styled.div`
  background-color: ${themesCss.light.global.white};
  border: 1px solid ${themesCss.light.application.border};
  border-radius: 3px;
`;

export default DropDownMenu;
