import React, {PureComponent} from 'react';
import {Form, Field} from 'react-final-form';

import FormElement from 'src/components/Form/FormElement';
import FormLabel from 'src/components/Form/FormLabel';
import FormTextbox from 'src/components/Form/FormTextbox';
import FormSelect from 'src/components/Form/FormSelect';
import FormSelectOption from 'src/components/Form/FormSelectOption';
import FormCheckableInput from 'src/components/Form/FormCheckableInput';
import Button from 'src/components/Button/Button';
import SvgIconButton from 'src/components/Button/SvgIconButton';
import ForumUpdateSpy from 'src/components/ReactFinalForm/FormUpdateSpy';

const initialValues = {
  styleType: 'link',
  buttonText: "I'm a Button",
};

class ButtonsInteractiveExample extends PureComponent {
  state = {
    formValues: {
      ...initialValues,
    },
  };

  onClickButton = () => {
    if (this.state.formValues.doAlert) {
      alert("I'm an alert");
    }
  };

  onUpdate = (values) => {
    this.setState({
      formValues: values,
    });
  };

  onSubmit = () => {};

  fieldRenderer = (Component) => {
    return ({input, meta, ...restOfProps}) => {
      return (
        /* eslint-workaround */
        <Component
          {...input}
          {...restOfProps}
        />
      );
    };
  };

  formRenderer = () => {
    return (
      <div>
        <ForumUpdateSpy onUpdate={this.onUpdate} />
        <FormElement>
          <FormLabel>Button Text</FormLabel>
          <Field
            name="buttonText"
            placeholder="Button Text"
            render={this.fieldRenderer(FormTextbox)}
          />
        </FormElement>
        <FormElement>
          <FormLabel>Style</FormLabel>
          <Field
            name="styleType"
            render={this.fieldRenderer(FormSelect)}
          >
            <FormSelectOption>Default</FormSelectOption>
            <FormSelectOption value="success">Success</FormSelectOption>
            <FormSelectOption value="info">Info</FormSelectOption>
            <FormSelectOption value="warning">Warning</FormSelectOption>
            <FormSelectOption value="danger">Danger</FormSelectOption>
            <FormSelectOption value="link">Link</FormSelectOption>
          </Field>
        </FormElement>
        <FormElement>
          <Field
            name="isPill"
            render={this.fieldRenderer(FormCheckableInput)}
            type="checkbox"
          >
            Is Pill
          </Field>
        </FormElement>
        <FormElement>
          <Field
            name="isThin"
            render={this.fieldRenderer(FormCheckableInput)}
            type="checkbox"
          >
            Is Thin
          </Field>
        </FormElement>
        <FormElement>
          <Field
            name="doAlert"
            render={this.fieldRenderer(FormCheckableInput)}
            type="checkbox"
          >
            Alert when button is clicked
          </Field>
        </FormElement>
      </div>
    );
  };

  render() {
    return (
      <span>
        <Form
          initialValues={initialValues}
          onSubmit={this.onSubmit}
          render={this.formRenderer}
        />
        <Button
          isPill={this.state.formValues.isPill}
          isThin={this.state.formValues.isThin}
          onClick={this.onClickButton}
          styleType={this.state.formValues.styleType}
        >
          {this.state.formValues.buttonText}
        </Button>
        <SvgIconButton
          icon="Person"
          isPill={this.state.formValues.isPill}
          isThin={this.state.formValues.isThin}
          onClick={this.onClickButton}
          styleType={this.state.formValues.styleType}
        >
          {this.state.formValues.buttonText}
        </SvgIconButton>
      </span>
    );
  }
}

export default ButtonsInteractiveExample;
