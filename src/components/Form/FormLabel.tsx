import * as PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

import FormRequiredIcon from 'src/components/Form/internal/FormRequiredIcon';

export const ContainerStyled = styled.label`
  display: inline-block;
`;

export interface IFormLabelProps {
  isRequired: boolean;
  isHidden: boolean;
}

class FormLabel extends React.Component<IFormLabelProps, {}> {
  static defaultProps = {
    isRequired: false,
    isHidden: false,
  };

  renderFormRequiredIcon() {
    if (!this.props.isRequired) {
      return null;
    }

    return <FormRequiredIcon icon="Star" />;
  }

  render() {
    const {children, isRequired, isHidden, ...restOfProps} = this.props;

    if (this.props.isHidden) {
      return null;
    }

    return (
      <ContainerStyled {...restOfProps}>
        {this.props.children}
        {this.renderFormRequiredIcon()}
      </ContainerStyled>
    );
  }
}

export default FormLabel;
