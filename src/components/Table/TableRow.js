import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as themesCss from 'src/styles/themes';

export const zebraStyles = (props) => {
  if (!props.isZebra) {
    return '';
  }

  return `
    border: 1px solid ${themesCss.light.application.borderColor};

    &:nth-child(2n+0) {
      background-color: ${themesCss.light.global.blue1};
    }
  `;
};

export const TableRow = styled.tr`
  border: ${props => (props.isBorderless ? '0' : `1px solid ${themesCss.light.application.borderColor}`)};

  ${zebraStyles};
`;

TableRow.propsTypes = {
  isZebra: PropTypes.bool,
  isBorderless: PropTypes.bool,
  isInHeader: PropTypes.bool,
};

TableRow.defaultProps = {
  isZebra: false,
  isBorderless: false,
  isInHeader: false,
};

export default TableRow;
