import styled from 'styled-components';

import * as cardCss from 'src/components/Card/internal/cardCss';

export const CardFooter = styled.div`
  color: ${cardCss.variables.colorFooterHeader};
  border-bottom-left-radius: ${cardCss.variables.borderRadius};
  border-bottom-right-radius: ${cardCss.variables.borderRadius};
  background-color: ${cardCss.variables.backgroundColorHeaderFooter};
  padding: ${cardCss.variables.padding};
`;

export default CardFooter;
