import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import styled from 'styled-components';

import * as structureCss from 'src/styles/structure';
import * as themesCss from 'src/styles/themes';

import SvgIcon from 'src/components/SvgIcon/SvgIcon';

export const AccordingItemHeaderStyled = styled.h4`
  cursor: pointer;
  background-color: ${themesCss.light.global.gray2};
  padding: ${structureCss.spacing.tiny} ${structureCss.spacing.small};
  margin-bottom: ${structureCss.spacing.tiny};
`;

class AccordionItemHeader extends PureComponent {
  static propTypes = {
    isActive: PropTypes.bool,
  };

  static defaultProps = {
    isActive: false,
  };

  render() {
    const {children, ...restOfProps} = this.props;

    const iconNode = this.props.isActive ? <SvgIcon icon="ArrowDropUp" /> : <SvgIcon icon="ArrowDropDown" />;

    return (
      <AccordingItemHeaderStyled {...restOfProps}>
        {children}
        {iconNode}
      </AccordingItemHeaderStyled>
    );
  }
}

export default AccordionItemHeader;
