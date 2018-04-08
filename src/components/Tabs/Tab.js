import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as structureCss from 'src/styles/structure';
import * as themesCss from 'src/styles/themes';

const tabHoverStyles = () => {
  return `
    background-color: ${themesCss.light.global.gray2};
    border-color: ${themesCss.light.application.textLinkColor};
  `;
};

export const Tab = styled.div`
  padding: ${structureCss.spacing.extraSmall};
  margin: 0;
  border-radius: 0;
  border-bottom: 3px solid transparent;
  cursor: pointer;

  &:hover {
    ${tabHoverStyles};
  }

  ${props => (props.isActive ? tabHoverStyles() : '')};
`;

Tab.propsTypes = {
  isActive: PropTypes.bool,
};

Tab.defaultProps = {
  isActive: false,
};

export default Tab;
