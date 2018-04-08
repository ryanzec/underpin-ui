import PropTypes from 'prop-types';
import React, {PureComponent, createElement, Fragment} from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';
import DomEventManager from 'src/utils/DomEventManager';
import isArray from 'lodash/isArray';
import * as unchanged from 'unchanged';

import * as structureCss from 'src/styles/structure';
import * as themesCss from 'src/styles/themes';
import * as formCss from 'src/components/Form/internal/formCss';

import SvgIcon from 'src/components/SvgIcon/SvgIcon';
import FormTextbox from 'src/components/Form/FormTextbox';
import ExtendTextAutoCompleteOption from './ExtendTextAutoCompleteOption';
import Button from 'src/components/Button/Button';
import Badge from 'src/components/Badge/Badge';

import * as cssUtils from 'src/utils/css';

export const ContainerStyled = styled.div`
  position: relative;
`;

export const autoCompleteContainerPositionStyles = (props) => {
  const oppositeSide = props.autoCompletePosition === 'bottom' ? 'top' : 'bottom';
  const borderRadius = formCss.variables.inputBorderRadius;

  return css`
    ${cssUtils.borderRadius(props.autoCompletePosition, formCss.variables.inputBorderRadius)}

    ${oppositeSide}: 100%;
    border-${oppositeSide}: 0;

    &:last-child {
      ${cssUtils.borderRadius(props.autoCompletePosition, cssUtils.subtractValue(borderRadius, 1))}
    }
  `;
};

export const autoCompleteContainerActiveStyles = (props) => {
  const borderColor = props.isActive
    ? formCss.variables.borderColorFocusInput
    : themesCss.light.application.borderColor;

  return css`
    border: 1px solid ${borderColor};
  `;
};

export const autoCompleteContainerStyles = () => {
  return css`
    position: absolute;
    width: 100%;
    z-index: 100;
    background-color: ${themesCss.light.global.white};
    max-height: 300px;
    overflow-y: auto;
  `;
};

export const AutoCompleteContainerStyled = styled.div`
  ${autoCompleteContainerStyles}
  ${autoCompleteContainerActiveStyles}
  ${autoCompleteContainerPositionStyles};
`;

AutoCompleteContainerStyled.propsTypes = {
  isActive: PropTypes.bool,
  autoCompletePosition: PropTypes.oneOf(['top', 'bottom']),
};

AutoCompleteContainerStyled.defaultProps = {
  isActive: false,
  autoCompletePosition: 'bottom',
};

export const AutoCompleteTextboxStyled = styled(({children, isActive, autoCompletePosition, ...props}) =>
  createElement(FormTextbox, props, children)
)`
  padding-right: 24px;

  &[readonly] {
    cursor: pointer;
  }

  ${props => (props.isActive ? `${cssUtils.borderRadius(props.autoCompletePosition, 0)}` : '')};
`;

AutoCompleteTextboxStyled.propsTypes = {
  isActive: PropTypes.bool,
  autoCompletePosition: PropTypes.oneOf(['top', 'bottom']),
};

AutoCompleteTextboxStyled.defaultProps = {
  isActive: false,
  autoCompletePosition: 'bottom',
};

export const autoCompleteTagSpacingStyles = (props) => {
  const top = props.autoCompletePosition === 'bottom' ? 0 : '4px';
  const bottom = props.autoCompletePosition === 'bottom' ? '4px' : 0;

  return css`
    margin: ${top} 4px ${bottom} 0;
  `;
};

export const AutoCompleteTagsStyled = styled(Badge)`
  ${autoCompleteTagSpacingStyles};
`;

AutoCompleteTagsStyled.propsTypes = {
  autoCompletePosition: PropTypes.oneOf(['top', 'bottom']),
};

AutoCompleteTagsStyled.defaultProps = {
  autoCompletePosition: 'bottom',
};

export const AutoCompleteTagStyled = styled.div`
  ${autoCompleteTagSpacingStyles};
`;

AutoCompleteTagStyled.propsTypes = {
  autoCompletePosition: PropTypes.oneOf(['top', 'bottom']),
};

AutoCompleteTagStyled.defaultProps = {
  autoCompletePosition: 'bottom',
};

