import styled from 'styled-components';

import * as breadCrumbCss from 'src/components/Breadcrumb/internal/breadCrumbCss';

export const Crumb = styled.a`
  ${props => (props.isActive ? `color: ${breadCrumbCss.variables.activeColor};` : '')};
`;

export default Crumb;
