import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import styled from 'styled-components';

import Modal, {ModalContainerStyled} from 'src/components/Modal/Modal';
import ModalHeader from 'src/components/Modal/ModalHeader';
import ModalContent from 'src/components/Modal/ModalContent';
import ModalFooter from 'src/components/Modal/ModalFooter';
import Button from 'src/components/Button/Button';
import Overlay from 'src/components/Overlay/Overlay';
import WizardNavigation from './WizardNavigation';
import WizardContent from './WizardContent';
import WizardStepIndicator from './WizardStepIndicator';

export const MyModalContainerStyled = styled(ModalContainerStyled)`
  flex-direction: row;
`;

export const createOnClickNextStep = (instance) => {
  return () => {
    if (instance.state.activeStep === instance.props.steps.length - 1) {
      if (instance.props.steps[instance.state.activeStep].nextHandler) {
        instance.props.steps[instance.state.activeStep].nextHandler(instance.props.closeHandler);
      } else {
        instance.props.closeHandler();
      }
    } else if (instance.props.steps[instance.state.activeStep].nextHandler) {
      instance.props.steps[instance.state.activeStep].nextHandler(instance.increaseStep.bind(instance));
    } else {
      instance.increaseStep();
    }
  };
};

export const createOnClickPreviousStep = (instance) => {
  return () => {
    if (instance.state.activeStep > 0) {
      if (instance.props.steps[instance.state.activeStep].previousHandler) {
        instance.props.steps[instance.state.activeStep].previousHandler(instance.decreaseStep.bind(instance));
      } else {
        instance.decreaseStep();
      }
    }
  };
};

export const createIncreaseStep = (instance) => {
  return () => {
    instance.setState({
      activeStep: instance.state.activeStep + 1,
    });
  };
};

export const createDecreaseStep = (instance) => {
  return () => {
    instance.setState({
      activeStep: instance.state.activeStep - 1,
    });
  };
};

export const createGetNextButtonText = (instance) => {
  return () => {
    let nextNodeText = 'Next';

    if (instance.state.activeStep === instance.props.steps.length - 1) {
      nextNodeText = 'Done';
    }

    return nextNodeText;
  };
};

export const createGetStepTitles = (instance) => {
  return () => {
    return instance.props.steps.map((step) => {
      return step.title || 'N/A';
    });
  };
};

export const createOnToggleCollapse = (instance) => {
  return () => {
    instance.setState({
      isCollapsed: !instance.state.isCollapsed,
    });
  };
};

class Wizard extends PureComponent {
  static propTypes = {
    steps: PropTypes.array.isRequired,
    isActive: PropTypes.bool,
    closeHandler: PropTypes.func.isRequired,
    allowExit: PropTypes.bool,
    allowGoingBackwards: PropTypes.bool,
    previousButtonText: PropTypes.string,
    nextButtonText: PropTypes.string,
    finishButtonText: PropTypes.string,
    initialStep: PropTypes.number,
  };

  static defaultProps = {
    steps: null,
    isActive: false,
    closeHandler: null,
    allowExit: false,
    allowGoingBackwards: true,
    previousButtonText: 'Previous',
    nextButtonText: 'Next',
    finishButtonText: 'Done',
    initialStep: 0,
  };

  constructor(props) {
    super(props);

    if (process.env.ENV !== 'production') {
      if (!props.steps || props.steps.length === 0) {
        console.error('A wizard needs at least 1 step');
      }
    }
  }

  state = {
    activeStep: this.props.initialStep || 0,
    isCollapsed: false,
  };

  onToggleCollapse = createOnToggleCollapse(this);
  onClickNextStep = createOnClickNextStep(this);
  onClickPreviousStep = createOnClickPreviousStep(this);
  increaseStep = createIncreaseStep(this);
  decreaseStep = createDecreaseStep(this);
  getNextButtonText = createGetNextButtonText(this);
  getStepTitles = createGetStepTitles(this);

  renderModalContent() {
    return this.props.steps[this.state.activeStep].content;
  }

  renderModal() {
    let previousStepButtonNode = null;

    if (this.props.allowGoingBackwards && this.state.activeStep > 0) {
      previousStepButtonNode = <Button onClick={this.onClickPreviousStep}>{this.props.previousButtonText}</Button>;
    }

    let closeHandler = null;

    if (this.props.allowExit) {
      closeHandler = this.props.closeHandler;
    }

    return (
      <Modal
        isActive={this.props.isActive}
        modalContainerComponent={MyModalContainerStyled}
        overlayDisabled
      >
        <WizardNavigation
          isCollapsed={this.state.isCollapsed}
          onToggleCollapse={this.onToggleCollapse}
        >
          <WizardStepIndicator
            currentStep={this.state.activeStep + 1}
            isCollapsed={this.state.isCollapsed}
            titles={this.getStepTitles()}
            totalSteps={this.props.steps.length}
          />
        </WizardNavigation>
        <WizardContent>
          <ModalHeader closeHandler={closeHandler}>Header</ModalHeader>
          <ModalContent>{this.renderModalContent()}</ModalContent>
          <ModalFooter>
            {previousStepButtonNode}
            <Button
              onClick={this.onClickNextStep}
              styleType="success"
            >
              {this.getNextButtonText()}
            </Button>
          </ModalFooter>
        </WizardContent>
      </Modal>
    );
  }

  renderStep() {
    if (this.props.steps[this.state.activeStep].type === 'modal') {
      return this.renderModal();
    }

    if (process.env.ENV !== 'production') {
      console.error('The wizard component currently only supports modal type wizards');
    }
  }

  render() {
    const {
      children,
      steps,
      isActive,
      closeHandler,
      allowExit,
      allowGoingBackwards,
      previousButtonText,
      nextButtonText,
      finishButtonText,
      initialStep,
      ...restOfProps
    } = this.props;

    return (
      <div {...restOfProps}>
        {this.renderStep()}
        <Overlay isActive={this.props.isActive} />
      </div>
    );
  }
}

export default Wizard;
