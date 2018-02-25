import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as themesCss from 'src/styles/themes';

export const Tabs = styled.div`
  display: flex;
  ${props => (!props.isBlock ? `border-bottom: 1px solid ${themesCss.light.state.active};` : '')};
`;

Tabs.propsTypes = {
  isBlock: PropTypes.bool,
};

Tabs.defaultProps = {
  isBlock: false,
};

export default Tabs;
