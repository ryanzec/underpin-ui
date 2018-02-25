import PropTypes from 'prop-types';
import styled from 'styled-components';

export const TableBodyItem = styled.td`
  border: 0;
  vertical-align: top;
  text-align: ${props => props.alignment};
`;

TableBodyItem.propsTypes = {
  alignment: PropTypes.oneOf(['left', 'right', 'center']),
};

TableBodyItem.defaultProps = {
  alignment: 'left',
};

export default TableBodyItem;
