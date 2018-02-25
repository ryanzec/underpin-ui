import styled from 'styled-components';

import * as buttonCss from 'src/components/Button/internal/buttonCss';
import * as cssUtils from 'src/utils/css';

import Button from 'src/components/Button/Button';

export const baseContainerStyles = () => {
  return `
    margin: 0;
    border-radius: 0;

    &:first-child {
      ${cssUtils.borderRadius('left', buttonCss.variables.borderRadius)}
    }

    &:last-child {
      ${cssUtils.borderRadius('right', buttonCss.variables.borderRadius)}
    }
  `;
};

export const GroupedButton = styled(Button)`
  ${baseContainerStyles};
`;

export default GroupedButton;
