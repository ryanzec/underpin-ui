import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import styled from 'styled-components';

import * as structureCss from 'src/styles/structure';
import * as themesCss from 'src/styles/themes';

export const ContainerStyled = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: auto;
  padding: ${structureCss.spacing.small};
`;

export const IndicatorStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const IndicatorTitleStyled = styled.span`
  margin-left: ${structureCss.spacing.small};

  ${props => (props.isCollapsed ? 'display: none;' : '')};
`;

IndicatorTitleStyled.propsTypes = {
  isCollapsed: PropTypes.bool,
};

IndicatorTitleStyled.defaultProps = {
  isCollapsed: false,
};

export const IndicatorLineStyled = styled.hr`
  display: block;
  width: 2px;
  background-color: ${props => (props.isPrevious ? themesCss.light.global.green2 : themesCss.light.state.neutral)};
  height: 16px;
  margin: 0 0 0 7px;
`;

IndicatorLineStyled.propsTypes = {
  isPrevious: PropTypes.bool,
};

IndicatorLineStyled.defaultProps = {
  isPrevious: false,
};

export const colorStyles = (props) => {
  const borderColor
    = props.isCurrent || props.isPrevious ? themesCss.light.global.green2 : themesCss.light.state.neutral;

  return `
    border: 2px solid ${borderColor};

    ${props.isPrevious ? `background-color: ${themesCss.light.global.green2};` : ''};
  `;
};

export const IndicatorCircleStyled = styled.div`
  display: inline-block;
  height: 16px;
  width: 16px;
  border-radius: 999px;

  ${colorStyles};
`;

IndicatorCircleStyled.propsTypes = {
  isPrevious: PropTypes.bool,
  isCurrent: PropTypes.bool,
};

IndicatorCircleStyled.defaultProps = {
  isPrevious: false,
  isCurrent: false,
};

class WizardStepIndicator extends PureComponent {
  static propTypes = {
    totalSteps: PropTypes.number.isRequired,
    currentStep: PropTypes.number.isRequired,
    titles: PropTypes.array.isRequired,
    isCollapsed: PropTypes.bool,
  };

  static defaultProps = {
    isCollapsed: false,
  };

  renderStepIndicators() {
    const {isCollapsed} = this.props;
    let stepNodes = [];
    let renderingNumber = 1;

    while (renderingNumber <= this.props.totalSteps) {
      const isPrevious = renderingNumber < this.props.currentStep;
      const isCurrent = renderingNumber === this.props.currentStep;

      stepNodes.push(
        <IndicatorStyled key={`${renderingNumber}-indicator`}>
          <IndicatorCircleStyled
            isCurrent={isCurrent}
            isPrevious={isPrevious}
          />
          <IndicatorTitleStyled isCollapsed={isCollapsed}>
            {this.props.titles[renderingNumber - 1]}
          </IndicatorTitleStyled>
        </IndicatorStyled>
      );

      if (renderingNumber < this.props.totalSteps) {
        stepNodes.push(
          /* eslint-workaround */
          <IndicatorLineStyled
            isPrevious={isPrevious}
            key={`${renderingNumber}-line`}
          />
        );
      }

      renderingNumber += 1;
    }

    return stepNodes;
  }

  render() {
    const {children, totalSteps, currentStep, titles, isCollapsed, ...restOfProps} = this.props;

    return (
      <ContainerStyled {...restOfProps}>
        <div>{this.renderStepIndicators()}</div>
      </ContainerStyled>
    );
  }
}

export default WizardStepIndicator;
