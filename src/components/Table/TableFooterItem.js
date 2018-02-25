import PropTypes from 'prop-types';
import styled from 'styled-components';

export const TableFooterItem = styled.td`
  border: 0;
  vertical-align: top;
  text-align: ${props => props.alignment};
`;

TableFooterItem.propsTypes = {
  alignment: PropTypes.oneOf(['left', 'right', 'center']),
};

TableFooterItem.defaultProps = {
  alignment: 'left',
};

export default TableFooterItem;