export const HelpTextStyled = styled.div`
  padding: 8px;
  font-style: italic;
  color: ${themesCss.light.application.textMutedColor};
`;

export const LoadingIndicatorStyled = styled.svg`
  position: absolute;
  right: 25px;
  top: 3px;
  animation: spin 0.4s linear infinite;
  height: 20px;
  width: 20px;
`;

export const DropDownIndicatorStyled = styled(SvgIcon)`
  position: absolute;
  right: 0;
  top: 0;
  height: 26px;
  width: 31px;
  cursor: pointer;
  padding: 8px;
`;

export const InputContainerStyled = styled.div`
  position: relative;
`;

export const DeleteIconStyled = styled(SvgIcon)`
  margin-right: ${structureCss.spacing.extraTiny};
  height: 10px;
  width: 10px;
  cursor: pointer;
`;

export const createComponentDidMount = (instance) => {
  return () => {
    // @todo: there is probably a cleaner way to fix this
    // this may seem a little weird however this is needed it order to allow users of this component to be able
    // to set the value on blur of the input to a value it is currently is not set to. the mousedown event just
    // hides the auto complete list in order to prevent a flicker a weirdness.
    instance.domEventManager.add(document, 'mousedown', () => {
      instance.setState({
        isHidden: true,
      });
    });
    instance.domEventManager.add(document, 'click', instance.onClickOutside);
  };
};

export const createComponentDidUpdate = (instance) => {
  return (previousProps) => {
    if (
      instance.state.isActive === true
      && (instance.state.lastCheckedInputValue === null
        || instance.state.lastCheckedInputValue !== instance.state.inputValue)
    ) {
      instance.updateAutoCompleteOptions();
    }

    // need to make sure to update in the input value when the prop value change to keep everything in sync
    const previousValue = previousProps.value && previousProps.value[0] ? previousProps.value[0].value : null;
    const newValue = instance.props.value && instance.props.value[0] ? instance.props.value[0].value : null;

    if (!instance.props.multiple && newValue !== previousValue) {
      instance.setState({
        inputValue: instance.getDisplayValue(instance.props.multiple, instance.props.value),
      });
    }
  };
};

export const createComponentWillUnmount = (instance) => {
  return () => {
    instance.domEventManager.clear();
  };
};

export const createOnClickOutside = (instance) => {
  return (event) => {
    if (instance.state.isActive) {
      let close = true;

      if (
        instance.inputElement
        && (ReactDOM.findDOMNode(instance.inputElement).contains(event.target)
          || ReactDOM.findDOMNode(instance.inputElement) === event.target)
      ) {
        close = false;
      }

      if (
        close
        && instance.dropDownElement
        && (ReactDOM.findDOMNode(instance.dropDownElement).contains(event.target)
          || ReactDOM.findDOMNode(instance.dropDownElement) === event.target)
      ) {
        close = false;
      }

      if (
        close
        && instance.autoCompleteElement
        && (ReactDOM.findDOMNode(instance.autoCompleteElement).contains(event.target)
          || ReactDOM.findDOMNode(instance.autoCompleteElement) === event.target)
      ) {
        close = false;
      }

      if (close) {
        instance.closeAutoComplete();
      }
    }
  };
};

export const createOnFocusInput = (instance) => {
  return () => {
    instance.setState({
      isActive: true,
      activeAutoCompleteOptionIndex: 0,
    });
  };
};

export const createOnKeyDown = (instance) => {
  return (event) => {
    switch (event.keyCode) {
      case 27: //escape
        event.preventDefault();
        instance.closeAutoComplete();
        break;

      case 13: //enter
        event.preventDefault();
        instance.selectActiveItem();
        break;

      case 38: //up arrow
        event.preventDefault();
        instance.decreaseActiveAutoCompleteOption();
        break;

      case 40: //down arrow
        event.preventDefault();
        instance.increaseActiveAutoCompleteOption();
        break;

      case 9: //tab
        instance.selectActiveItem();
        break;

      default:
        if (
          instance.props.allowCreate
          && instance.props.multiple
          && instance.props.addTagOnKeyCode === event.keyCode
          && !event.shiftKey
        ) {
          instance.addTagKeyCodeEnter = true;
          event.preventDefault();
          instance.selectActiveItem();
        }
        break;
    }
  };
};

