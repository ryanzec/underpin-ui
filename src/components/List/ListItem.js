import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import * as listCss from 'src/components/List/internal/listCss';

export const containerStyles = (props) => {
  let paddingLeft = 0;
  let display = 'list-item';

  if (props.isExpandable) {
    paddingLeft = `calc(${listCss.variables.paddingLeft} + ${listCss.variables.expandableIcon.size})`;

    if (!props.isExpanded) {
      display = 'none';
    }
  }

  return css`
    display: ${display};
    padding: 2px 0 2px ${paddingLeft};

    &:first-child {
      padding-top: 0;
    }
  `;
};

export const ListItem = styled.li`
  ${containerStyles};
`;

ListItem.propsTypes = {
  isExpandable: PropTypes.bool,
  isExpanded: PropTypes.bool,
};

ListItem.defaultProps = {
  isExpandable: false,
  isExpanded: false,
};

export default ListItem;
