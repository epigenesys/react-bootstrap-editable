'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var ReactDOM = _interopDefault(require('react-dom'));
var PropTypes = _interopDefault(require('prop-types'));
var reactBootstrap = require('react-bootstrap');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var TextField = /*#__PURE__*/function (_React$Component) {
  _inherits(TextField, _React$Component);

  var _super = _createSuper(TextField);

  function TextField(props) {
    var _this;

    _classCallCheck(this, TextField);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(TextField, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactBootstrap.FormGroup, {
        validationState: this.props.validationText ? 'error' : null
      }, /*#__PURE__*/React.createElement(reactBootstrap.FormControl, {
        autoFocus: true,
        value: this.props.value ? this.props.value : "",
        onChange: function onChange(e) {
          return _this2.props.setNewValue(e.target.value);
        },
        componentClass: this.state.componentClass,
        type: this.state.type,
        bsSize: "sm",
        className: "mr-1",
        maxLength: this.props.maxLength
      }, this.state.options), /*#__PURE__*/React.createElement(reactBootstrap.FormControl.Feedback, null), /*#__PURE__*/React.createElement(reactBootstrap.HelpBlock, null, this.props.validationText)), this.props.controls);
    }
  }]);

  return TextField;
}(React.Component);

var TextArea = /*#__PURE__*/function (_TextField) {
  _inherits(TextArea, _TextField);

  var _super = _createSuper(TextArea);

  function TextArea(props) {
    var _this;

    _classCallCheck(this, TextArea);

    _this = _super.call(this, props);
    _this.state = {
      componentClass: 'textarea',
      type: null
    };
    return _this;
  }

  return TextArea;
}(TextField);

var Select = /*#__PURE__*/function (_TextField) {
  _inherits(Select, _TextField);

  var _super = _createSuper(Select);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _super.call(this, props);

    var options = _this.props.options.map(function (option, index) {
      var value = option.value;
      var label = option.label;
      return /*#__PURE__*/React.createElement("option", {
        key: index + value,
        value: value
      }, label);
    });

    _this.state = {
      componentClass: 'select',
      type: null,
      options: options
    };
    return _this;
  }

  return Select;
}(TextField);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "#editable-popover {\n  max-width: none !important;\n}\n\n#editable-popover .fa-spinner,\n#editable-popover .btn {\n  margin-left: 5px;\n}\n\n#editable-popover .btn {\n  vertical-align: top;\n}\n\n#editable-popover .help-block {\n  margin: 0px;\n}\n\n#editable-popover .has-error input {\n  width: 100%;\n}\n\n#editable-popover .has-error .help-block {\n  margin-top: 5px;\n  width: 250px;\n  white-space: normal;\n}";
styleInject(css_248z);

var fontAwesomeStyle = {
  textAlign: "center",
  width: "1.25em",
  height: "1em",
  fill: "white",
  verticalAlign: "-0.25em"
};

