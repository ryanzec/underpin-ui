import PropTypes from 'prop-types';
import {createElement} from 'react';
import styled from 'styled-components';

import * as structureCss from 'src/styles/structure';

export const styleTypeStyles = (props) => {
  if (!props.styleType) {
    return '';
  }

  return `
    list-style: none;
    padding: 0;
  `;
};

export const baseContainerStyles = (props) => {
  return `
    & > & {
      padding: 0 0 0 ${structureCss.spacing.small};
    }

    ${styleTypeStyles(props)}
  `;
};

export const List = styled(({tag, children, styleType, ...props}) => createElement(tag, props, children))`
  ${baseContainerStyles};
`;

List.propsTypes = {
  styleType: PropTypes.oneOf(['plain']),
  tag: PropTypes.oneOf(['ol', 'ul']),
};

List.defaultProps = {
  styleType: null,
  tag: 'ul',
};

export default List;