export const createOnMouseEnterAutoCompleteOption = (instance) => {
  return (event) => {
    instance.setState({
      activeAutoCompleteOptionIndex: parseInt(event.target.getAttribute('data-index'), 10),
    });
  };
};

export const createOnMouseDownAutoCompleteOption = (instance) => {
  return () => {
    instance.selectActiveItem();
  };
};

export const createOnChangeInput = (instance) => {
  return (event) => {
    instance.setState({
      previousInputValue: instance.state.inputValue,
      inputValue: event.target.value,
    });
  };
};

export const createOnClickClearAll = (instance) => {
  return () => {
    instance.setValue([], '');
  };
};

export const createOnClickDeleteTag = (instance) => {
  return (event) => {
    const removeIndex = parseInt(event.currentTarget.getAttribute('data-key'), 10);
    const newValue = unchanged.remove(`[${removeIndex}]`, instance.props.value);

    instance.setValue(newValue, '');
  };
};

export const createOnClickDropDownIndicator = (instance) => {
  return () => {
    ReactDOM.findDOMNode(instance.inputElement).focus();
  };
};

export const createAsyncOptionsCallback = (instance) => {
  return (callbackOptions = {}) => {
    if (callbackOptions.options) {
      let exactMatchIndex = instance.getExactMatchAutoCompleteOptionIndex(
        instance.state.inputValue,
        callbackOptions.options
      );
      let newOptions = instance.filterAutoCompleteOptions(callbackOptions.options);

      if (instance.props.allowCreate && instance.state.inputValue.length > 0) {
        exactMatchIndex = instance.getExactMatchAutoCompleteOptionIndex(instance.state.inputValue, newOptions);

        if (exactMatchIndex === -1) {
          newOptions = [instance.generateObjectValueFromInput()].concat(newOptions);
        }
      }

      instance.setState(
        {
          isLoading: false,
          activeAutoCompleteOptions: newOptions,
          activeAutoCompleteOptionIndex: exactMatchIndex !== -1 ? exactMatchIndex : 0,
        },
        instance.repositionAutoCompleteContainerToActiveOption
      );
    }
  };
};

export const createGenerateObjectValueFromInput = (instance) => {
  return () => {
    return {
      display: instance.props.createTemplate.replace('%%value%%', instance.state.inputValue),
      value: instance.state.inputValue,
      isNew: true,
    };
  };
};

export const createSelectActiveItem = (instance) => {
  return () => {
    if (
      instance.state.activeAutoCompleteOptions
      && instance.state.activeAutoCompleteOptions[instance.state.activeAutoCompleteOptionIndex]
    ) {
      const filteredAutoCompleteOptions = instance.filterAutoCompleteOptions(instance.state.activeAutoCompleteOptions);

      instance.updateValue(filteredAutoCompleteOptions[instance.state.activeAutoCompleteOptionIndex]);
    }
  };
};

export const createUpdateValue = (instance) => {
  return (newValue) => {
    let realNewValue = newValue;

    if (realNewValue.isNew) {
      realNewValue = {
        display: newValue.value,
        value: newValue.value,
        isNew: true,
      };
    }

    if (isArray(instance.props.value) && instance.props.multiple) {
      realNewValue = instance.props.value.concat([realNewValue]);
    } else {
      realNewValue = [realNewValue];
    }

    instance.setValue(realNewValue, instance.getDisplayValue(instance.props.multiple, realNewValue));
  };
};

export const createSetValue = (instance) => {
  return (newValue, newInputValue) => {
    if (instance.props.onChange) {
      instance.props.onChange(newValue);
    }

    const newState = {
      previousInputValue: instance.state.inputValue,
      inputValue: newInputValue,
    };

    // this allow use to update the tags while keeping the auto complete open since the common use case for
    // tagging is adding multiple items
    if (instance.addTagKeyCodeEnter || instance.props.multiple) {
      instance.setState(newState);
      instance.addTagKeyCodeEnter = false;
    } else {
      instance.closeAutoComplete(newValue, newState);
    }
  };
};

