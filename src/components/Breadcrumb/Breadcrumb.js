import styled from 'styled-components';

import * as breadCrumbCss from 'src/components/Breadcrumb/internal/breadCrumbCss';

export const Breadcrumb = styled.div`
  font-size: 1.6rem;

  & + &::before {
    content: '>';
    color: ${breadCrumbCss.variables.dividerColor};
    padding: ${breadCrumbCss.variables.dividerPadding};
  }
`;

export default Breadcrumb;
