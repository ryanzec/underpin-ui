import React, {PureComponent} from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import SvgIcon from '../SvgIcon/SvgIcon';
import ListItem from '../List/ListItem';

export const ExpandableListHeaderStyled = styled(ListItem)`
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 0;
`;

class ExpandableListHeader extends PureComponent {
  static propTypes = {
    isExpanded: PropTypes.bool,
  };

  render() {
    const {isExpanded, children, ...restOfProps} = this.props;

    return (
      <ExpandableListHeaderStyled
        isExpandable
        {...restOfProps}
      >
        <SvgIcon icon={isExpanded ? 'KeyboardArrowDown' : 'KeyboardArrowRight'} />
        {children}
      </ExpandableListHeaderStyled>
    );
  }
}

export default ExpandableListHeader;