export const createUpdateAutoCompleteOptions = (instance) => {
  return () => {
    let exactMatchIndex;
    const newState = {
      lastCheckedInputValue: instance.state.inputValue,
      activeAutoCompleteOptions: [],
    };

    if (instance.props.options.length > 0) {
      newState.activeAutoCompleteOptions = instance.filterAutoCompleteOptions(instance.props.options);

      exactMatchIndex = instance.getExactMatchAutoCompleteOptionIndex(
        instance.state.inputValue,
        newState.activeAutoCompleteOptions
      );

      newState.activeAutoCompleteOptionIndex = exactMatchIndex !== -1 ? exactMatchIndex : 0;
    } else if (
      instance.state.isActive
      && instance.props.asyncOptions
      && (instance.state.lastCheckedInputValue !== instance.state.inputValue
        || instance.state.lastCheckedInputValue === null)
      && instance.state.inputValue.length >= instance.props.characterThreshold
    ) {
      newState.isLoading = true;

      instance.props.asyncOptions(instance.state.inputValue, instance.asyncOptionsCallback);
    }

    if (instance.props.allowCreate && newState.activeAutoCompleteOptions && instance.state.inputValue.length > 0) {
      if (exactMatchIndex === -1) {
        newState.activeAutoCompleteOptions = [instance.generateObjectValueFromInput()].concat(
          newState.activeAutoCompleteOptions
        );
      }
    }

    instance.setState(newState, instance.repositionAutoCompleteContainerToActiveOption);
  };
};

export const createIncreaseActiveAutoCompleteOption = (instance) => {
  return () => {
    if (instance.state.activeAutoCompleteOptions && instance.state.activeAutoCompleteOptions.length > 0) {
      let newActiveAutoCompleteOptionIndex = instance.state.activeAutoCompleteOptionIndex;

      if (newActiveAutoCompleteOptionIndex === null) {
        newActiveAutoCompleteOptionIndex = 0;
      } else {
        newActiveAutoCompleteOptionIndex += 1;
      }

      if (
        instance.state.activeAutoCompleteOptions
        && newActiveAutoCompleteOptionIndex >= instance.state.activeAutoCompleteOptions.length
      ) {
        newActiveAutoCompleteOptionIndex = 0;
      }

      instance.setState(
        {
          activeAutoCompleteOptionIndex: newActiveAutoCompleteOptionIndex,
        },
        instance.repositionAutoCompleteContainerToActiveOption
      );
    }
  };
};

export const createDecreaseActiveAutoCompleteOption = (instance) => {
  return () => {
    if (instance.state.activeAutoCompleteOptions && instance.state.activeAutoCompleteOptions.length > 0) {
      let newActiveAutoCompleteOptionIndex = instance.state.activeAutoCompleteOptionIndex;

      if (newActiveAutoCompleteOptionIndex === null) {
        newActiveAutoCompleteOptionIndex = instance.state.activeAutoCompleteOptions.length - 1;
      } else {
        newActiveAutoCompleteOptionIndex -= 1;
      }

      if (newActiveAutoCompleteOptionIndex < 0) {
        newActiveAutoCompleteOptionIndex = instance.state.activeAutoCompleteOptions.length - 1;
      }

      instance.setState(
        {
          activeAutoCompleteOptionIndex: newActiveAutoCompleteOptionIndex,
        },
        instance.repositionAutoCompleteContainerToActiveOption
      );
    }
  };
};

export const createFilterAutoCompleteOptions = (instance) => {
  return (autoCompleteOptions) => {
    let filteredOptions = [];

    if (instance.props.useFiltering && (instance.state.inputValue !== '' || instance.props.multiple)) {
      if (isArray(autoCompleteOptions) && autoCompleteOptions.length > 0) {
        if (instance.props.optionsFilter) {
          filteredOptions = instance.props.optionsFilter(instance.state.inputValue, autoCompleteOptions);
        } else {
          const alreadySelectedValues = [];

          if (instance.props.multiple && isArray(instance.props.value)) {
            instance.props.value.forEach((valueObject) => {
              alreadySelectedValues.push(valueObject.display.toLowerCase());
            });
          }

          filteredOptions = autoCompleteOptions.filter(
            autoCompleteOption =>
              (~autoCompleteOption.display.toLowerCase().indexOf(instance.state.inputValue.toLowerCase())
                && alreadySelectedValues.indexOf(autoCompleteOption.display.toLowerCase()) === -1)
              || autoCompleteOption.isNew === true
          );
        }
      }
    } else {
      filteredOptions = autoCompleteOptions;
    }

    return filteredOptions;
  };
};

