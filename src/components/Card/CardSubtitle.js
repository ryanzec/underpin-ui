import styled from 'styled-components';

import * as cardCss from 'src/components/Card/internal/cardCss';

export const CardSubtitle = styled.div`
  padding: calc(${cardCss.variables.padding} / 4) ${cardCss.variables.padding} 0 ${cardCss.variables.padding};
  margin: 0;
  color: ${cardCss.variables.colorSubtitle};
`;

export default CardSubtitle;
