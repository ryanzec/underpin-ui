import React from 'react';
import ReactDOM from 'react-dom';
import test from 'ava';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import isFunction from 'lodash/isFunction';

import * as component from 'src/components/ExtendText/ExtendText';

const ExtendText = component.ExtendText;

const options = [
  {
    display: 'display 1',
    value: 'value 1',
  },
  {
    display: 'display 2',
    value: 'value 2',
  },
  {
    display: 'display 3',
    value: 'value 3',
  },
  {
    display: 'display 4',
    value: 'value 4',
  },
  {
    display: 'display 5',
    value: 'value 5',
  },
];
const value = [options[1]];
const values = [options[1], options[3]];

// @todo: unit test styles???

test('createComponentDidMount creates a function that handles mounting of the component', (tester) => {
  const instance = {
    domEventManager: {
      add: sinon.spy(),
    },
    onClickOutside: sinon.spy(),
  };

  const componentDidMount = component.createComponentDidMount(instance);

  componentDidMount();

  tester.is(instance.domEventManager.add.callCount, 2);
  tester.is(instance.domEventManager.add.getCall(0).args[0], document);
  tester.is(instance.domEventManager.add.getCall(0).args[1], 'mousedown');
  tester.true(isFunction(instance.domEventManager.add.getCall(0).args[2]));
  tester.is(instance.domEventManager.add.getCall(1).args[0], document);
  tester.is(instance.domEventManager.add.getCall(1).args[1], 'click');
  tester.is(instance.domEventManager.add.getCall(1).args[2], instance.onClickOutside);
});

test('createComponentDidUpdate creates a function that updates auto complete options if last checked input value is null', (tester) => {
  const instance = {
    props: {},
    state: {
      isActive: true,
      lastCheckedInputValue: null,
    },
    updateAutoCompleteOptions: sinon.spy(),
  };
  const previousProps = {};

  const componentDidUpdate = component.createComponentDidUpdate(instance);

  componentDidUpdate(previousProps);

  tester.is(instance.updateAutoCompleteOptions.callCount, 1);
});

test('createComponentDidUpdate creates a function that updates auto complete options if last checked input value != input value', (tester) => {
  const instance = {
    props: {},
    state: {
      isActive: true,
      lastCheckedInputValue: 'a',
      inputValue: 'aa',
    },
    updateAutoCompleteOptions: sinon.spy(),
  };
  const previousProps = {};

  const componentDidUpdate = component.createComponentDidUpdate(instance);

  componentDidUpdate(previousProps);

  tester.is(instance.updateAutoCompleteOptions.callCount, 1);
});

test('createComponentDidUpdate creates a function that does not update auto complete options where last checked value matches current', (tester) => {
  const instance = {
    props: {},
    state: {
      isActive: true,
      lastCheckedInputValue: 'a',
      inputValue: 'a',
    },
    updateAutoCompleteOptions: sinon.spy(),
  };
  const previousProps = {};

  const componentDidUpdate = component.createComponentDidUpdate(instance);

  componentDidUpdate(previousProps);

  tester.is(instance.updateAutoCompleteOptions.callCount, 0);
});

test('createComponentDidUpdate creates a function that updates the input value if the prop values change', (tester) => {
  const value = 'value';
  const instance = {
    props: {
      value: [
        {
          value: 'a',
        },
      ],
    },
    setState: sinon.spy(),
    state: {
      isActive: false,
      lastCheckedInputValue: null,
    },
    getDisplayValue: sinon.stub().returns(value),
  };
  const previousProps = {
    value: [
      {
        value: 'b',
      },
    ],
  };
  const expectedArguments = [
    {
      inputValue: value,
    },
  ];

  const componentDidUpdate = component.createComponentDidUpdate(instance);

  componentDidUpdate(previousProps);

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArguments);
});

test('createComponentDidUpdate creates a function that does not updates the input value if the prop values did not change', (tester) => {
  const value = 'value';
  const instance = {
    props: {
      value: [
        {
          value: 'a',
        },
      ],
    },
    setState: sinon.spy(),
    state: {
      isActive: false,
      lastCheckedInputValue: null,
    },
    getDisplayValue: sinon.stub().returns(value),
  };
  const previousProps = {
    value: [
      {
        value: 'a',
      },
    ],
  };

  const componentDidUpdate = component.createComponentDidUpdate(instance);

  componentDidUpdate(previousProps);

  tester.is(instance.setState.callCount, 0);
});

test('createComponentDidUpdate creates a function that does not updates the input value if tagging is enabled', (tester) => {
  const value = 'value';
  const instance = {
    props: {
      multiple: true,
      value: [
        {
          value: 'a',
        },
      ],
    },
    setState: sinon.spy(),
    state: {
      isActive: false,
      lastCheckedInputValue: null,
    },
    getDisplayValue: sinon.stub().returns(value),
  };
  const previousProps = {
    value: [
      {
        value: 'b',
      },
    ],
  };

  const componentDidUpdate = component.createComponentDidUpdate(instance);

  componentDidUpdate(previousProps);

  tester.is(instance.setState.callCount, 0);
});

test('createComponentWillUnmount creates a function that handles removes stored event handlers', (tester) => {
  const instance = {
    domEventManager: {
      clear: sinon.spy(),
    },
  };

  const componentWillUnmount = component.createComponentWillUnmount(instance);

  componentWillUnmount();

  tester.is(instance.domEventManager.clear.callCount, 1);
});

test('createOnClickOutside creates a function that closes the auto complete', (tester) => {
  const instance = {
    state: {
      isActive: true,
    },
    closeAutoComplete: sinon.spy(),
  };

  const onClickOutside = component.createOnClickOutside(instance);

  onClickOutside();

  tester.is(instance.closeAutoComplete.callCount, 1);
});

test.serial(
  'createOnClickOutside creates a function that does not closes the auto complete if input is target',
  (tester) => {
    const target = {
      contains: sinon.spy(),
    };
    const instance = {
      state: {
        isActive: true,
      },
      inputElement: target,
      closeAutoComplete: sinon.spy(),
    };
    const event = {
      target,
    };

    const findStub = sinon.stub(ReactDOM, 'findDOMNode').returns(target);

    const onClickOutside = component.createOnClickOutside(instance);

    onClickOutside(event);

    findStub.restore();

    tester.is(instance.closeAutoComplete.callCount, 0);
  }
);

test.serial(
  'createOnClickOutside creates a function that does not closes the auto complete if input contains target',
  (tester) => {
    const target = {
      contains: () => {
        return true;
      },
    };
    const instance = {
      state: {
        isActive: true,
      },
      inputElement: target,
      closeAutoComplete: sinon.spy(),
    };
    const event = {
      target,
    };

    const findStub = sinon.stub(ReactDOM, 'findDOMNode').returns(target);

    const onClickOutside = component.createOnClickOutside(instance);

    onClickOutside(event);

    findStub.restore();

    tester.is(instance.closeAutoComplete.callCount, 0);
  }
);

test.serial(
  'createOnClickOutside creates a function that does not closes the auto complete if drop down element is target',
  (tester) => {
    const target = {
      contains: sinon.spy(),
    };
    const instance = {
      state: {
        isActive: true,
      },
      dropDownElement: target,
      closeAutoComplete: sinon.spy(),
    };
    const event = {
      target,
    };

    const findStub = sinon.stub(ReactDOM, 'findDOMNode').returns(target);

    const onClickOutside = component.createOnClickOutside(instance);

    onClickOutside(event);

    findStub.restore();

    tester.is(instance.closeAutoComplete.callCount, 0);
  }
);

test.serial(
  'createOnClickOutside creates a function that does not closes the auto complete if drop down element contains target',
  (tester) => {
    const target = {
      contains: () => {
        return true;
      },
    };
    const instance = {
      state: {
        isActive: true,
      },
      dropDownElement: target,
      closeAutoComplete: sinon.spy(),
    };
    const event = {
      target,
    };

    const findStub = sinon.stub(ReactDOM, 'findDOMNode').returns(target);

    const onClickOutside = component.createOnClickOutside(instance);

    onClickOutside(event);

    findStub.restore();

    tester.is(instance.closeAutoComplete.callCount, 0);
  }
);

test.serial(
  'createOnClickOutside creates a function that does not closes the auto complete if auto complete is target',
  (tester) => {
    const target = {
      contains: sinon.spy(),
    };
    const instance = {
      state: {
        isActive: true,
      },
      autoCompleteElement: target,
      closeAutoComplete: sinon.spy(),
    };
    const event = {
      target,
    };

    const findStub = sinon.stub(ReactDOM, 'findDOMNode').returns(target);

    const onClickOutside = component.createOnClickOutside(instance);

    onClickOutside(event);

    findStub.restore();

    tester.is(instance.closeAutoComplete.callCount, 0);
  }
);