export const createRepositionAutoCompleteContainerToActiveOption = (instance) => {
  return () => {
    if (instance.activeOptionElement) {
      instance.autoCompleteElement.scrollTop = instance.activeOptionElement.offsetTop;
    }
  };
};

export const createCloseAutoComplete = (instance) => {
  return (currentValue = instance.props.value, newState = {}) => {
    Object.assign(newState, {
      isActive: false,
      isHidden: false,
      activeAutoCompleteOptionIndex: null,
      activeAutoCompleteOptions: null,
      lastCheckedInputValue: null,
      inputValue: instance.getDisplayValue(instance.props.multiple, currentValue),
    });

    ReactDOM.findDOMNode(instance.inputElement).blur();

    instance.setState(newState);
  };
};

export const createGetExactMatchAutoCompleteOptionIndex = () => {
  return (inputValue, autoCompleteOptions) => {
    let index = -1;

    if (inputValue !== '' && isArray(autoCompleteOptions) && autoCompleteOptions.length > 0) {
      autoCompleteOptions.forEach((autoCompleteOption, key) => {
        if (~index) {
          return;
        }

        if (autoCompleteOption.display.toLowerCase() === inputValue.toLowerCase()) {
          index = key;
        }
      });
    }

    return index;
  };
};

export const createGetDisplayValue = () => {
  return (allowsMultiple, values) => {
    return !allowsMultiple && isArray(values) && values.length > 0 ? values[0].display : '';
  };
};

export const createSetAutoCompleteElement = (instance) => {
  return (element) => {
    instance.autoCompleteElement = element;
  };
};

export const createSetInputElement = (instance) => {
  return (element) => {
    instance.inputElement = element;
  };
};

export const createSetDropDownElement = (instance) => {
  return (element) => {
    instance.dropDownElement = element;
  };
};

export const createSetContainerElement = (instance) => {
  return (element) => {
    instance.containerElement = element;
  };
};

//@todo: test
export const createSetActiveOptionElement = (instance) => {
  return (element) => {
    instance.activeOptionElement = element;
  };
};

// @todo: replace
let loadingSvg;
/*eslint-disable*/

loadingSvg =
  '<path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/> <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z"></path>';
/*eslint-enable*/

export class ExtendText extends PureComponent {
  static propTypes = {
    options: PropTypes.array,
    asyncOptions: PropTypes.func,
    value: PropTypes.array,
    onChange: PropTypes.func,
    characterThreshold: PropTypes.number,
    isSearchable: PropTypes.bool,
    disabled: PropTypes.bool,
    useFiltering: PropTypes.bool,
    optionsFilter: PropTypes.func,
    optionRenderer: PropTypes.func,
    tagRenderer: PropTypes.func,
    allowCreate: PropTypes.bool,
    createTemplate: PropTypes.string,
    multiple: PropTypes.bool,
    placeholder: PropTypes.string,
    addTagOnKeyCode: PropTypes.number,
    loadingNode: PropTypes.node,
    typeForSearchingNode: PropTypes.node,
    noOptionsNode: PropTypes.node,
    autoCompletePosition: PropTypes.oneOf(['bottom', 'top']),
    clearable: PropTypes.bool,
  };

  static defaultProps = {
    options: [],
    asyncOptions: null,
    value: [],
    onChange: null,
    characterThreshold: 0,
    isSearchable: true,
    disabled: false,
    useFiltering: true,
    optionsFilter: null,
    optionRenderer: null,
    tagRenderer: null,
    allowCreate: false,
    createTemplate: "Add new item '%%value%%'?",
    multiple: false,
    placeholder: '',
    addTagOnKeyCode: null,
    loadingNode: 'Loading options...',
    typeForSearchingNode: 'Start typing for auto complete list',
    noOptionsNode: 'No options found',
    autoCompletePosition: 'bottom',
    clearable: false,
  };

