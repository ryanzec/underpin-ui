import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import styled from 'styled-components';

import * as themesCss from 'src/styles/themes';
import * as formCss from 'src/components/Form/internal/formCss';

import FormRequiredIcon from 'src/components/Form/internal/FormRequiredIcon';

export const ContainerStyled = styled.div`
  font-size: ${formCss.variables.fontSizeFormLegend};
  padding-bottom: ${formCss.variables.paddingFormLegend};
  margin-bottom: ${formCss.variables.marginFormLegend};
  border-bottom: 1px solid ${themesCss.light.application.borderColor};
  width: 100%;
  display: flex;
`;

export const RequiredDetailsStyled = styled.div`
  margin-left: auto;
  font-size: 13px;
`;

export const FormRequiredIconStyled = styled(FormRequiredIcon)`
  left: -5px;
`;

class FormLegend extends PureComponent {
  static propTypes = {
    displayRequiredDetails: PropTypes.bool,
  };

  static defaultProps = {
    displayRequiredDetails: false,
  };

  render() {
    const {displayRequiredDetails, ...restOfProps} = this.props;
    let requiredDetailsNode = null;

    if (this.props.displayRequiredDetails) {
      requiredDetailsNode = (
        <RequiredDetailsStyled>
          <FormRequiredIconStyled icon="Star" />required field
        </RequiredDetailsStyled>
      );
    }

    return (
      <ContainerStyled {...restOfProps}>
        {this.props.children}
        {requiredDetailsNode}
      </ContainerStyled>
    );
  }
}

export default FormLegend;