test.serial(
  'createOnClickOutside creates a function that does not closes the auto complete if auto complete contains target',
  (tester) => {
    const target = {
      contains: () => {
        return true;
      },
    };
    const instance = {
      state: {
        isActive: true,
      },
      autoCompleteElement: target,
      closeAutoComplete: sinon.spy(),
    };
    const event = {
      target,
    };

    const findStub = sinon.stub(ReactDOM, 'findDOMNode').returns(target);

    const onClickOutside = component.createOnClickOutside(instance);

    onClickOutside(event);

    findStub.restore();

    tester.is(instance.closeAutoComplete.callCount, 0);
  }
);

test('createOnFocusInput creates a function that handles activating the component', (tester) => {
  const instance = {
    setState: sinon.spy(),
  };
  const expectedArguments = [
    {
      isActive: true,
      activeAutoCompleteOptionIndex: 0,
    },
  ];

  const onFocusInput = component.createOnFocusInput(instance);

  onFocusInput();

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArguments);
});

test('createOnKeyDown creates a function that handles the escape key', (tester) => {
  const instance = {
    closeAutoComplete: sinon.spy(),
  };
  const event = {
    keyCode: 27,
    preventDefault: sinon.spy(),
  };

  const onKeyDown = component.createOnKeyDown(instance);

  onKeyDown(event);

  tester.is(instance.closeAutoComplete.callCount, 1);
  tester.deepEqual(event.preventDefault.callCount, 1);
});

test('createOnKeyDown creates a function that handles the enter key', (tester) => {
  const instance = {
    selectActiveItem: sinon.spy(),
  };
  const event = {
    keyCode: 13,
    preventDefault: sinon.spy(),
  };

  const onKeyDown = component.createOnKeyDown(instance);

  onKeyDown(event);

  tester.is(instance.selectActiveItem.callCount, 1);
  tester.deepEqual(event.preventDefault.callCount, 1);
});

test('createOnKeyDown creates a function that handles the up arrow key', (tester) => {
  const instance = {
    decreaseActiveAutoCompleteOption: sinon.spy(),
  };
  const event = {
    keyCode: 38,
    preventDefault: sinon.spy(),
  };

  const onKeyDown = component.createOnKeyDown(instance);

  onKeyDown(event);

  tester.is(instance.decreaseActiveAutoCompleteOption.callCount, 1);
  tester.deepEqual(event.preventDefault.callCount, 1);
});

test('createOnKeyDown creates a function that handles the down arrow key', (tester) => {
  const instance = {
    increaseActiveAutoCompleteOption: sinon.spy(),
  };
  const event = {
    keyCode: 40,
    preventDefault: sinon.spy(),
  };

  const onKeyDown = component.createOnKeyDown(instance);

  onKeyDown(event);

  tester.is(instance.increaseActiveAutoCompleteOption.callCount, 1);
  tester.deepEqual(event.preventDefault.callCount, 1);
});

test('createOnKeyDown creates a function that handles the tab key', (tester) => {
  const instance = {
    selectActiveItem: sinon.spy(),
  };
  const event = {
    keyCode: 9,
  };

  const onKeyDown = component.createOnKeyDown(instance);

  onKeyDown(event);

  tester.is(instance.selectActiveItem.callCount, 1);
});

test('createOnKeyDown creates a function that handles the configured add tag on key code', (tester) => {
  const instance = {
    props: {
      addTagOnKeyCode: 1,
      allowCreate: true,
      multiple: true,
    },
    addTagKeyCodeEnter: false,
    selectActiveItem: sinon.spy(),
  };
  const event = {
    keyCode: 1,
    shiftKey: false,
    preventDefault: sinon.spy(),
  };

  const onKeyDown = component.createOnKeyDown(instance);

  onKeyDown(event);

  tester.is(instance.selectActiveItem.callCount, 1);
  tester.deepEqual(event.preventDefault.callCount, 1);
  tester.true(instance.addTagKeyCodeEnter);
});

test('createOnKeyDown creates a function that does not handle the configured add tag on key code is tagging not enabled', (tester) => {
  const instance = {
    props: {
      addTagOnKeyCode: 1,
      allowCreate: true,
      multiple: false,
    },
    addTagKeyCodeEnter: false,
    selectActiveItem: sinon.spy(),
  };
  const event = {
    keyCode: 1,
    shiftKey: false,
    preventDefault: sinon.spy(),
  };

  const onKeyDown = component.createOnKeyDown(instance);

  onKeyDown(event);

  tester.is(instance.selectActiveItem.callCount, 0);
  tester.deepEqual(event.preventDefault.callCount, 0);
  tester.false(instance.addTagKeyCodeEnter);
});

test('createOnKeyDown creates a function that does not handle the configured add tag on key code if allow create is not enabled', (tester) => {
  const instance = {
    props: {
      addTagOnKeyCode: 1,
      allowCreate: false,
      multiple: true,
    },
    addTagKeyCodeEnter: false,
    selectActiveItem: sinon.spy(),
  };
  const event = {
    keyCode: 1,
    shiftKey: false,
    preventDefault: sinon.spy(),
  };

  const onKeyDown = component.createOnKeyDown(instance);

  onKeyDown(event);

  tester.is(instance.selectActiveItem.callCount, 0);
  tester.deepEqual(event.preventDefault.callCount, 0);
  tester.false(instance.addTagKeyCodeEnter);
});

test('createOnKeyDown creates a function that does not handle the configured add tag on key code if shift is also helded down', (tester) => {
  const instance = {
    props: {
      addTagOnKeyCode: 1,
      allowCreate: true,
      multiple: true,
    },
    addTagKeyCodeEnter: false,
    selectActiveItem: sinon.spy(),
  };
  const event = {
    keyCode: 1,
    shiftKey: true,
    preventDefault: sinon.spy(),
  };

  const onKeyDown = component.createOnKeyDown(instance);

  onKeyDown(event);

  tester.is(instance.selectActiveItem.callCount, 0);
  tester.deepEqual(event.preventDefault.callCount, 0);
  tester.false(instance.addTagKeyCodeEnter);
});

test('createOnMouseEnterAutoCompleteOption creates a function that handles update active auto complete option', (tester) => {
  const instance = {
    setState: sinon.spy(),
  };
  const event = {
    target: {
      getAttribute: sinon.stub().returns('3'),
    },
  };
  const expectedArguments = [
    {
      activeAutoCompleteOptionIndex: parseInt(event.target.getAttribute('data-index'), 10),
    },
  ];

  const onMouseEnterAutoCompleteOption = component.createOnMouseEnterAutoCompleteOption(instance);

  onMouseEnterAutoCompleteOption(event);

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArguments);
});

test('createOnMouseDownAutoCompleteOption creates a function that handles selecting the active item', (tester) => {
  const instance = {
    selectActiveItem: sinon.spy(),
  };

  const onMouseDownAutoCompleteOption = component.createOnMouseDownAutoCompleteOption(instance);

  onMouseDownAutoCompleteOption();

  tester.is(instance.selectActiveItem.callCount, 1);
});

test('createOnChangeInput creates a function that handles selecting the active item', (tester) => {
  const value = 'value';
  const inputValue = 'inputValue';
  const instance = {
    state: {
      inputValue,
    },
    setState: sinon.spy(),
  };
  const event = {
    target: {
      value,
    },
  };
  const expectedArguments = [
    {
      previousInputValue: inputValue,
      inputValue: value,
    },
  ];

  const onChangeInput = component.createOnChangeInput(instance);

  onChangeInput(event);

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArguments);
});

test('createOnClickClearAll creates a function that handles clearing all values', (tester) => {
  const instance = {
    setValue: sinon.spy(),
  };
  const expectedArguments = [[], ''];

  const onClickClearAll = component.createOnClickClearAll(instance);

  onClickClearAll();

  tester.is(instance.setValue.callCount, 1);
  tester.deepEqual(instance.setValue.getCall(0).args, expectedArguments);
});

test('createOnClickDeleteTag creates a function the handles removing a value', (tester) => {
  const removeIndex = 0;
  const value = [
    {
      display: 'display1',
      value: 'value1,',
    },
    {
      display: 'display2',
      value: 'value2,',
    },
  ];
  const instance = {
    props: {
      value,
    },
    setValue: sinon.spy(),
  };
  const event = {
    currentTarget: {
      getAttribute: sinon.stub().returns(removeIndex),
    },
  };
  const expectedArgumentsState = [
    [
      {
        display: 'display2',
        value: 'value2,',
      },
    ],
    '',
  ];
  const expectedArgumentsAttribute = ['data-key'];

  const onClickDeleteTag = component.createOnClickDeleteTag(instance);

  onClickDeleteTag(event);

  tester.is(event.currentTarget.getAttribute.callCount, 1);
  tester.deepEqual(event.currentTarget.getAttribute.getCall(0).args, expectedArgumentsAttribute);
  tester.is(instance.setValue.callCount, 1);
  tester.deepEqual(instance.setValue.getCall(0).args, expectedArgumentsState);
});

