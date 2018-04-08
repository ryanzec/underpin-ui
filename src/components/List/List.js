import PropTypes from 'prop-types';
import {createElement} from 'react';
import styled, {css} from 'styled-components';

import * as listCss from 'src/components/List/internal/listCss';

export const styleTypeStyles = (props) => {
  if (props.styleType !== 'plain') {
    return '';
  }

  return css`
    list-style: none;
    padding: 0;
  `;
};

export const nestedStyles = (props) => {
  let marginLeft = 0;

  if (props.isExpandable) {
    marginLeft = `calc(calc(${listCss.variables.paddingLeft} + ${listCss.variables.expandableIcon.size}) * -1)`;
  }

  return css`
    & & {
      margin-left: ${marginLeft};
      padding: 0 0 0 ${listCss.variables.paddingLeft};
    }

    & & li:first-child {
      padding-top: 0;
    }

    & & li:last-child {
      padding-bottom: 0;
    }
  `;
};

export const baseContainerStyles = (props) => {
  return css`
    line-height: 1.6rem;
    ${nestedStyles(props)} ${styleTypeStyles(props)};
  `;
};

export const List = styled(({tag, children, styleType, ...props}) => createElement(tag, props, children))`
  ${baseContainerStyles};
`;

List.propsTypes = {
  isExpandable: PropTypes.bool,
  styleType: PropTypes.oneOf(['plain']),
  tag: PropTypes.oneOf(['ol', 'ul']),
};

List.defaultProps = {
  isExpandable: false,
  styleType: null,
  tag: 'ul',
};

export default List;
