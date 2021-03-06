import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import styled from 'styled-components';

import FormRequiredIcon from 'src/components/Form/internal/FormRequiredIcon';

export const ContainerStyled = styled.label`
  display: inline-block;
`;

class FormLabel extends PureComponent {
  static propTypes = {
    isRequired: PropTypes.bool,
    isHidden: PropTypes.bool,
  };

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