test.serial('createOnClickDropDownIndicator creates a function that handles focusing the input', (tester) => {
  const instance = {};
  const findDOMNodeReturn = {
    focus: sinon.spy(),
  };

  const findStub = sinon.stub(ReactDOM, 'findDOMNode').returns(findDOMNodeReturn);

  const onClickDropDownIndicator = component.createOnClickDropDownIndicator(instance);

  onClickDropDownIndicator();

  findStub.restore();

  tester.is(findDOMNodeReturn.focus.callCount, 1);
});

test('createAsyncOptionsCallback creates a function the handles ...', (tester) => {
  const inputValue = 'display';
  const options = [
    {
      display: 'display1',
      value: 'value1,',
    },
    {
      display: 'display2',
      value: 'value2,',
    },
  ];
  const callbackOptions = {
    options,
  };
  const instance = {
    props: {},
    state: {
      inputValue,
    },
    setState: sinon.spy(),
    getExactMatchAutoCompleteOptionIndex: sinon.stub().returns(-1),
    filterAutoCompleteOptions: sinon.stub().returns(options),
    generateObjectValueFromInput: sinon.spy(),
    repositionAutoCompleteContainerToActiveOption: sinon.spy(),
  };
  const expectedArgumentsMatch = [inputValue, options];
  const expectedArgumentsState = [
    {
      isLoading: false,
      activeAutoCompleteOptions: callbackOptions.options,
      activeAutoCompleteOptionIndex: 0,
    },
    instance.repositionAutoCompleteContainerToActiveOption,
  ];
  const expectedArgumentsFilter = [options];

  const asyncOptionsCallback = component.createAsyncOptionsCallback(instance);

  asyncOptionsCallback(callbackOptions);

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArgumentsState);
  tester.is(instance.getExactMatchAutoCompleteOptionIndex.callCount, 1);
  tester.deepEqual(instance.getExactMatchAutoCompleteOptionIndex.getCall(0).args, expectedArgumentsMatch);
  tester.is(instance.filterAutoCompleteOptions.callCount, 1);
  tester.deepEqual(instance.filterAutoCompleteOptions.getCall(0).args, expectedArgumentsFilter);
  tester.is(instance.generateObjectValueFromInput.callCount, 0);
});

test('createAsyncOptionsCallback creates a function the handles process async option with allow create creating new option', (tester) => {
  const inputValue = 'display';
  const options = [
    {
      display: 'display1',
      value: 'value1,',
    },
    {
      display: 'display2',
      value: 'value2,',
    },
  ];
  const callbackOptions = {
    options,
  };
  const generateReturns = {
    display: 'display',
    value: 'display',
  };
  const filterReturns = [options[0]];
  const instance = {
    props: {
      allowCreate: true,
    },
    state: {
      inputValue,
    },
    setState: sinon.spy(),
    getExactMatchAutoCompleteOptionIndex: sinon.stub().returns(-1),
    filterAutoCompleteOptions: sinon.stub().returns(filterReturns),
    generateObjectValueFromInput: sinon.stub().returns(generateReturns),
    repositionAutoCompleteContainerToActiveOption: sinon.spy(),
  };
  const expectedArgumentsMatch1 = [inputValue, options];
  const expectedArgumentsMatch2 = [inputValue, filterReturns];
  const expectedArgumentsState = [
    {
      isLoading: false,
      activeAutoCompleteOptions: [generateReturns, ...filterReturns],
      activeAutoCompleteOptionIndex: 0,
    },
    instance.repositionAutoCompleteContainerToActiveOption,
  ];
  const expectedArgumentsFilter = [options];

  const asyncOptionsCallback = component.createAsyncOptionsCallback(instance);

  asyncOptionsCallback(callbackOptions);

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArgumentsState);
  tester.is(instance.getExactMatchAutoCompleteOptionIndex.callCount, 2);
  tester.deepEqual(instance.getExactMatchAutoCompleteOptionIndex.getCall(0).args, expectedArgumentsMatch1);
  tester.deepEqual(instance.getExactMatchAutoCompleteOptionIndex.getCall(1).args, expectedArgumentsMatch2);
  tester.is(instance.filterAutoCompleteOptions.callCount, 1);
  tester.deepEqual(instance.filterAutoCompleteOptions.getCall(0).args, expectedArgumentsFilter);
  tester.is(instance.generateObjectValueFromInput.callCount, 1);
});

test('createAsyncOptionsCallback creates a function the handles process async option with allow create not creating new option', (tester) => {
  const inputValue = 'display';
  const options = [
    {
      display: 'display1',
      value: 'value1,',
    },
    {
      display: 'display2',
      value: 'value2,',
    },
  ];
  const callbackOptions = {
    options,
  };
  const generateReturns = {
    display: 'display',
    value: 'display',
  };
  const instance = {
    props: {
      allowCreate: true,
    },
    state: {
      inputValue,
    },
    setState: sinon.spy(),
    getExactMatchAutoCompleteOptionIndex: sinon.stub().returns(1),
    filterAutoCompleteOptions: sinon.stub().returns(options),
    generateObjectValueFromInput: sinon.stub().returns(generateReturns),
    repositionAutoCompleteContainerToActiveOption: sinon.spy(),
  };
  const expectedArgumentsMatch1 = [inputValue, options];
  const expectedArgumentsMatch2 = [inputValue, options];
  const expectedArgumentsState = [
    {
      isLoading: false,
      activeAutoCompleteOptions: options,
      activeAutoCompleteOptionIndex: 1,
    },
    instance.repositionAutoCompleteContainerToActiveOption,
  ];
  const expectedArgumentsFilter = [options];

  const asyncOptionsCallback = component.createAsyncOptionsCallback(instance);

  asyncOptionsCallback(callbackOptions);

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArgumentsState);
  tester.is(instance.getExactMatchAutoCompleteOptionIndex.callCount, 2);
  tester.deepEqual(instance.getExactMatchAutoCompleteOptionIndex.getCall(0).args, expectedArgumentsMatch1);
  tester.deepEqual(instance.getExactMatchAutoCompleteOptionIndex.getCall(1).args, expectedArgumentsMatch2);
  tester.is(instance.filterAutoCompleteOptions.callCount, 1);
  tester.deepEqual(instance.filterAutoCompleteOptions.getCall(0).args, expectedArgumentsFilter);
  tester.is(instance.generateObjectValueFromInput.callCount, 0);
});

test('createGenerateObjectValueFromInput creates a function that handles generate an object value form the input', (tester) => {
  const inputValue = 'inputValue';
  const instance = {
    props: {
      createTemplate: '%%value%%',
    },
    state: {
      inputValue,
    },
  };
  const expectedResults = {
    display: inputValue,
    value: inputValue,
    isNew: true,
  };

  const generateObjectValueFromInput = component.createGenerateObjectValueFromInput(instance);

  const results = generateObjectValueFromInput();

  tester.deepEqual(results, expectedResults);
});

test('createSelectActiveItem creates a function that handles updating the value', (tester) => {
  const activeAutoCompleteOptions = [1];
  const activeAutoCompleteOptionIndex = 0;
  const instance = {
    state: {
      activeAutoCompleteOptions,
      activeAutoCompleteOptionIndex,
    },
    updateValue: sinon.spy(),
    filterAutoCompleteOptions: sinon.stub().returns(activeAutoCompleteOptions),
  };
  const expectedArguments = [activeAutoCompleteOptions[activeAutoCompleteOptionIndex]];

  const selectActiveItem = component.createSelectActiveItem(instance);

  selectActiveItem();

  tester.is(instance.updateValue.callCount, 1);
  tester.deepEqual(instance.updateValue.getCall(0).args, expectedArguments);
});

test('createSelectActiveItem creates a function that does not handle updating the value if the selected index is not value', (tester) => {
  const activeAutoCompleteOptions = [1];
  const activeAutoCompleteOptionIndex = 1;
  const instance = {
    state: {
      activeAutoCompleteOptions,
      activeAutoCompleteOptionIndex,
    },
    updateValue: sinon.spy(),
  };

  const selectActiveItem = component.createSelectActiveItem(instance);

  selectActiveItem();

  tester.is(instance.updateValue.callCount, 0);
});

