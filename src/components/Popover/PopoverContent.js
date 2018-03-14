import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {createPortal} from 'react-dom';
import styled, {css} from 'styled-components';

import * as structureCss from 'src/styles/structure';
import * as themesCss from 'src/styles/themes';

export const containerStyles = (props) => {
  if (props.isPlain) {
    return null;
  }

  return css`
    padding: 8px;
    border: 1px solid ${themesCss.light.global.gray4};
    background-color: ${themesCss.light.global.white};
    border-radius: ${structureCss.borderRadius.tiny};
  `;
};

export const ContainerStyled = styled.div`
  ${containerStyles};
`;

ContainerStyled.propTypes = {
  isPlain: PropTypes.bool,
};

ContainerStyled.defaultProps = {
  isPlain: true,
};

export class PopoverContent extends PureComponent {
  static propTypes = {
    isPlain: PropTypes.bool,
  };

  static defaultProps = {
    isPlain: true,
  };

  render() {
    const node = <ContainerStyled {...this.props} />;

    return createPortal(node, document.querySelector('.react-portals'));
  }
}

export default PopoverContent;
