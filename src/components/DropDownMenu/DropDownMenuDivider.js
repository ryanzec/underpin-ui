import styled from 'styled-components';

import * as themesCss from 'src/styles/themes';

export const DropDownMenuDivider = styled.div`
  padding: 0 12px;
  height: 1px;
  border-bottom: 1px solid ${themesCss.light.application.borderColor};
`;

export default DropDownMenuDivider;