test('createSelectActiveItem creates a function that does not handle updating the value if no auto complete options available', (tester) => {
  const activeAutoCompleteOptions = [];
  const activeAutoCompleteOptionIndex = 0;
  const instance = {
    state: {
      activeAutoCompleteOptions,
      activeAutoCompleteOptionIndex,
    },
    updateValue: sinon.spy(),
  };

  const selectActiveItem = component.createSelectActiveItem(instance);

  selectActiveItem();

  tester.is(instance.updateValue.callCount, 0);
});

test('createSelectActiveItem creates a function that handles updating the value multiple times with filtering and multiple enabled', (tester) => {
  const activeAutoCompleteOptions = [
    {
      display: 'display1',
      value: 'value1',
    },
    {
      display: 'display2',
      value: 'value2',
    },
  ];
  const activeAutoCompleteOptionIndex = 0;
  const instance = {
    state: {
      activeAutoCompleteOptions,
      activeAutoCompleteOptionIndex,
    },
    updateValue: sinon.spy(),
    filterAutoCompleteOptions: sinon.stub().returns(activeAutoCompleteOptions),
  };
  const expectedArguments1 = [activeAutoCompleteOptions[0]];
  const expectedArguments2 = [activeAutoCompleteOptions[1]];

  let selectActiveItem = component.createSelectActiveItem(instance);

  selectActiveItem();

  tester.is(instance.filterAutoCompleteOptions.callCount, 1);
  tester.deepEqual(instance.filterAutoCompleteOptions.getCall(0).args, [instance.state.activeAutoCompleteOptions]);
  tester.is(instance.updateValue.callCount, 1);
  tester.deepEqual(instance.updateValue.getCall(0).args, expectedArguments1);

  instance.filterAutoCompleteOptions = sinon.stub().returns([activeAutoCompleteOptions[1]]);

  selectActiveItem = component.createSelectActiveItem(instance);

  selectActiveItem();

  tester.is(instance.filterAutoCompleteOptions.callCount, 1);
  tester.deepEqual(instance.filterAutoCompleteOptions.getCall(0).args, [instance.state.activeAutoCompleteOptions]);
  tester.is(instance.updateValue.callCount, 2);
  tester.deepEqual(instance.updateValue.getCall(1).args, expectedArguments2);
});

test('createUpdateValue creates a function that handles updating the value for non-multi', (tester) => {
  const multiple = false;
  const displayReturn = 'display';
  const newValue = {
    display: 'test',
    value: 'TEST',
  };
  const instance = {
    props: {
      multiple,
    },
    setValue: sinon.spy(),
    getDisplayValue: sinon.stub().returns(displayReturn),
  };
  const expectedArgumentsSetValue = [[newValue], displayReturn];
  const expectedArgumentsGetDisplayValue = [multiple, [newValue]];

  const updateValue = component.createUpdateValue(instance);

  updateValue(newValue);

  tester.is(instance.setValue.callCount, 1);
  tester.deepEqual(instance.setValue.getCall(0).args, expectedArgumentsSetValue);
  tester.is(instance.getDisplayValue.callCount, 1);
  tester.deepEqual(instance.getDisplayValue.getCall(0).args, expectedArgumentsGetDisplayValue);
});

test('createUpdateValue creates a function that handles updating the value for new value', (tester) => {
  const multiple = false;
  const displayReturn = 'display';
  const newValue = {
    value: 'TEST',
    isNew: true,
  };
  const realNewValue = {
    ...newValue,
    display: newValue.value,
  };
  const instance = {
    props: {
      multiple,
    },
    setValue: sinon.spy(),
    getDisplayValue: sinon.stub().returns(displayReturn),
  };
  const expectedArgumentsSetValue = [[realNewValue], displayReturn];
  const expectedArgumentsGetDisplayValue = [multiple, [realNewValue]];

  const updateValue = component.createUpdateValue(instance);

  updateValue(newValue);

  tester.is(instance.setValue.callCount, 1);
  tester.deepEqual(instance.setValue.getCall(0).args, expectedArgumentsSetValue);
  tester.is(instance.getDisplayValue.callCount, 1);
  tester.deepEqual(instance.getDisplayValue.getCall(0).args, expectedArgumentsGetDisplayValue);
});

test('createUpdateValue creates a function that handles updating the value for multi if current value is not array', (tester) => {
  const multiple = true;
  const displayReturn = 'display';
  const newValue = {
    display: 'test',
    value: 'TEST',
  };
  const instance = {
    props: {
      multiple,
    },
    setValue: sinon.spy(),
    getDisplayValue: sinon.stub().returns(displayReturn),
  };
  const expectedArgumentsSetValue = [[newValue], displayReturn];
  const expectedArgumentsGetDisplayValue = [multiple, [newValue]];

  const updateValue = component.createUpdateValue(instance);

  updateValue(newValue);

  tester.is(instance.setValue.callCount, 1);
  tester.deepEqual(instance.setValue.getCall(0).args, expectedArgumentsSetValue);
  tester.is(instance.getDisplayValue.callCount, 1);
  tester.deepEqual(instance.getDisplayValue.getCall(0).args, expectedArgumentsGetDisplayValue);
});

test('createUpdateValue creates a function that handles updating the value for multi if current value is array', (tester) => {
  const multiple = true;
  const displayReturn = 'display';
  const value = [
    {
      display: 'test1',
      value: 'TEST1',
    },
  ];
  const newValue = {
    display: 'test',
    value: 'TEST',
  };
  const instance = {
    props: {
      multiple,
      value,
    },
    setValue: sinon.spy(),
    getDisplayValue: sinon.stub().returns(displayReturn),
  };
  const expectedArgumentsSetValue = [[value[0], newValue], displayReturn];
  const expectedArgumentsGetDisplayValue = [multiple, [value[0], newValue]];

  const updateValue = component.createUpdateValue(instance);

  updateValue(newValue);

  tester.is(instance.setValue.callCount, 1);
  tester.deepEqual(instance.setValue.getCall(0).args, expectedArgumentsSetValue);
  tester.is(instance.getDisplayValue.callCount, 1);
  tester.deepEqual(instance.getDisplayValue.getCall(0).args, expectedArgumentsGetDisplayValue);
});

test('createUpdateAutoCompleteOptions creates a function that handles clearing auto complete options', (tester) => {
  const inputValue = 'input value';
  const options = [];
  const instance = {
    props: {
      options,
      asyncOptions: sinon.spy(),
    },
    state: {
      inputValue,
    },
    setState: sinon.spy(),
    repositionAutoCompleteContainerToActiveOption: sinon.spy(),
    filterAutoCompleteOptions: sinon.spy(),
    getExactMatchAutoCompleteOptionIndex: sinon.spy(),
  };
  const expectedArguments = [
    {
      lastCheckedInputValue: inputValue,
      activeAutoCompleteOptions: [],
    },
    instance.repositionAutoCompleteContainerToActiveOption,
  ];

  const updateAutoCompleteOptions = component.createUpdateAutoCompleteOptions(instance);

  updateAutoCompleteOptions();

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArguments);
  tester.is(instance.props.asyncOptions.callCount, 0);
  tester.is(instance.filterAutoCompleteOptions.callCount, 0);
  tester.is(instance.getExactMatchAutoCompleteOptionIndex.callCount, 0);
});

test('createUpdateAutoCompleteOptions creates a function that handles updating the auto complete options it does not container input value', (tester) => {
  const inputValue = 'input value';
  const options = [
    {
      display: 'display',
      value: 'value',
    },
  ];
  const instance = {
    props: {
      options,
    },
    state: {
      inputValue,
    },
    setState: sinon.spy(),
    repositionAutoCompleteContainerToActiveOption: sinon.spy(),
    filterAutoCompleteOptions: sinon.stub().returns(options),
    getExactMatchAutoCompleteOptionIndex: sinon.stub().returns(-1),
  };
  const expectedArgumentsState = [
    {
      lastCheckedInputValue: inputValue,
      activeAutoCompleteOptions: options,
      activeAutoCompleteOptionIndex: 0,
    },
    instance.repositionAutoCompleteContainerToActiveOption,
  ];
  const expectedArgumentsFilter = [options];
  const expectedArgumentMatch = [inputValue, options];

  const updateAutoCompleteOptions = component.createUpdateAutoCompleteOptions(instance);

  updateAutoCompleteOptions();

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArgumentsState);
  tester.is(instance.filterAutoCompleteOptions.callCount, 1);
  tester.deepEqual(instance.filterAutoCompleteOptions.getCall(0).args, expectedArgumentsFilter);
  tester.is(instance.getExactMatchAutoCompleteOptionIndex.callCount, 1);
  tester.deepEqual(instance.getExactMatchAutoCompleteOptionIndex.getCall(0).args, expectedArgumentMatch);
});

