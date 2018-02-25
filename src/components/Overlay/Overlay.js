import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {createPortal} from 'react-dom';
import styled from 'styled-components';

import * as themesCss from 'src/styles/themes';

export const ContainerStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  display: ${props => (props.isActive ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

ContainerStyled.propsTypes = {
  isActive: PropTypes.bool,
};

ContainerStyled.defaultProps = {
  isActive: false,
};

export const TopContentStyled = styled.div`
  z-index: 10001;
  display: ${props => (props.isActive ? 'block' : 'none')};
  color: ${themesCss.light.application.textLightColor};
`;

TopContentStyled.propsTypes = {
  isActive: PropTypes.bool,
};

TopContentStyled.defaultProps = {
  isActive: false,
};

class Overlay extends PureComponent {
  static propTypes = {
    isActive: PropTypes.bool,
    portalsSelector: PropTypes.string,
  };

  static defaultProps = {
    isActive: false,
    portalsSelector: '.react-portals',
  };

  render() {
    const {children, isActive, portalsSelector, ...restOfProps} = this.props;

    let topContentNode = null;

    if (children && children[0]) {
      topContentNode = <TopContentStyled isActive={isActive}>{children}</TopContentStyled>;
    }

    const node = (
      <ContainerStyled
        isActive={isActive}
        {...restOfProps}
      >
        {topContentNode}
      </ContainerStyled>
    );

    return createPortal(node, document.querySelector(portalsSelector));
  }
}

export default Overlay;
