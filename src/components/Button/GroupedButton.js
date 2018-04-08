import styled from 'styled-components';

import * as buttonCss from 'src/components/Button/internal/buttonCss';

import Button from 'src/components/Button/Button';

export const baseContainerStyles = () => {
  return `
    margin: 0;
    border-radius: 0;

    &:first-child {
      border-radius: ${buttonCss.variables.borderRadius} 0 0 ${buttonCss.variables.borderRadius};
    }

    &:last-child {
      border-radius: 0 ${buttonCss.variables.borderRadius} ${buttonCss.variables.borderRadius} 0;
    }
  `;
};

export const GroupedButton = styled(Button)`
  ${baseContainerStyles};
`;

export default GroupedButton;