test('createUpdateAutoCompleteOptions creates a function that handles async options when last checked is null', (tester) => {
  const inputValue = 'input value';
  const lastCheckedInputValue = null;
  const options = [];
  const instance = {
    props: {
      options,
      asyncOptions: sinon.spy(),
      characterThreshold: 3,
    },
    state: {
      isActive: true,
      inputValue,
      lastCheckedInputValue,
    },
    setState: sinon.spy(),
    asyncOptionsCallback: sinon.spy(),
    repositionAutoCompleteContainerToActiveOption: sinon.spy(),
  };
  const expectedArgumentsState = [
    {
      lastCheckedInputValue: inputValue,
      activeAutoCompleteOptions: [],
      isLoading: true,
    },
    instance.repositionAutoCompleteContainerToActiveOption,
  ];
  const expectedArgumentsAsync = [inputValue, instance.asyncOptionsCallback];

  const updateAutoCompleteOptions = component.createUpdateAutoCompleteOptions(instance);

  updateAutoCompleteOptions();

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArgumentsState);
  tester.is(instance.props.asyncOptions.callCount, 1);
  tester.deepEqual(instance.props.asyncOptions.getCall(0).args, expectedArgumentsAsync);
});

test('createUpdateAutoCompleteOptions creates a function that handles async options when last checked does not match input value', (tester) => {
  const inputValue = 'input value';
  const lastCheckedInputValue = 'input valuee';
  const options = [];
  const instance = {
    props: {
      options,
      asyncOptions: sinon.spy(),
      characterThreshold: 3,
    },
    state: {
      isActive: true,
      inputValue,
      lastCheckedInputValue,
    },
    setState: sinon.spy(),
    asyncOptionsCallback: sinon.spy(),
    repositionAutoCompleteContainerToActiveOption: sinon.spy(),
  };
  const expectedArguments = [
    {
      lastCheckedInputValue: inputValue,
      activeAutoCompleteOptions: [],
      isLoading: true,
    },
    instance.repositionAutoCompleteContainerToActiveOption,
  ];
  const expectedArgumentsAsync = [inputValue, instance.asyncOptionsCallback];

  const updateAutoCompleteOptions = component.createUpdateAutoCompleteOptions(instance);

  updateAutoCompleteOptions();

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArguments);
  tester.is(instance.props.asyncOptions.callCount, 1);
  tester.deepEqual(instance.props.asyncOptions.getCall(0).args, expectedArgumentsAsync);
});

test('createUpdateAutoCompleteOptions creates a function that does not handle async options not active', (tester) => {
  const inputValue = 'input value';
  const lastCheckedInputValue = null;
  const options = [];
  const instance = {
    props: {
      options,
      asyncOptions: sinon.spy(),
      characterThreshold: 3,
    },
    state: {
      isActive: false,
      inputValue,
      lastCheckedInputValue,
    },
    setState: sinon.spy(),
    asyncOptionsCallback: sinon.spy(),
    repositionAutoCompleteContainerToActiveOption: sinon.spy(),
    filterAutoCompleteOptions: sinon.spy(),
    getExactMatchAutoCompleteOptionIndex: sinon.spy(),
  };
  const expectedArguments = [
    {
      lastCheckedInputValue: inputValue,
      activeAutoCompleteOptions: [],
    },
    instance.repositionAutoCompleteContainerToActiveOption,
  ];

  const updateAutoCompleteOptions = component.createUpdateAutoCompleteOptions(instance);

  updateAutoCompleteOptions();

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArguments);
  tester.is(instance.props.asyncOptions.callCount, 0);
  tester.is(instance.filterAutoCompleteOptions.callCount, 0);
  tester.is(instance.getExactMatchAutoCompleteOptionIndex.callCount, 0);
});

test('createUpdateAutoCompleteOptions creates a function that does not handle async options when async options not set', (tester) => {
  const inputValue = 'input value';
  const lastCheckedInputValue = null;
  const options = [];
  const instance = {
    props: {
      options,
      characterThreshold: 3,
    },
    state: {
      isActive: true,
      inputValue,
      lastCheckedInputValue,
    },
    setState: sinon.spy(),
    repositionAutoCompleteContainerToActiveOption: sinon.spy(),
    filterAutoCompleteOptions: sinon.spy(),
    getExactMatchAutoCompleteOptionIndex: sinon.spy(),
  };
  const expectedArguments = [
    {
      lastCheckedInputValue: inputValue,
      activeAutoCompleteOptions: [],
    },
    instance.repositionAutoCompleteContainerToActiveOption,
  ];

  const updateAutoCompleteOptions = component.createUpdateAutoCompleteOptions(instance);

  updateAutoCompleteOptions();

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArguments);
  tester.is(instance.filterAutoCompleteOptions.callCount, 0);
  tester.is(instance.getExactMatchAutoCompleteOptionIndex.callCount, 0);
});

test('createUpdateAutoCompleteOptions creates a function that does not handle async options when last checked match input value', (tester) => {
  const inputValue = 'input value';
  const lastCheckedInputValue = inputValue;
  const options = [];
  const instance = {
    props: {
      options,
      characterThreshold: 3,
      asyncOptions: sinon.spy(),
    },
    state: {
      isActive: true,
      inputValue,
      lastCheckedInputValue,
    },
    setState: sinon.spy(),
    asyncOptionsCallback: sinon.spy(),
    repositionAutoCompleteContainerToActiveOption: sinon.spy(),
    filterAutoCompleteOptions: sinon.spy(),
    getExactMatchAutoCompleteOptionIndex: sinon.spy(),
  };
  const expectedArguments = [
    {
      lastCheckedInputValue: inputValue,
      activeAutoCompleteOptions: [],
    },
    instance.repositionAutoCompleteContainerToActiveOption,
  ];

  const updateAutoCompleteOptions = component.createUpdateAutoCompleteOptions(instance);

  updateAutoCompleteOptions();

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArguments);
  tester.is(instance.props.asyncOptions.callCount, 0);
  tester.is(instance.filterAutoCompleteOptions.callCount, 0);
  tester.is(instance.getExactMatchAutoCompleteOptionIndex.callCount, 0);
});

test('createUpdateAutoCompleteOptions creates a function that does not handle async options when chracter thredhold is not reached', (tester) => {
  const inputValue = 'input value';
  const lastCheckedInputValue = inputValue;
  const options = [];
  const instance = {
    props: {
      options,
      characterThreshold: 333,
      asyncOptions: sinon.spy(),
    },
    state: {
      isActive: true,
      inputValue,
      lastCheckedInputValue,
    },
    setState: sinon.spy(),
    asyncOptionsCallback: sinon.spy(),
    repositionAutoCompleteContainerToActiveOption: sinon.spy(),
    filterAutoCompleteOptions: sinon.spy(),
    getExactMatchAutoCompleteOptionIndex: sinon.spy(),
  };
  const expectedArguments = [
    {
      lastCheckedInputValue: inputValue,
      activeAutoCompleteOptions: [],
    },
    instance.repositionAutoCompleteContainerToActiveOption,
  ];

  const updateAutoCompleteOptions = component.createUpdateAutoCompleteOptions(instance);

  updateAutoCompleteOptions();

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArguments);
  tester.is(instance.props.asyncOptions.callCount, 0);
  tester.is(instance.filterAutoCompleteOptions.callCount, 0);
  tester.is(instance.getExactMatchAutoCompleteOptionIndex.callCount, 0);
});

test('createUpdateAutoCompleteOptions creates a function that handles updating the auto complete options with add new option if value not in options', (tester) => {
  const inputValue = 'input value';
  const addOption = {
    display: 'ADD',
    value: inputValue,
  };
  const options = [
    {
      display: 'display',
      value: 'value',
    },
  ];
  const instance = {
    props: {
      options,
      allowCreate: true,
    },
    state: {
      inputValue,
    },
    setState: sinon.spy(),
    repositionAutoCompleteContainerToActiveOption: sinon.spy(),
    filterAutoCompleteOptions: sinon.stub().returns(options),
    getExactMatchAutoCompleteOptionIndex: sinon.stub().returns(-1),
    generateObjectValueFromInput: sinon.stub().returns(addOption),
  };
  const expectedArgumentsState = [
    {
      lastCheckedInputValue: inputValue,
      activeAutoCompleteOptions: [addOption, ...options],
      activeAutoCompleteOptionIndex: 0,
    },
    instance.repositionAutoCompleteContainerToActiveOption,
  ];
  const expectedArgumentsFilter = [options];
  const expectedArgumentMatch = [inputValue, options];

  const updateAutoCompleteOptions = component.createUpdateAutoCompleteOptions(instance);

  updateAutoCompleteOptions();

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArgumentsState);
  tester.is(instance.filterAutoCompleteOptions.callCount, 1);
  tester.deepEqual(instance.filterAutoCompleteOptions.getCall(0).args, expectedArgumentsFilter);
  tester.is(instance.getExactMatchAutoCompleteOptionIndex.callCount, 1);
  tester.deepEqual(instance.getExactMatchAutoCompleteOptionIndex.getCall(0).args, expectedArgumentMatch);
  tester.is(instance.generateObjectValueFromInput.callCount, 1);
});