var Editable = /*#__PURE__*/function (_React$Component) {
  _inherits(Editable, _React$Component);

  var _super = _createSuper(Editable);

  function Editable(props) {
    var _this;

    _classCallCheck(this, Editable);

    _this = _super.call(this, props);
    _this.state = {
      link: _this.clickableLink,
      value: _this.props.initialValue,
      newValue: _this.props.initialValue,
      isEditing: false,
      validationText: null,
      isLoading: false
    }; //used for popover mode

    _this.clickableLink = _this.clickableLink.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Editable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.ajax && !this.props.validate && !this.props.disabled) {
        console.error("Editable(".concat(this.props.id, "): You provided an ajax prop without a validate prop;\n            ajax function will not be called"));
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      //update initial value if the prop got updated
      if (prevProps.initialValue !== this.props.initialValue) {
        this.setState({
          value: this.props.initialValue,
          newValue: this.props.initialValue
        });
      }
    }
  }, {
    key: "clickableLink",
    value: function clickableLink() {
      return ReactDOM.findDOMNode(this.link);
    }
  }, {
    key: "getEditingComponent",
    value: function getEditingComponent() {
      var _this2 = this;

      var confirmButton = /*#__PURE__*/React.createElement(reactBootstrap.Button, {
        type: "submit",
        bsStyle: "primary",
        bsSize: "sm"
      }, /*#__PURE__*/React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        style: fontAwesomeStyle
      }, /*#__PURE__*/React.createElement("path", {
        color: "white",
        d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
      })));
      var cancelButton = /*#__PURE__*/React.createElement(reactBootstrap.Button, {
        bsStyle: "default",
        bsSize: "sm",
        onClick: function onClick() {
          return _this2.onCancel();
        }
      }, /*#__PURE__*/React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 352 512",
        style: _objectSpread2(_objectSpread2({}, fontAwesomeStyle), {}, {
          fill: "black"
        })
      }, /*#__PURE__*/React.createElement("path", {
        d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
      })));

      if ( /*#__PURE__*/React.isValidElement(this.props.renderConfirmElement)) {
        confirmButton = /*#__PURE__*/React.cloneElement(this.props.renderConfirmElement, {
          onClick: function onClick(e) {
            return _this2.onFormSubmit(e);
          }
        });
      }

      if ( /*#__PURE__*/React.isValidElement(this.props.renderCancelElement)) {
        cancelButton = /*#__PURE__*/React.cloneElement(this.props.renderCancelElement, {
          onClick: function onClick(e) {
            e.preventDefault();

            _this2.onCancel();
          }
        });
      }

      var controls = /*#__PURE__*/React.createElement(React.Fragment, null, confirmButton, cancelButton);

      if (this.state.isLoading) {
        controls = /*#__PURE__*/React.createElement("i", {
          className: "fa fa-fw fa-spinner fa-spin fa-2x"
        });
      }

      var commonProps = {
        value: this.state.newValue,
        validationText: this.state.validationText,
        controls: controls,
        setNewValue: function setNewValue(newValue) {
          return _this2.setState({
            newValue: newValue
          });
        },
        onCancel: function onCancel() {
          return _this2.onCancel();
        }
      };
      var component;

      switch (this.props.type) {
        case "textfield":
          component = /*#__PURE__*/React.createElement(TextField, _extends({}, commonProps, {
            maxLength: this.props.maxLength
          }));
          break;

        case "select":
          component = /*#__PURE__*/React.createElement(Select, _extends({}, commonProps, {
            options: this.props.options
          }));
          break;

        case "textarea":
          component = /*#__PURE__*/React.createElement(TextArea, commonProps);
          break;

        default:
          console.error("Editable(".concat(this.props.id, "): \"").concat(this.props.type, "\" is not a valid value for the \"type\" prop"));
          return null;
      }

      return /*#__PURE__*/React.createElement(reactBootstrap.Form, {
        onSubmit: function onSubmit(e) {
          return _this2.onFormSubmit(e);
        },
        className: "".concat(this.props.className || '', " text-nowrap"),
        inline: true
      }, component);
    }
  }, {
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      this.onSubmit(this.state.newValue);
    }
  }, {
    key: "onCancel",
    value: function onCancel() {
      //reset validation text AND new value, all back to initial
      this.setState({
        validationText: null,
        newValue: this.state.value,
        isEditing: false
      });
    } //validation happens here

  }, {
    key: "onSubmit",
    value: function onSubmit(newValue) {
      var validationText = this.props.validate ? this.props.validate(newValue) : null; //we always trigger this, as long as the prop is specified

      this.props.onSubmit ? this.props.onSubmit(newValue) : null;

      if (validationText) {
        this.setState({
          validationText: validationText
        });
      } else {
        this.props.validate ? this.onValidated(newValue) : this.setState({
          value: newValue,
          isEditing: false
        });
      }
    }
  }, {
    key: "onValidated",
    value: function onValidated(validValue) {
      if (this.props.onValidated) {
        this.props.onValidated(validValue);
      } else if (!this.props.ajax) {
        console.error("Editable(".concat(this.props.id, "): Specified a validate function without onValidated or ajax"));
      }

      if (this.props.ajax && validValue !== this.state.value) {
        this.ajax(validValue);
      } else {
        this.setState({
          value: validValue,
          isEditing: false,
          validationText: null
        });
      }
    }
  }, {
    key: "ajax",
    value: function ajax(validValue) {
      var _this3 = this;

      this.setState({
        isLoading: true
      });
      var xhr = new XMLHttpRequest(); //this will call the user's ajax function, allowing him to set up the xhr object however he wants

      this.props.ajax(xhr, validValue, this.props.id); //consume the user's on ready state change function to call it later before the editable's

      var onReadyStateChange = xhr.onreadystatechange ? xhr.onreadystatechange : null;

      xhr.onreadystatechange = function () {
        onReadyStateChange ? onReadyStateChange() : null;

        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            _this3.setState({
              isLoading: false,
              isEditing: false,
              value: validValue,
              validationText: null
            });
          } else {
            _this3.setState({
              isLoading: false,
              validationText: "Ajax Response ".concat(xhr.status, " Error")
            });
          }
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if ((this.state.isEditing || this.props.alwaysEditing) && this.props.mode === "inline") {
        return this.getEditingComponent();
      } else {
        var value = this.state.value ? this.state.value : "Empty"; //format date objects for display, might add a custom format function here later

        value = this.props.type === "date" && this.state.value ? new window.Date(this.state.value).toUTCString().slice(5, 16) : value;
        value = this.props.type === "file" && this.state.value ? this.state.value.name : value;
        var p = "",
            a = "";

        if (this.props.isValueClickable) {
          if (this.props.disabled) {
            p = value;
          } else {
            if (this.props.type === "select") {
              var selectedOption = this.props.options.filter(function (option) {
                return option.value === value;
              });
              a = selectedOption[0].label;
            } else {
              a = value;
            }
          }
        } else {
          p = value;
          a = this.props.disabled ? a : this.props.editText;
        } //add label if applicable


        p = this.props.label ? "".concat(this.props.label, ": ").concat(p) : p;
        var popover = this.props.mode === "popover" ? /*#__PURE__*/React.createElement(reactBootstrap.Overlay, {
          rootClose: true,
          onHide: function onHide() {
            return _this4.setState({
              isEditing: false
            });
          },
          show: this.state.isEditing,
          placement: this.props.placement,
          target: this.clickableLink
        }, /*#__PURE__*/React.createElement(reactBootstrap.Popover, {
          id: "editable-popover",
          title: this.props.label
        }, this.getEditingComponent())) : null;
        return /*#__PURE__*/React.createElement(reactBootstrap.Form, {
          className: this.props.className,
          inline: true
        }, p && this.props.showText && /*#__PURE__*/React.createElement("p", {
          className: "my-0",
          style: {
            "whiteSpace": "pre-wrap"
          }
        }, p), a && /*#__PURE__*/React.createElement("a", {
          ref: function ref(link) {
            _this4.link = link;
          },
          className: "ml-1 mt-auto" + (a === 'No value' ? ' editable-empty' : ''),
          href: "#",
          onClick: function onClick(e) {
            e.preventDefault();

            _this4.setState({
              isEditing: !_this4.state.isEditing
            });
          }
        }, a), popover);
      }
    }
  }]);

  return Editable;
}(React.Component);
Editable.defaultProps = {
  type: "textfield",
  mode: "inline",
  alwaysEditing: false,
  className: null,
  initialValue: null,
  id: null,
  label: null,
  showText: true,
  disabled: false,
  isValueClickable: false,
  editText: "Edit",
  renderConfirmElement: null,
  renderCancelElement: null,
  //popover
  placement: "top",
  //functions
  validate: null,
  ajax: null,
  onSubmit: null,
  onValidated: null,
  //select props
  options: null
};
Editable.propTypes = {
  type: PropTypes.oneOf(["textfield", "textarea", "select", "date", "file"]).isRequired,
  mode: PropTypes.oneOf(["inline", "popover"]).isRequired,
  alwaysEditing: PropTypes.bool,
  className: PropTypes.string,
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  showText: PropTypes.bool,
  disabled: PropTypes.bool,
  isValueClickable: PropTypes.bool,
  editText: PropTypes.string,
  renderConfirmElement: PropTypes.element,
  renderCancelElement: PropTypes.element,

  /** Functions */
  validate: PropTypes.func,
  ajax: PropTypes.func,
  onSubmit: PropTypes.func,
  onValidated: PropTypes.func,

  /** Popover mode only */
  placement: PropTypes.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "right", "right-start", "right-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end"]),

  /** Select only */
  options: PropTypes.array
};

module.exports = Editable;
