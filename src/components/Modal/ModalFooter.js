import styled from 'styled-components';

import * as structureCss from 'src/styles/structure';
import * as themesCss from 'src/styles/themes';
import * as cssUtils from 'src/utils/css';

export const ModalFooter = styled.div`
  ${cssUtils.flexboxSpecificValue('height', '60px')} display: flex;
  align-items: center;
  padding: ${structureCss.spacing.extraSmall};
  border-top: 1px solid ${themesCss.light.application.border};
`;

export default ModalFooter;