test('createUpdateAutoCompleteOptions creates a function that does handles updating the auto complete options with add new option if value already in options', (tester) => {
  const inputValue = 'input value';
  const addOption = {
    display: 'ADD',
    value: inputValue,
  };
  const options = [
    {
      display: 'display',
      value: 'value',
    },
  ];
  const instance = {
    props: {
      options,
      allowCreate: true,
    },
    state: {
      inputValue,
    },
    setState: sinon.spy(),
    repositionAutoCompleteContainerToActiveOption: sinon.spy(),
    filterAutoCompleteOptions: sinon.stub().returns(options),
    getExactMatchAutoCompleteOptionIndex: sinon.stub().returns(0),
    generateObjectValueFromInput: sinon.stub().returns(addOption),
  };
  const expectedArgumentsState = [
    {
      lastCheckedInputValue: inputValue,
      activeAutoCompleteOptions: options,
      activeAutoCompleteOptionIndex: 0,
    },
    instance.repositionAutoCompleteContainerToActiveOption,
  ];
  const expectedArgumentsFilter = [options];
  const expectedArgumentMatch = [inputValue, options];

  const updateAutoCompleteOptions = component.createUpdateAutoCompleteOptions(instance);

  updateAutoCompleteOptions();

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArgumentsState);
  tester.is(instance.filterAutoCompleteOptions.callCount, 1);
  tester.deepEqual(instance.filterAutoCompleteOptions.getCall(0).args, expectedArgumentsFilter);
  tester.is(instance.getExactMatchAutoCompleteOptionIndex.callCount, 1);
  tester.deepEqual(instance.getExactMatchAutoCompleteOptionIndex.getCall(0).args, expectedArgumentMatch);
  tester.is(instance.generateObjectValueFromInput.callCount, 0);
});

test('createUpdateAutoCompleteOptions creates a function that does handles updating the auto complete options with add new option if value is empty', (tester) => {
  const inputValue = '';
  const addOption = {
    display: 'ADD',
    value: inputValue,
  };
  const options = [
    {
      display: 'display',
      value: 'value',
    },
  ];
  const instance = {
    props: {
      options,
      allowCreate: true,
    },
    state: {
      inputValue,
    },
    setState: sinon.spy(),
    repositionAutoCompleteContainerToActiveOption: sinon.spy(),
    filterAutoCompleteOptions: sinon.stub().returns(options),
    getExactMatchAutoCompleteOptionIndex: sinon.stub().returns(0),
    generateObjectValueFromInput: sinon.stub().returns(addOption),
  };
  const expectedArgumentsState = [
    {
      lastCheckedInputValue: inputValue,
      activeAutoCompleteOptions: options,
      activeAutoCompleteOptionIndex: 0,
    },
    instance.repositionAutoCompleteContainerToActiveOption,
  ];
  const expectedArgumentsFilter = [options];
  const expectedArgumentMatch = [inputValue, options];

  const updateAutoCompleteOptions = component.createUpdateAutoCompleteOptions(instance);

  updateAutoCompleteOptions();

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArgumentsState);
  tester.is(instance.filterAutoCompleteOptions.callCount, 1);
  tester.deepEqual(instance.filterAutoCompleteOptions.getCall(0).args, expectedArgumentsFilter);
  tester.is(instance.getExactMatchAutoCompleteOptionIndex.callCount, 1);
  tester.deepEqual(instance.getExactMatchAutoCompleteOptionIndex.getCall(0).args, expectedArgumentMatch);
  tester.is(instance.generateObjectValueFromInput.callCount, 0);
});

test('createIncreaseActiveAutoCompleteOption creates a function that handles setting index if null', (tester) => {
  const instance = {
    state: {
      activeAutoCompleteOptionIndex: null,
      activeAutoCompleteOptions: [
        {
          display: 'display',
          value: 'value',
        },
        {
          display: 'display',
          value: 'value',
        },
      ],
    },
    setState: sinon.spy(),
    repositionAutoCompleteContainerToActiveOption: sinon.spy(),
  };
  const expectedArguments = [
    {
      activeAutoCompleteOptionIndex: 0,
    },
    instance.repositionAutoCompleteContainerToActiveOption,
  ];

  const increaseActiveAutoCompleteOption = component.createIncreaseActiveAutoCompleteOption(instance);

  increaseActiveAutoCompleteOption();

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArguments);
});

test('createIncreaseActiveAutoCompleteOption creates a function that handles increasing active index if set', (tester) => {
  const instance = {
    state: {
      activeAutoCompleteOptionIndex: 0,
      activeAutoCompleteOptions: [
        {
          display: 'display',
          value: 'value',
        },
        {
          display: 'display',
          value: 'value',
        },
      ],
    },
    setState: sinon.spy(),
    repositionAutoCompleteContainerToActiveOption: sinon.spy(),
  };
  const expectedArguments = [
    {
      activeAutoCompleteOptionIndex: 1,
    },
    instance.repositionAutoCompleteContainerToActiveOption,
  ];

  const increaseActiveAutoCompleteOption = component.createIncreaseActiveAutoCompleteOption(instance);

  increaseActiveAutoCompleteOption();

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArguments);
});

test('createIncreaseActiveAutoCompleteOption creates a function that handles loop back to beginning if active index at last option', (tester) => {
  const instance = {
    state: {
      activeAutoCompleteOptionIndex: 1,
      activeAutoCompleteOptions: [
        {
          display: 'display',
          value: 'value',
        },
        {
          display: 'display',
          value: 'value',
        },
      ],
    },
    setState: sinon.spy(),
    repositionAutoCompleteContainerToActiveOption: sinon.spy(),
  };
  const expectedArguments = [
    {
      activeAutoCompleteOptionIndex: 0,
    },
    instance.repositionAutoCompleteContainerToActiveOption,
  ];

  const increaseActiveAutoCompleteOption = component.createIncreaseActiveAutoCompleteOption(instance);

  increaseActiveAutoCompleteOption();

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArguments);
});

test('createIncreaseActiveAutoCompleteOption creates a function that does not handle increase active index if not options available', (tester) => {
  const instance = {
    state: {
      activeAutoCompleteOptionIndex: 0,
      activeAutoCompleteOptions: [],
    },
    setState: sinon.spy(),
  };

  const increaseActiveAutoCompleteOption = component.createIncreaseActiveAutoCompleteOption(instance);

  increaseActiveAutoCompleteOption();

  tester.is(instance.setState.callCount, 0);
});

test('createDecreaseActiveAutoCompleteOption creates a function that handles setting index if null', (tester) => {
  const instance = {
    state: {
      activeAutoCompleteOptionIndex: null,
      activeAutoCompleteOptions: [
        {
          display: 'display',
          value: 'value',
        },
        {
          display: 'display',
          value: 'value',
        },
      ],
    },
    setState: sinon.spy(),
    repositionAutoCompleteContainerToActiveOption: sinon.spy(),
  };
  const expectedArguments = [
    {
      activeAutoCompleteOptionIndex: 1,
    },
    instance.repositionAutoCompleteContainerToActiveOption,
  ];

  const decreaseActiveAutoCompleteOption = component.createDecreaseActiveAutoCompleteOption(instance);

  decreaseActiveAutoCompleteOption();

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArguments);
});

test('createDecreaseActiveAutoCompleteOption creates a function that handles decreasing active index if set', (tester) => {
  const instance = {
    state: {
      activeAutoCompleteOptionIndex: 1,
      activeAutoCompleteOptions: [
        {
          display: 'display',
          value: 'value',
        },
        {
          display: 'display',
          value: 'value',
        },
      ],
    },
    setState: sinon.spy(),
    repositionAutoCompleteContainerToActiveOption: sinon.spy(),
  };
  const expectedArguments = [
    {
      activeAutoCompleteOptionIndex: 0,
    },
    instance.repositionAutoCompleteContainerToActiveOption,
  ];

  const decreaseActiveAutoCompleteOption = component.createDecreaseActiveAutoCompleteOption(instance);

  decreaseActiveAutoCompleteOption();

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArguments);
});