  constructor(props) {
    super(props);

    this.domEventManager = new DomEventManager();

    this.state = {
      isActive: false,
      isHidden: false,
      isLoading: false,
      activeAutoCompleteOptionIndex: null,
      activeAutoCompleteOptions: null,
      lastCheckedInputValue: null,
      inputValue: this.getDisplayValue(props.multiple, props.value),
    };
  }

  componentDidMount = createComponentDidMount(this);
  componentDidUpdate = createComponentDidUpdate(this);
  componentWillUnmount = createComponentWillUnmount(this);

  autoCompleteElement = null;
  inputElement = null;
  dropDownElement = null;
  containerElement = null;
  activeOptionElement = null;

  onClickOutside = createOnClickOutside(this);
  onFocusInput = createOnFocusInput(this);
  onKeyDown = createOnKeyDown(this);
  onMouseEnterAutoCompleteOption = createOnMouseEnterAutoCompleteOption(this);
  onMouseDownAutoCompleteOption = createOnMouseDownAutoCompleteOption(this);
  onChangeInput = createOnChangeInput(this);
  onClickClearAll = createOnClickClearAll(this);
  onClickDeleteTag = createOnClickDeleteTag(this);
  onClickDropDownIndicator = createOnClickDropDownIndicator(this);

  asyncOptionsCallback = createAsyncOptionsCallback(this);
  generateObjectValueFromInput = createGenerateObjectValueFromInput(this);
  selectActiveItem = createSelectActiveItem(this);
  updateValue = createUpdateValue(this);
  setValue = createSetValue(this);
  updateAutoCompleteOptions = createUpdateAutoCompleteOptions(this);
  increaseActiveAutoCompleteOption = createIncreaseActiveAutoCompleteOption(this);
  decreaseActiveAutoCompleteOption = createDecreaseActiveAutoCompleteOption(this);
  filterAutoCompleteOptions = createFilterAutoCompleteOptions(this);
  repositionAutoCompleteContainerToActiveOption = createRepositionAutoCompleteContainerToActiveOption(this);
  closeAutoComplete = createCloseAutoComplete(this);
  getExactMatchAutoCompleteOptionIndex = createGetExactMatchAutoCompleteOptionIndex();
  getDisplayValue = createGetDisplayValue();
  setAutoCompleteElement = createSetAutoCompleteElement(this);
  setInputElement = createSetInputElement(this);
  setDropDownElement = createSetDropDownElement(this);
  setContainerElement = createSetContainerElement(this);
  setActiveOptionElement = createSetActiveOptionElement(this);

  renderAutoComplete() {
    const {autoCompletePosition} = this.props;
    const {isActive} = this.state;
    const processAutoCompleteOptions = (options) => {
      const optionNodes = [];

      options.forEach((option, key) => {
        const isOptionActive = key === this.state.activeAutoCompleteOptionIndex;
        let displayNode = null;

        if (this.props.optionRenderer) {
          displayNode = this.props.optionRenderer(option);
        } else {
          displayNode = option.display;
        }

        optionNodes.push(
          <ExtendTextAutoCompleteOption
            data-index={key}
            innerRef={isOptionActive ? this.setActiveOptionElement : null}
            isActive={isOptionActive}
            key={option.display}
            onMouseDown={this.onMouseDownAutoCompleteOption}
            onMouseEnter={this.onMouseEnterAutoCompleteOption}
          >
            {displayNode}
          </ExtendTextAutoCompleteOption>
        );
      });

      return optionNodes;
    };

    if (!this.state.isActive) {
      return null;
    }

    let children = [];

    if (this.state.isLoading) {
      children.push(<HelpTextStyled key="loading-node">{this.props.loadingNode}</HelpTextStyled>);
    } else if (
      this.state.inputValue.length < this.props.characterThreshold
      && (!this.state.activeAutoCompleteOptions || this.state.activeAutoCompleteOptions.length === 0)
    ) {
      children.push(<HelpTextStyled key="searching-node">{this.props.typeForSearchingNode}</HelpTextStyled>);
    } else {
      const renderableOptions
        = this.props.useFiltering && this.props.isSearchable && this.props.options.length > 0
          ? this.filterAutoCompleteOptions(this.state.activeAutoCompleteOptions)
          : this.state.activeAutoCompleteOptions;

      if (renderableOptions && renderableOptions.length > 0) {
        children = processAutoCompleteOptions(renderableOptions);
      } else {
        children.push(<HelpTextStyled key="no-options-node">{this.props.noOptionsNode}</HelpTextStyled>);
      }
    }

    return (
      <AutoCompleteContainerStyled
        autoCompletePosition={autoCompletePosition}
        innerRef={this.setAutoCompleteElement}
        isActive={isActive}
      >
        {children}
      </AutoCompleteContainerStyled>
    );
  }

