import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {createPortal} from 'react-dom';
import styled from 'styled-components';

import * as themesCss from 'src/styles/themes';
import * as modalCss from 'src/components/Modal/internal/modalCss';

import Overlay from 'src/components/Overlay/Overlay';

export const ContainerStyled = styled.div`
  display: ${props => (props.isActive ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${modalCss.variables.zIndex};
`;

ContainerStyled.propsTypes = {
  isActive: PropTypes.bool,
  className: PropTypes.string,
};

ContainerStyled.defaultProps = {
  isActive: false,
};

export const ModalContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: ${themesCss.light.global.white};

  //NOTE: need to be twice the top to have even top / bottom spacing
  max-height: calc(100% - 75px * 2);
  width: 900px;
  position: relative;
  top: 75px;
  left: 50%;
  transform: translateX(-50%);
`;

class Modal extends PureComponent {
  static propTypes = {
    isActive: PropTypes.bool,
    overlayDisabled: PropTypes.bool,
    modalContainerComponent: PropTypes.func,
    portalsSelector: PropTypes.string,
  };

  static defaultProps = {
    isActive: false,
    overlayDisabled: false,
    modalContainerComponent: null,
    portalsSelector: '.react-portals',
  };

  render() {
    const {children, isActive, modalContainerComponent, overlayDisabled, portalsSelector, ...restOfProps} = this.props;

    let overlayNode = null;

    if (isActive && !overlayDisabled) {
      overlayNode = <Overlay isActive={isActive} />;
    }

    const ModalContainerComponent = modalContainerComponent || ModalContainerStyled;

    const node = (
      <ContainerStyled
        isActive={isActive}
        {...restOfProps}
      >
        <ModalContainerComponent children={children} />
        {overlayNode}
      </ContainerStyled>
    );

    return createPortal(node, document.querySelector(portalsSelector));
  }
}

export default Modal;
