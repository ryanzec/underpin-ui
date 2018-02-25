import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as structureCss from 'src/styles/structure';

export const ListItem = styled.li`
  ${props =>
    props.isExpandable
      ? `padding-left: calc(${structureCss.spacing.extraTiny} + 12px + ${structureCss.spacing.small});`
      : ''};
`;

ListItem.propsTypes = {
  isExpandable: PropTypes.bool,
};

ListItem.defaultProps = {
  isExpandable: false,
};

export default ListItem;
