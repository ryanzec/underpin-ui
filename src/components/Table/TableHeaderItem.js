import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as themesCss from 'src/styles/themes';

export const TableHeaderItem = styled.th`
  border: 0;
  vertical-align: top;
  text-align: ${props => props.alignment};
  ${props => (props.isVertical ? `background-color: ${themesCss.light.global.gray2};` : '')};
`;

TableHeaderItem.propsTypes = {
  alignment: PropTypes.oneOf(['left', 'right', 'center']),
  isVertical: PropTypes.bool,
};

TableHeaderItem.defaultProps = {
  alignment: 'left',
  isVertical: false,
};

export default TableHeaderItem;
