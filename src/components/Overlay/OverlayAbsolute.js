import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import styled from 'styled-components';

import {ContainerStyled, TopContentStyled} from 'src/components/Overlay/Overlay';

export const MyContainerStyled = styled(ContainerStyled)`
  position: absolute;
`;

class OverlayAbsolute extends PureComponent {
  static propTypes = {
    isActive: PropTypes.bool,
  };

  static defaultProps = {
    isActive: false,
  };

  render() {
    const {children, isActive, ...restOfProps} = this.props;

    let topContentNode = null;

    if (children && children[0]) {
      topContentNode = <TopContentStyled isActive={isActive}>{children}</TopContentStyled>;
    }

    return (
      <MyContainerStyled
        isActive={isActive}
        {...restOfProps}
      >
        {topContentNode}
      </MyContainerStyled>
    );
  }
}

export default OverlayAbsolute;
