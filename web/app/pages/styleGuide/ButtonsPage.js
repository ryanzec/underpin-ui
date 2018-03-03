import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';
import {API_URL} from 'app/constants/api';

import CodeExample from '../../react/components/CodeExample';
import GroupedButton from 'src/components/Button/GroupedButton';
import Button from 'src/components/Button/Button';

import InteractiveExample from './assets/examples/Buttons/ButtonsInteractiveExample';

class ButtonsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeInput = (event) => {
    let formName = event.target.getAttribute('data-form-name');
    let fieldName = event.target.getAttribute('data-form-field');
    let value = getInputValueFromEvent(event);

    let newFormData = onChangeInputStateUpdater.call(this, this.props[formName], {
      fieldName,
      value,
      markAsDirty: event.target.getAttribute('type') === 'checkbox' || event.target.getAttribute('type') === 'radio',
    });

    this.props.dispatch(buttonExampleFormActions.set(newFormData));
  };

  onBlurInput = (event) => {
    let formName = event.target.getAttribute('data-form-name');
    let fieldName = event.target.getAttribute('data-form-field');

    let newFormData = onBlurInputStateUpdater.call(this, this.props[formName], {
      fieldName,
    });

    this.props.dispatch(buttonExampleFormActions.set(newFormData));
  };

  onClickButton() {
    const response = axios.get(`${API_URL}/users?delay=1000`);

    console.log(response);
  }

  render() {
    return (
      <div className="p-style-guide-buttons">
        <h1>Buttons</h1>
        <h2>Interactive Example</h2>
        <p>
          This interactive example allows you to play around with all the options of the button to see how everything
          works.
        </p>
        <CodeExample
          codeContent=""
          exampleComponent={InteractiveExample}
        />
        <div>
          <GroupedButton
            onClick={this.onClickButton}
            styleType="success"
          >
            Button 1
          </GroupedButton>
          <GroupedButton
            isPill
            isThin
          >
            Button 2
          </GroupedButton>
          <GroupedButton
            isThin
            styleType="danger"
          >
            Button 3
          </GroupedButton>
          <GroupedButton styleType="warning">Button 4</GroupedButton>
          <GroupedButton>Button 5</GroupedButton>
          <GroupedButton
            isThin
            styleType="info"
          >
            Button 6
          </GroupedButton>
        </div>
      </div>
    );
  }
}

ButtonsPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default ButtonsPage;
