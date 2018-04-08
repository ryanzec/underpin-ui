import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as themesCss from 'src/styles/themes';

export const ExtendTextAutoCompleteOption = styled.div`
  padding: 8px;
  cursor: pointer;

  ${props => (props.isActive ? `background-color: ${themesCss.light.global.blue1}` : '')};
`;

ExtendTextAutoCompleteOption.propsTypes = {
  isActive: PropTypes.bool,
};

ExtendTextAutoCompleteOption.defaultProps = {
  isActive: false,
};

export default ExtendTextAutoCompleteOption;
