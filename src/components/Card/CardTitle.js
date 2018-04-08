import styled from 'styled-components';

import * as cardCss from 'src/components/Card/internal/cardCss';

export const CardTitle = styled.div`
  padding: ${cardCss.variables.padding} ${cardCss.variables.padding} 0 ${cardCss.variables.padding};
  margin: 0;

  &:first-child {
    border-top-left-radius: ${cardCss.variables.borderRadius};
    border-top-right-radius: ${cardCss.variables.borderRadius};
  }
`;

export default CardTitle;
