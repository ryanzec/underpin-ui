import PropTypes from 'prop-types';
import React, {PureComponent, createElement} from 'react';
import styled from 'styled-components';

import * as structureCss from 'src/styles/structure';

import List from './List';
import SvgIcon from 'src/components/SvgIcon/SvgIcon';

export const HandleStyled = styled.div`
  user-select: none;
  cursor: pointer;
`;

export const HandleSvgIconStyled = styled(SvgIcon)`
  height: 10px;
  width: 10px;
  margin-right: ${structureCss.spacing.extraTiny};
`;

export const createOnClickHandle = (instance) => {
  return () => {
    instance.setState({
      isActive: !instance.state.isActive,
    });
  };
};

export const ListStyled = styled(({isActive, children, ...props}) => createElement(List, props, children))`
  display: ${props => (props.isActive ? 'block' : 'none')};
`;

ListStyled.propsTypes = {
  isActive: PropTypes.bool,
};

ListStyled.defaultProps = {
  isActive: false,
};

class ExpandableList extends PureComponent {
  static propTypes = {
    // @todo: this should just be isActive and the using component need to track that
    initialIsActive: PropTypes.bool,
    handleNode: PropTypes.node.isRequired,
  };

  static defaultProps = {
    initialIsActive: true,
  };

  state = {
    isActive: this.props.initialIsActive,
  };

  onClickHandle = createOnClickHandle(this);

  render() {
    const {children, initialIsActive, handleNode, ...restOfProps} = this.props;
    const {isActive} = this.state;
    const icon = isActive ? 'KeyboardArrowDown' : 'KeyboardArrowRight';

    return (
      <div {...restOfProps}>
        <HandleStyled onClick={this.onClickHandle}>
          <HandleSvgIconStyled icon={icon} />
          {this.props.handleNode}
        </HandleStyled>
        <ListStyled
          isActive={isActive}
          styleType="plain"
        >
          {this.props.children}
        </ListStyled>
      </div>
    );
  }
}

export default ExpandableList;
