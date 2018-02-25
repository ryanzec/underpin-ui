import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  text-align: ${props => (props.isVertical ? 'center' : props.alignment)};
`;

Table.propsTypes = {
  alignment: PropTypes.oneOf(['left', 'right', 'center']),
  isVertical: PropTypes.bool,
};

Table.defaultProps = {
  alignment: 'center',
  isVertical: false,
};

export default Table;
