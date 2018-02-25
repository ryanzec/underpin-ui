import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import styled from 'styled-components';

import * as structureCss from 'src/styles/structure';
import * as themesCss from 'src/styles/themes';
import * as cssUtils from 'src/utils/css';

import SvgIcon from 'src/components/SvgIcon/SvgIcon';

export const ContainerStyled = styled.div`
  ${props => cssUtils.flexboxSpecificValue('width', props.isCollapsed ? '48px' : '200px')}

  border-right: 1px solid ${themesCss.light.application.border};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
`;

ContainerStyled.propsTypes = {
  isCollapsed: PropTypes.bool,
};

ContainerStyled.defaultProps = {
  isCollapsed: false,
};

export const IconStyled = styled(SvgIcon)`
  display: flex;
  justify-content: flex-end;
  padding: ${structureCss.spacing.small};
  cursor: pointer;
`;

class WizardNavigation extends PureComponent {
  static propTypes = {
    isCollapsed: PropTypes.bool,
    onToggleCollapse: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isCollapsed: false,
  };

  render() {
    const {children, ...restOfProps} = this.props;

    return (
      <ContainerStyled {...restOfProps}>
        {children}
        <IconStyled
          icon={this.props.isCollapsed ? 'KeyboardArrowRight' : 'KeyboardArrowLeft'}
          onClick={this.props.onToggleCollapse}
        />
      </ContainerStyled>
    );
  }
}

export default WizardNavigation;