  renderTags() {
    const {autoCompletePosition} = this.props;

    if (!this.props.multiple || !isArray(this.props.value) || this.props.value.length === 0) {
      return null;
    }

    let tagNodes = [];

    this.props.value.forEach((valueObject, key) => {
      let tagNode;
      const deleteNode = (
        /* eslint-workaround */
        <DeleteIconStyled
          data-key={key}
          icon="Clear"
          onClick={this.onClickDeleteTag}
        />
      );

      if (this.props.tagRenderer) {
        tagNode = this.props.tagRenderer(valueObject, deleteNode);
      } else {
        tagNode = (
          <span>
            {deleteNode}
            {valueObject.display}
          </span>
        );
      }

      tagNodes.push(
        <AutoCompleteTagStyled
          autoCompletePosition={autoCompletePosition}
          key={valueObject.display}
        >
          {tagNode}
        </AutoCompleteTagStyled>
      );
    });

    let clearAllNode = null;

    if (this.props.clearable && tagNodes.length > 0) {
      clearAllNode = (
        <Button
          onClick={this.onClickClearAll}
          styleType="link"
        >
          Clear all
        </Button>
      );
    }

    return (
      <div>
        {clearAllNode}
        <AutoCompleteTagsStyled autoCompletePosition={autoCompletePosition}>{tagNodes}</AutoCompleteTagsStyled>
      </div>
    );
  }

  renderLoadingIndicator() {
    if (!this.state.isLoading) {
      return null;
    }

    return (
      <LoadingIndicatorStyled
        dangerouslySetInnerHTML={{
          __html: loadingSvg,
        }}
        viewBox="0 0 40 40"
        x="0px"
        y="0px"
      />
    );
  }

  render() {
    const {
      children,
      options,
      asyncOptions,
      value,
      onChange,
      characterThreshold,
      isSearchable,
      disabled,
      useFiltering,
      optionsFilter,
      optionRenderer,
      tagRenderer,
      allowCreate,
      createTemplate,
      multiple,
      placeholder,
      addTagOnKeyCode,
      loadingNode,
      typeForSearchingNode,
      noOptionsNode,
      autoCompletePosition,
      clearable,
      ...restOfProps
    } = this.props;
    const {isActive} = this.state;
    const icon = this.props.autoCompletePosition === 'top' ? 'KeyboardArrowUp' : 'KeyboardArrowDown';

    return (
      <ContainerStyled
        innerRef={this.setContainerElement}
        {...restOfProps}
      >
        <Fragment>
          {this.props.autoCompletePosition === 'bottom' && this.renderTags()}
          <InputContainerStyled>
            <AutoCompleteTextboxStyled
              autoCompletePosition={autoCompletePosition}
              disabled={this.props.disabled}
              isActive={isActive}
              onChange={this.onChangeInput}
              onFocus={this.onFocusInput}
              onKeyDown={this.onKeyDown}
              placeholder={this.props.placeholder}
              readOnly={!this.props.isSearchable}
              ref={this.setInputElement}
              value={this.state.inputValue}
            />
            {this.renderLoadingIndicator()}
            <DropDownIndicatorStyled
              icon={icon}
              innerRef={this.setDropDownElement}
              onClick={this.onClickDropDownIndicator}
            />
            {this.renderAutoComplete()}
          </InputContainerStyled>
          {this.props.autoCompletePosition === 'top' && this.renderTags()}
        </Fragment>
      </ContainerStyled>
    );
  }
}

export default ExtendText;
