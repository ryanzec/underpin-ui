import PropTypes from 'prop-types';
import React, {PureComponent, createElement} from 'react';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';

import * as themesCss from 'src/styles/themes';

export const activeStyles = () => {
  return `
    cursor: pointer;
    border-color: ${themesCss.light.state.info};
  `;
};

export const ContainerStyled = styled(({children, isOver, ...props}) => createElement(Dropzone, props, children))`
  border: 3px dashed ${themesCss.light.state.infoLight};
  padding: 16px 32px;
  text-align: center;
  font-size: 2rem;
  border-radius: 3px;
  display: inline-block;

  ${props => (props.isOver ? activeStyles() : '')} ${props =>
  !props.disableClick || props.isOver ? `&:hover{${activeStyles()}}` : ''};
`;

ContainerStyled.propsTypes = {
  disableClick: PropTypes.bool,
  isOver: PropTypes.bool,
};

ContainerStyled.defaultProps = {
  disableClick: false,
  isOver: false,
};

export const InputStyled = styled.input`
  display: none;
`;

export const createOnDragEnter = (instance) => {
  return () => {
    instance.setState({
      isOver: true,
    });
  };
};

export const createOnDragLeave = (instance) => {
  return () => {
    instance.setState({
      isOver: false,
    });
  };
};

export const createOnDrop = (instance) => {
  return (acceptedFiles, rejectedFiles) => {
    instance.setState({
      isOver: false,
    });

    instance.props.onDrop(acceptedFiles, rejectedFiles);
  };
};

class FileUploadDragDrop extends PureComponent {
  static propTypes = {
    infoNode: PropTypes.node,
    infoHoverNode: PropTypes.node,
    isClickable: PropTypes.bool,
    onDrop: PropTypes.func.isRequired,
  };

  static defaultProps = {
    infoNode: 'Drop file here to upload',
    infoHoverNode: 'Drop file to upload',
  };

  state = {
    isOver: false,
  };

  onDragEnter = createOnDragEnter(this);
  onDragLeave = createOnDragLeave(this);
  onDrop = createOnDrop(this);

  render() {
    const {isOver} = this.state;
    const {children, infoNode, infoHoverNode, onDrop, ...restOfProps} = this.props;

    return (
      <span>
        <ContainerStyled
          isOver={isOver}
          onDragEnter={this.onDragEnter}
          onDragLeave={this.onDragLeave}
          onDrop={this.onDrop}
          {...restOfProps}
        >
          {isOver ? infoHoverNode : infoNode}
        </ContainerStyled>
      </span>
    );
  }
}

export default FileUploadDragDrop;