test('createDecreaseActiveAutoCompleteOption creates a function that handles loop back to end if active index at first option', (tester) => {
  const instance = {
    state: {
      activeAutoCompleteOptionIndex: 0,
      activeAutoCompleteOptions: [
        {
          display: 'display',
          value: 'value',
        },
        {
          display: 'display',
          value: 'value',
        },
      ],
    },
    setState: sinon.spy(),
    repositionAutoCompleteContainerToActiveOption: sinon.spy(),
  };
  const expectedArguments = [
    {
      activeAutoCompleteOptionIndex: 1,
    },
    instance.repositionAutoCompleteContainerToActiveOption,
  ];

  const decreaseActiveAutoCompleteOption = component.createDecreaseActiveAutoCompleteOption(instance);

  decreaseActiveAutoCompleteOption();

  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArguments);
});

test('createDecreaseActiveAutoCompleteOption creates a function that does not handle increase active index if not options available', (tester) => {
  const instance = {
    state: {
      activeAutoCompleteOptionIndex: 0,
      activeAutoCompleteOptions: [],
    },
    setState: sinon.spy(),
  };

  const decreaseActiveAutoCompleteOption = component.createDecreaseActiveAutoCompleteOption(instance);

  decreaseActiveAutoCompleteOption();

  tester.is(instance.setState.callCount, 0);
});

test('createFilterAutoCompleteOptions creates a function that handles filtering options with default logic', (tester) => {
  const inputValue = 'i';
  const autoCompleteOptions = [
    {
      display: 'display',
      value: 'value',
    },
    {
      display: 'd1splay',
      value: 'value',
    },
  ];
  const instance = {
    props: {
      useFiltering: true,
    },
    state: {
      inputValue,
    },
  };
  const expected = [autoCompleteOptions[0]];

  const filterAutoCompleteOptions = component.createFilterAutoCompleteOptions(instance);

  const results = filterAutoCompleteOptions(autoCompleteOptions);

  tester.deepEqual(results, expected);
});

test('createFilterAutoCompleteOptions creates a function that handles filtering options with custom logic', (tester) => {
  const inputValue = 'i';
  const autoCompleteOptions = [
    {
      display: 'display',
      value: 'value',
    },
    {
      display: 'd1splay',
      value: 'value',
    },
  ];
  const instance = {
    props: {
      useFiltering: true,
      optionsFilter: sinon.stub().returns([autoCompleteOptions[0]]),
    },
    state: {
      inputValue,
    },
  };
  const expectedArgumentsFilter = [inputValue, autoCompleteOptions];
  const expectedResults = [autoCompleteOptions[0]];

  const filterAutoCompleteOptions = component.createFilterAutoCompleteOptions(instance);

  const results = filterAutoCompleteOptions(autoCompleteOptions);

  tester.is(instance.props.optionsFilter.callCount, 1);
  tester.deepEqual(instance.props.optionsFilter.getCall(0).args, expectedArgumentsFilter);
  tester.deepEqual(results, expectedResults);
});

test('createFilterAutoCompleteOptions creates a function that handles filtering out already selected values when multiple is enabled', (tester) => {
  const inputValue = '';
  const autoCompleteOptions = [
    {
      display: 'display',
      value: 'value',
    },
    {
      display: 'd1splay',
      value: 'value',
    },
  ];
  const instance = {
    props: {
      multiple: true,
      useFiltering: true,
      value: [autoCompleteOptions[1]],
    },
    state: {
      inputValue,
    },
  };
  const expected = [autoCompleteOptions[0]];

  const filterAutoCompleteOptions = component.createFilterAutoCompleteOptions(instance);

  const results = filterAutoCompleteOptions(autoCompleteOptions);

  tester.deepEqual(results, expected);
});

test('createFilterAutoCompleteOptions creates a function that does not handle filter is not enabled', (tester) => {
  const inputValue = '';
  const autoCompleteOptions = [
    {
      display: 'display',
      value: 'value',
    },
    {
      display: 'd1splay',
      value: 'value',
    },
  ];
  const instance = {
    props: {
      multiple: true,
      useFiltering: false,
      value: [autoCompleteOptions[1]],
    },
    state: {
      inputValue,
    },
  };
  const expected = [...autoCompleteOptions];

  const filterAutoCompleteOptions = component.createFilterAutoCompleteOptions(instance);

  const results = filterAutoCompleteOptions(autoCompleteOptions);

  tester.deepEqual(results, expected);
});

test('createRepositionAutoCompleteContainerToActiveOption creates a function the handles respositions auto complete list to active item', (tester) => {
  const instance = {
    activeOptionElement: {
      offsetTop: 110,
    },
    autoCompleteElement: {
      scrollTop: 0,
    },
  };

  const repositionAutoCompleteContainerToActiveOption = component.createRepositionAutoCompleteContainerToActiveOption(
    instance
  );

  repositionAutoCompleteContainerToActiveOption();

  tester.is(instance.autoCompleteElement.scrollTop, 110);
});

test.serial('createCloseAutoComplete creates a function that handles closing the auto complete', (tester) => {
  const display = 'display';
  const multiple = false;
  const inputElement = 'element';
  const value = [
    {
      display,
      value: 'value',
    },
  ];
  const instance = {
    props: {
      multiple,
      useFiltering: true,
      value,
    },
    inputElement,
    setState: sinon.spy(),
    getDisplayValue: sinon.stub().returns(display),
  };
  const findDOMNodeReturns = {
    blur: sinon.spy(),
  };
  const expectedArgumentsState = [
    {
      isActive: false,
      isHidden: false,
      activeAutoCompleteOptionIndex: null,
      activeAutoCompleteOptions: null,
      lastCheckedInputValue: null,
      inputValue: display,
    },
  ];
  const expectedArgumentsDisplay = [multiple, value];
  const expectedAgrumentsFind = [inputElement];

  const findStub = sinon.stub(ReactDOM, 'findDOMNode').returns(findDOMNodeReturns);

  const closeAutoComplete = component.createCloseAutoComplete(instance);

  closeAutoComplete();

  findStub.restore();

  tester.is(instance.getDisplayValue.callCount, 1);
  tester.deepEqual(instance.getDisplayValue.getCall(0).args, expectedArgumentsDisplay);
  tester.is(findStub.callCount, 1);
  tester.deepEqual(findStub.getCall(0).args, expectedAgrumentsFind);
  tester.is(instance.setState.callCount, 1);
  tester.deepEqual(instance.setState.getCall(0).args, expectedArgumentsState);
  tester.is(findDOMNodeReturns.blur.callCount, 1);
});

test.serial(
  'createCloseAutoComplete creates a function that handles closing the auto complete with passed in currentValue',
  (tester) => {
    const display = 'display';
    const multiple = false;
    const inputElement = 'element';
    const value = [
      {
        display,
        value: 'value',
      },
    ];
    const instance = {
      props: {
        multiple,
        useFiltering: true,
      },
      inputElement,
      setState: sinon.spy(),
      getDisplayValue: sinon.stub().returns(display),
    };
    const findDOMNodeReturns = {
      blur: sinon.spy(),
    };
    const expectedArgumentsState = [
      {
        isActive: false,
        isHidden: false,
        activeAutoCompleteOptionIndex: null,
        activeAutoCompleteOptions: null,
        lastCheckedInputValue: null,
        inputValue: display,
      },
    ];
    const expectedArgumentsDisplay = [multiple, value];
    const expectedAgrumentsFind = [inputElement];

    const findStub = sinon.stub(ReactDOM, 'findDOMNode').returns(findDOMNodeReturns);

    const closeAutoComplete = component.createCloseAutoComplete(instance);

    closeAutoComplete(value);

    findStub.restore();

    tester.is(instance.getDisplayValue.callCount, 1);
    tester.deepEqual(instance.getDisplayValue.getCall(0).args, expectedArgumentsDisplay);
    tester.is(findStub.callCount, 1);
    tester.deepEqual(findStub.getCall(0).args, expectedAgrumentsFind);
    tester.is(instance.setState.callCount, 1);
    tester.deepEqual(instance.setState.getCall(0).args, expectedArgumentsState);
    tester.is(findDOMNodeReturns.blur.callCount, 1);
  }
);

