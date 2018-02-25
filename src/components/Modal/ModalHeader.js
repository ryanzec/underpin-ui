import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import styled from 'styled-components';

import SvgIcon from 'src/components/SvgIcon/SvgIcon';

import * as structureCss from 'src/styles/structure';
import * as themesCss from 'src/styles/themes';
import * as cssUtils from 'src/utils/css';

export const ContainerStyled = styled.div`
  ${cssUtils.flexboxSpecificValue('height', '65px')} display: flex;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
  padding: ${structureCss.spacing.extraSmall};
  border-bottom: 1px solid ${themesCss.light.application.border};
`;

export const CloseIconStyled = styled(SvgIcon)`
  margin-left: auto;
  cursor: pointer;
`;

class ModalHeader extends PureComponent {
  static propTypes = {
    closeHandler: PropTypes.func,
  };

  renderCloseHandler() {
    let node = null;

    if (this.props.closeHandler) {
      node = (
        /* eslint-workaround */
        <CloseIconStyled
          icon="Clear"
          onClick={this.props.closeHandler}
        />
      );
    }

    return node;
  }

  render() {
    const {children, closeHandler, ...restOfProps} = this.props;

    return (
      <ContainerStyled {...restOfProps}>
        {children}
        {this.renderCloseHandler()}
      </ContainerStyled>
    );
  }
}

export default ModalHeader;
