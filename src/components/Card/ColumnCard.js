import styled from 'styled-components';

import * as cardCss from 'src/components/Card/internal/cardCss';

import Card from 'src/components/Card/Card';

export const CardColumn = styled(Card)`
  margin-bottom: ${cardCss.variables.marginCardCardColumn};
`;

export default CardColumn;