test.serial(
  'createCloseAutoComplete creates a function that handles closing the auto complete with extra state data',
  (tester) => {
    const display = 'display';
    const multiple = false;
    const inputElement = 'element';
    const extraStateData = {test: 'test'};
    const value = [
      {
        display,
        value: 'value',
      },
    ];
    const instance = {
      props: {
        multiple,
        useFiltering: true,
      },
      inputElement,
      setState: sinon.spy(),
      getDisplayValue: sinon.stub().returns(display),
    };
    const findDOMNodeReturns = {
      blur: sinon.spy(),
    };
    const expectedArgumentsState = [
      {
        ...extraStateData,
        isActive: false,
        isHidden: false,
        activeAutoCompleteOptionIndex: null,
        activeAutoCompleteOptions: null,
        lastCheckedInputValue: null,
        inputValue: display,
      },
    ];
    const expectedArgumentsDisplay = [multiple, value];
    const expectedAgrumentsFind = [inputElement];

    const findStub = sinon.stub(ReactDOM, 'findDOMNode').returns(findDOMNodeReturns);

    const closeAutoComplete = component.createCloseAutoComplete(instance);

    closeAutoComplete(value, extraStateData);

    findStub.restore();

    tester.is(instance.getDisplayValue.callCount, 1);
    tester.deepEqual(instance.getDisplayValue.getCall(0).args, expectedArgumentsDisplay);
    tester.is(findStub.callCount, 1);
    tester.deepEqual(findStub.getCall(0).args, expectedAgrumentsFind);
    tester.is(instance.setState.callCount, 1);
    tester.deepEqual(instance.setState.getCall(0).args, expectedArgumentsState);
    tester.is(findDOMNodeReturns.blur.callCount, 1);
  }
);

test('createGetExactMatchAutoCompleteOptionIndex creates a function that handles getting the matching option index', (tester) => {
  const inputValue = 'd1splay';
  const autoCompleteOptions = [
    {
      display: 'display',
      value: 'value',
    },
    {
      display: 'd1splay',
      value: 'value',
    },
  ];
  const expected = 1;

  const getExactMatchAutoCompleteOptionIndex = component.createGetExactMatchAutoCompleteOptionIndex();

  const results = getExactMatchAutoCompleteOptionIndex(inputValue, autoCompleteOptions);

  tester.deepEqual(results, expected);
});

test('createGetExactMatchAutoCompleteOptionIndex creates a function that returns -1 in input value is empty', (tester) => {
  const inputValue = '';
  const autoCompleteOptions = [
    {
      display: 'display',
      value: 'value',
    },
    {
      display: 'd1splay',
      value: 'value',
    },
  ];
  const expected = -1;

  const getExactMatchAutoCompleteOptionIndex = component.createGetExactMatchAutoCompleteOptionIndex();

  const results = getExactMatchAutoCompleteOptionIndex(inputValue, autoCompleteOptions);

  tester.deepEqual(results, expected);
});

test('createGetExactMatchAutoCompleteOptionIndex creates a function that returns -1 if auto complete option are empty', (tester) => {
  const inputValue = 'display';
  const autoCompleteOptions = [];
  const expected = -1;

  const getExactMatchAutoCompleteOptionIndex = component.createGetExactMatchAutoCompleteOptionIndex();

  const results = getExactMatchAutoCompleteOptionIndex(inputValue, autoCompleteOptions);

  tester.deepEqual(results, expected);
});

test('createGetDisplayValue creates a function that returns display value from value', (tester) => {
  const display = 'display';
  const allowMultiple = false;
  const values = [
    {
      display,
      value: 'value',
    },
  ];
  const expected = display;

  const getDisplayValue = component.createGetDisplayValue();

  const results = getDisplayValue(allowMultiple, values);

  tester.deepEqual(results, expected);
});

test('createGetDisplayValue creates a function that returns empty string if multiple is enabled', (tester) => {
  const display = 'display';
  const allowMultiple = true;
  const values = [
    {
      display,
      value: 'value',
    },
  ];
  const expected = '';

  const getDisplayValue = component.createGetDisplayValue();

  const results = getDisplayValue(allowMultiple, values);

  tester.deepEqual(results, expected);
});

test('createSetAutoCompleteElement creates a function that set the reference element for auto complete', (tester) => {
  const element = 'element';
  const instance = {};
  const expected = element;

  const setAutoCompleteElement = component.createSetAutoCompleteElement(instance);

  setAutoCompleteElement(element);

  tester.is(instance.autoCompleteElement, expected);
});

test('createSetInputElement creates a function that set the reference element for input', (tester) => {
  const element = 'element';
  const instance = {};
  const expected = element;

  const setInputElement = component.createSetInputElement(instance);

  setInputElement(element);

  tester.is(instance.inputElement, expected);
});

test('createSetDropDownElement creates a function that set the reference element for drop down', (tester) => {
  const element = 'element';
  const instance = {};
  const expected = element;

  const setDropDownElement = component.createSetDropDownElement(instance);

  setDropDownElement(element);

  tester.is(instance.dropDownElement, expected);
});

test('createSetContainerElement creates a function that set the reference element for container', (tester) => {
  const element = 'element';
  const instance = {};
  const expected = element;

  const setContainerElement = component.createSetContainerElement(instance);

  setContainerElement(element);

  tester.is(instance.containerElement, expected);
});

test('createSetActiveOptionElement creates a function that set the reference element for container', (tester) => {
  const element = 'element';
  const instance = {};
  const expected = element;

  const setActiveOptionElement = component.createSetActiveOptionElement(instance);

  setActiveOptionElement(element);

  tester.is(instance.activeOptionElement, expected);
});

test('renders with default props', (tester) => {
  const props = ExtendText.defaultProps;
  const wrapper = shallow(<ExtendText {...props} />);

  tester.snapshot(toJson(wrapper));
});

test('renders options below input', (tester) => {
  const props = {
    ...ExtendText.defaultProps,
    options,
  };
  const wrapper = shallow(<ExtendText {...props} />);

  wrapper.setState({
    isActive: true,
  });

  tester.snapshot(toJson(wrapper));
});

test('renders options above input', (tester) => {
  const props = {
    ...ExtendText.defaultProps,
    options,
    autoCompletePosition: 'top',
  };
  const wrapper = shallow(<ExtendText {...props} />);

  wrapper.setState({
    isActive: true,
  });

  tester.snapshot(toJson(wrapper));
});

test('renders tags when auto complete is below input', (tester) => {
  const props = {
    ...ExtendText.defaultProps,
    options,
    value: values,
    multiple: true,
  };
  const wrapper = shallow(<ExtendText {...props} />);

  wrapper.setState({
    isActive: true,
  });

  tester.snapshot(toJson(wrapper));
});

test('renders tags values when auto complete is above input', (tester) => {
  const props = {
    ...ExtendText.defaultProps,
    options,
    autoCompletePosition: 'top',
    value: values,
    multiple: true,
  };
  const wrapper = shallow(<ExtendText {...props} />);

  wrapper.setState({
    isActive: true,
  });

  tester.snapshot(toJson(wrapper));
});

test('renders clear tag when configured', (tester) => {
  const props = {
    ...ExtendText.defaultProps,
    options,
    autoCompletePosition: 'top',
    value: values,
    multiple: true,
    clearable: true,
  };
  const wrapper = shallow(<ExtendText {...props} />);

  wrapper.setState({
    isActive: true,
  });

  tester.snapshot(toJson(wrapper));
});

test('renders tags when auto complete is below input', (tester) => {
  const props = {
    ...ExtendText.defaultProps,
    options,
    value: values,
    multiple: true,
  };
  const wrapper = shallow(<ExtendText {...props} />);

  wrapper.setState({
    isActive: true,
  });

  tester.snapshot(toJson(wrapper));
});

test('renders value when in single value mode', (tester) => {
  const props = {
    ...ExtendText.defaultProps,
    options,
    value,
  };
  const wrapper = shallow(<ExtendText {...props} />);

  wrapper.setState({
    isActive: true,
  });

  tester.snapshot(toJson(wrapper));
});

test('renders add new item option when configured to', (tester) => {
  const props = {
    ...ExtendText.defaultProps,
    options,
    value,
    allowCreate: true,
  };
  const wrapper = shallow(<ExtendText {...props} />);

  wrapper.setState({
    isActive: true,
    inputValue: 'create new',
  });

  tester.snapshot(toJson(wrapper));
});

test('renders help text about how to search', (tester) => {
  const props = {
    ...ExtendText.defaultProps,
    asyncOptions: () => {},
    characterThreshold: 1,
  };
  const wrapper = shallow(<ExtendText {...props} />);

  wrapper.setState({
    isActive: true,
    inputValue: '',
  });

  tester.snapshot(toJson(wrapper));
});

test('renders properly when loading data', (tester) => {
  const props = {
    ...ExtendText.defaultProps,
    asyncOptions: () => {},
  };
  const wrapper = shallow(<ExtendText {...props} />);

  wrapper.setState({
    isActive: true,
    isLoading: true,
  });

  tester.snapshot(toJson(wrapper));
});
