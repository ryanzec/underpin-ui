import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import PopperJS from 'popper.js';
import DomEventManager from 'src/utils/DomEventManager';

export const createComponentDidMount = (instance) => {
  return () => {
    if (instance.props.onClickOutside) {
      instance.domEventManager.add(document, 'mousedown', instance.onClickOutside);
    }

    instance.updatePopper();
  };
};

export const createComponentWillMount = (instance) => {
  return () => {
    instance.domEventManager.clear();
  };
};

export const createOnClickOutside = (instance) => {
  return (event) => {
    let closePopover = true;

    if (
      (instance.contentElement
        && (ReactDOM.findDOMNode(instance.contentElement).contains(event.target)
          || ReactDOM.findDOMNode(instance.contentElement) === event.target))
      || (instance.handleElement
        && (ReactDOM.findDOMNode(instance.handleElement).contains(event.target)
          || ReactDOM.findDOMNode(instance.handleElement) === event.target))
    ) {
      closePopover = false;
    }

    if (closePopover) {
      instance.props.onClickOutside();
    }
  };
};

export const createGetPopperStyles = (instance) => {
  return () => {
    if (!instance.props.isActive || !instance.popper || !instance.state.data) {
      return {
        position: 'absolute',
        pointerEvents: 'none',
        opacity: 0,
        top: 0,
        left: 0,
      };
    }

    return instance.state.data.styles;
  };
};

export const createGetPopperPlacement = (instance) => {
  return () => {
    if (instance.state.data && instance.state.data.placement) {
      return instance.state.data.placement;
    }

    return null;
  };
};

export const createOnUpdatePopperPosition = (instance) => {
  return (data) => {
    instance.setState({
      data,
    });

    return data;
  };
};

export const createUpdatePopper = (instance) => {
  return () => {
    instance.destroyPopper();

    if (instance.contentElement && instance.handleElement) {
      instance.createPopper();
    }
  };
};

export const createCreatePopper = (instance) => {
  return () => {
    const {placement} = instance.props;
    const modifiers = {
      applyStyle: {
        enabled: false,
      },
      updateState: {
        enabled: true,
        order: 900,
        fn: instance.onUpdatePopperPosition,
      },
      ...instance.props.modifiers,
    };

    instance.popper = new PopperJS(
      ReactDOM.findDOMNode(instance.handleElement),
      ReactDOM.findDOMNode(instance.contentElement),
      {
        placement,
        modifiers,
      }
    );

    instance.popper.scheduleUpdate();
  };
};

export const createDestroyPopper = (instance) => {
  return () => {
    if (instance.popper) {
      instance.popper.destroy();
    }
  };
};

export const createSetHandleElement = (instance) => {
  return (element) => {
    instance.handleElement = element;
  };
};

export const createSetContentElement = (instance) => {
  return (element) => {
    instance.contentElement = element;
  };
};

class PopoverContainer extends PureComponent {
  static propTypes = {
    isActive: PropTypes.bool,
    onClickOutside: PropTypes.func,
    modifiers: PropTypes.object,
    placement: PropTypes.string,
  };

  static defaultProps = {
    isActive: false,
    onClickOutside: null,
    modifiers: {},
    placement: 'auto',
  };

  state = {
    data: {},
  };

  componentDidMount = createComponentDidMount(this);
  componentWillUnmount = createComponentWillMount(this);

  domEventManager = new DomEventManager();
  popper = null;
  handleElement = null;
  contentElement = null;

  onClickOutside = createOnClickOutside(this);
  onUpdatePopperPosition = createOnUpdatePopperPosition(this);
  getPopperStyles = createGetPopperStyles(this);
  getPopperPlacement = createGetPopperPlacement(this);
  updatePopper = createUpdatePopper(this);
  createPopper = createCreatePopper(this);
  destroyPopper = createDestroyPopper(this);
  setHandleElement = createSetHandleElement(this);
  setContentElement = createSetContentElement(this);

  render() {
    const {children, isActive, onClickOutside, modifiers, placement, ...restOfProps} = this.props;

    // NOTE: we need to add in a ref in order to make sure in the outside click handler we are not clicking on the
    // NOTE: content
    let modifiedChildren = React.Children.map(children, (child, key) => {
      let attributes = {
        ref: key === 0 ? this.setHandleElement : this.setContentElement,
      };

      if (key === 1) {
        attributes = {
          ...attributes,
          style: {
            ...this.getPopperStyles(),
          },
          'data-placement': this.getPopperPlacement(),
        };
      }

      return React.cloneElement(child, attributes);
    });

    return <span {...restOfProps}>{modifiedChildren}</span>;
  }
}

export default PopoverContainer;
