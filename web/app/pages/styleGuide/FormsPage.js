import PropTypes from 'prop-types';
import React from 'react';

import FormElement from 'src/components/Form/FormElement';
import FormSelect from 'src/components/Form/FormSelect';
import FormSelectOption from 'src/components/Form/FormSelectOption';
import FormTextbox from 'src/components/Form/FormTextbox';
import FormLabel from 'src/components/Form/FormLabel';
import FormTextboxGroup from 'src/components/Form/FormTextboxGroup';
import FormValidationMessages from 'src/components/Form/FormValidationMessages';
import FormValidationMessage from 'src/components/Form/FormValidationMessage';
import FormCheckableInput from 'src/components/Form/FormCheckableInput';
import FormGroupAddon from 'src/components/Form/FormTextboxGroupAddon';
import FormLegend from 'src/components/Form/FormLegend';
import FormDatePicker from 'src/components/Form/FormDatePicker';
import FormCheckboxToggle from 'src/components/Form/FormCheckboxToggle';
import SvgIcon from 'src/components/SvgIcon/SvgIcon';

class FormsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDay: null,
    };
  }

  onClickDate = date => {
    this.setState({
      selectedDay: date,
    });
  };

  render() {
    return (
      <div className="p-style-guide-forms">
        <h1>Forms</h1>
        <h2>Basic</h2>
        <div>
          <FormLegend>Block Level Form</FormLegend>
          <FormElement>
            <FormLabel>First Name</FormLabel>
            <FormTextboxGroup>
              <FormGroupAddon><SvgIcon icon="Email" /></FormGroupAddon>
              <FormTextbox placeholder="First Name" hasAddon />
              <FormGroupAddon>@gmail.com</FormGroupAddon>
            </FormTextboxGroup>
          </FormElement>
          <FormElement>
            <FormLabel>First Name</FormLabel>
            <FormTextboxGroup>
              <FormTextbox placeholder="First Name" hasAddon />
              <FormGroupAddon>@gmail.com</FormGroupAddon>
            </FormTextboxGroup>
          </FormElement>
          <FormElement>
            <FormLabel>First Name</FormLabel>
            <FormTextboxGroup>
              <FormGroupAddon><SvgIcon icon="Email" /></FormGroupAddon>
              <FormTextbox placeholder="First Name" hasAddon />
            </FormTextboxGroup>
          </FormElement>
          <FormElement>
            <FormLabel>Last Name</FormLabel>
            <FormTextbox placeholder="Last Name" />
          </FormElement>
          <FormElement>
            <FormLabel>Bio</FormLabel>
            <FormTextbox type="textarea" placeholder="First Name"></FormTextbox>
          </FormElement>
          <FormElement>
            <FormLabel>Bio</FormLabel>
            <FormTextbox type="textarea" placeholder="First Name" defaultValue="HA HA HA HAAAAAA"></FormTextbox>
          </FormElement>
          <FormElement>
            <FormLabel>Blah</FormLabel>
            <FormSelect>
              <FormSelectOption>Select Something...</FormSelectOption>
              <FormSelectOption value="1">Something1</FormSelectOption>
              <FormSelectOption value="2">Something2</FormSelectOption>
              <FormSelectOption value="3">Something2</FormSelectOption>
            </FormSelect>
          </FormElement>
          <FormElement>
            <FormCheckableInput type="checkbox" inputAlignment="right">Blah</FormCheckableInput>
            <FormCheckableInput type="checkbox" checked={true}>Blah</FormCheckableInput>
            <FormCheckableInput
              type="checkbox"
              inputAlignment="right"
              disabled
            >
              Blah
            </FormCheckableInput>
            <FormCheckableInput
              type="checkbox"
              checked
              disabled
            >
              Blah
            </FormCheckableInput>
          </FormElement>
          <FormElement>
            <FormLabel>Toggle Checkbox</FormLabel>
            <FormCheckboxToggle />
            <FormCheckboxToggle checked />
          </FormElement>
          <FormElement>
            <FormCheckableInput type="radio" inputAlignment="right">Blah</FormCheckableInput>
            <FormCheckableInput type="radio" checked>Blah</FormCheckableInput>
            <FormCheckableInput
              type="radio"
              inputAlignment="right"
              disabled
            >
              Blah
            </FormCheckableInput>
            <FormCheckableInput
              type="radio"
              disabled
              checked
            >
              Blah
            </FormCheckableInput>
          </FormElement>
          <FormElement>
            <FormLabel>Last Name</FormLabel>
            <FormTextbox type="file" />
          </FormElement>
          <FormElement>
            <FormLabel>Date</FormLabel>
            <FormDatePicker
              onClickDate={this.onClickDate}
              selectedDay={this.state.selectedDay}
              format="dddd, MMMM Do, YYYY HH:mm:ss Z"
            />
          </FormElement>
        </div>
        <h2>Hidden Labels</h2>
        <div>
          <FormLegend>Hidden Labels Form</FormLegend>
          <FormElement>
            <FormLabel isHidden={true}>First Name</FormLabel>
            <FormTextboxGroup>
              <FormGroupAddon><SvgIcon icon="Email" /></FormGroupAddon>
              <FormTextbox placeholder="First Name" hasAddon />
              <FormGroupAddon>@gmail.com</FormGroupAddon>
            </FormTextboxGroup>
          </FormElement>
          <FormElement>
            <FormLabel isHidden={true}>First Name</FormLabel>
            <FormTextboxGroup>
              <FormTextbox placeholder="First Name" hasAddon />
              <FormGroupAddon>@gmail.com</FormGroupAddon>
            </FormTextboxGroup>
          </FormElement>
          <FormElement>
            <FormLabel isHidden={true}>First Name</FormLabel>
            <FormTextboxGroup>
              <FormGroupAddon><SvgIcon icon="Email" /></FormGroupAddon>
              <FormTextbox placeholder="First Name" hasAddon />
            </FormTextboxGroup>
          </FormElement>
          <FormElement>
            <FormLabel isHidden={true}>Last Name</FormLabel>
            <FormTextbox placeholder="Last Name" />
          </FormElement>
          <FormElement>
            <FormLabel isHidden={true}>Bio</FormLabel>
            <FormTextbox type="textarea" placeholder="First Name"></FormTextbox>
          </FormElement>
          <FormElement>
            <FormLabel isHidden={true}>Bio</FormLabel>
            <FormTextbox type="textarea" placeholder="First Name" defaultValue="HA HA HA HAAAAAA"></FormTextbox>
          </FormElement>
          <FormElement>
            <FormLabel isHidden={true}>Blah</FormLabel>
            <FormSelect>
              <FormSelectOption>Select Something...</FormSelectOption>
              <FormSelectOption value="1">Something1</FormSelectOption>
              <FormSelectOption value="2">Something2</FormSelectOption>
              <FormSelectOption value="3">Something2</FormSelectOption>
            </FormSelect>
          </FormElement>
          <FormElement>
            <FormCheckableInput type="checkbox" inputAlignment="right">Blah</FormCheckableInput>
            <FormCheckableInput type="checkbox" checked={true}>Blah</FormCheckableInput>
          </FormElement>
          <FormElement>
            <FormCheckableInput type="radio" inputAlignment="right">Blah</FormCheckableInput>
            <FormCheckableInput type="radio" checked={true}>Blah</FormCheckableInput>
          </FormElement>
          <FormElement>
            <FormLabel isHidden={true}>Last Name</FormLabel>
            <FormTextbox type="file" />
          </FormElement>
        </div>
        <h2>Validation</h2>
        <div>
          <FormLegend displayRequiredDetails={true}>Form Validation</FormLegend>
          <FormElement>
            <FormLabel isRequired>First Name</FormLabel>
            <FormTextboxGroup>
              <FormGroupAddon validation="invalid"><SvgIcon icon="Email" /></FormGroupAddon>
              <FormTextbox validation="invalid" placeholder="First Name" hasAddon />
              <FormGroupAddon validation="invalid">@gmail.com</FormGroupAddon>
            </FormTextboxGroup>
            <FormValidationMessages>
              <FormValidationMessage validation="invalid" icon="Clear">This is required</FormValidationMessage>
              <FormValidationMessage validation="invalid" icon="Clear">Not a valid email address</FormValidationMessage>
            </FormValidationMessages>
          </FormElement>
          <FormElement>
            <FormLabel>Last Name</FormLabel>
            <FormTextboxGroup>
              <FormGroupAddon validation="valid"><SvgIcon icon="Email" /></FormGroupAddon>
              <FormTextbox validation="valid" placeholder="First Name" hasAddon />
              <FormGroupAddon validation="valid">@gmail.com</FormGroupAddon>
            </FormTextboxGroup>
            <FormValidationMessages>
              <FormValidationMessage validation="valid" icon="Check">Yah!</FormValidationMessage>
            </FormValidationMessages>
          </FormElement>
          <FormElement>
            <FormLabel>Bio</FormLabel>
            <FormTextbox validation="invalid" type="textarea" placeholder="First Name"></FormTextbox>
            <FormValidationMessages>
              <FormValidationMessage validation="invalid" icon="Clear">This is required</FormValidationMessage>
            </FormValidationMessages>
          </FormElement>
          <FormElement>
            <FormLabel>Blah</FormLabel>
            <FormSelect validation="invalid">
              <FormSelectOption>Select Something...</FormSelectOption>
              <FormSelectOption value="1">Something1</FormSelectOption>
              <FormSelectOption value="2">Something2</FormSelectOption>
              <FormSelectOption value="3">Something2</FormSelectOption>
            </FormSelect>
            <FormValidationMessages>
              <FormValidationMessage validation="invalid" icon="Clear">This is required</FormValidationMessage>
            </FormValidationMessages>
          </FormElement>
          <FormElement>
            <FormLabel>Blah</FormLabel>
            <FormSelect validation="valid">
              <FormSelectOption>Select Something...</FormSelectOption>
              <FormSelectOption value="1">Something1</FormSelectOption>
              <FormSelectOption value="2">Something2</FormSelectOption>
              <FormSelectOption value="3">Something2</FormSelectOption>
            </FormSelect>
            <FormValidationMessages>
              <FormValidationMessage validation="valid" icon="Check">Yah!</FormValidationMessage>
            </FormValidationMessages>
          </FormElement>
          <FormElement>
            <FormCheckableInput type="checkbox" validation="invalid" inputAlignment="right">Blah</FormCheckableInput>
            <FormCheckableInput type="checkbox" validation="invalid" checked={true}>Blah</FormCheckableInput>
            <FormValidationMessages>
              <FormValidationMessage validation="invalid" icon="Clear">This is required </FormValidationMessage>
            </FormValidationMessages>
          </FormElement>
          <FormElement>
            <FormCheckableInput type="radio" validation="valid" inputAlignment="right">Blah</FormCheckableInput>
            <FormCheckableInput type="radio" validation="valid" checked={true}>Blah</FormCheckableInput>
            <FormValidationMessages>
              <FormValidationMessage validation="valid" icon="Check">This is required</FormValidationMessage>
            </FormValidationMessages>
          </FormElement>
          <FormElement>
            <FormLabel>Last Name</FormLabel>
            <FormTextbox type="file" validation="valid" />
            <FormValidationMessages>
              <FormValidationMessage validation="valid" icon="Check">This is required</FormValidationMessage>
            </FormValidationMessages>
          </FormElement>
          <FormElement>
            <FormLabel>Last Name</FormLabel>
            <FormTextbox type="file" validation="invalid" />
            <FormValidationMessages>
              <FormValidationMessage validation="invalid" icon="Clear">This is required</FormValidationMessage>
            </FormValidationMessages>
          </FormElement>
        </div>
      </div>
    );
  }
}

FormsPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default FormsPage;
