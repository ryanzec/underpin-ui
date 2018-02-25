import styled from 'styled-components';

import * as cardCss from 'src/components/Card/internal/cardCss';

export const CardContent = styled.div`
  padding: ${cardCss.variables.padding};

  &:first-child {
    border-top-left-radius: ${cardCss.variables.borderRadius};
    border-top-right-radius: ${cardCss.variables.borderRadius};
  }

  &:last-child {
    border-bottom-left-radius: ${cardCss.variables.borderRadius};
    border-bottom-right-radius: ${cardCss.variables.borderRadius};
  }
`;

export default CardContent;
