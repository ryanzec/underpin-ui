import styled from 'styled-components';

import * as cardCss from 'src/components/Card/internal/cardCss';

export const CardActions = styled.div`
  padding: 0 ${cardCss.variables.padding} ${cardCss.variables.padding} ${cardCss.variables.padding};

  &:last-child {
    border-bottom-left-radius: ${cardCss.variables.borderRadius};
    border-bottom-right-radius: ${cardCss.variables.borderRadius};
  }
`;

export default CardActions;
