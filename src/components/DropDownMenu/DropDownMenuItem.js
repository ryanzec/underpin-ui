import styled from 'styled-components';

import * as themesCss from 'src/styles/themes';

export const DropDownMenuItem = styled.div`
  cursor: pointer;
  padding: 6px 12px;

  &:hover {
    background-color: ${themesCss.light.state.info};
    color: ${themesCss.light.application.textLightColor};
  }
`;

export default DropDownMenuItem;
