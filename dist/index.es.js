import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

var hashToStyles = function hashToStyles(styleHash) {
  var result = '';
  var keys = Object.keys(styleHash);

  for (var _i = 0; _i < keys.length; _i++) {
    var key = keys[_i];

    if (result) {
      result += '; ';
    }

    result += key + ': ' + styleHash[key];
  }

  return result;
};
var toPx = function toPx(value) {
  if (!value) {
    return '0';
  }

  return "".concat(value, "px");
};

var BulletproofButton =
/*#__PURE__*/
function (_Component) {
  _inherits(BulletproofButton, _Component);

  function BulletproofButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BulletproofButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BulletproofButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculateVmlArcSize", function () {
      return Math.round(_this.props.borderRadius / _this.props.width * 100).toString() + '%';
    });

    return _this;
  }

  _createClass(BulletproofButton, [{
    key: "render",
    value: function render() {
      var vmlRectStyles = hashToStyles({
        'height': toPx(this.props.height),
        'v-text-anchor': 'middle',
        'width': toPx(this.props.width)
      });
      var vmlCenterStyles = hashToStyles({
        'color': '#ffffff',
        'font-family': this.props.fontFamily,
        'font-size': toPx(this.props.fontSize),
        'font-weight': this.props.fontWeight
      });
      var vmlArcSize = this.calculateVmlArcSize();
      var htmlLinkStyles = hashToStyles({
        'background-color': this.props.backgroundColor,
        'border-color': this.props.borderColor,
        'border-style': this.props.borderStyle,
        'border-width': toPx(this.props.borderWidth),
        'border-radius': toPx(this.props.borderRadius),
        'color': this.props.fontColor,
        'display': 'inline-block',
        'font-family': this.props.fontFamily,
        'font-size': toPx(this.props.fontSize),
        'font-weight': this.props.fontWeight,
        'height': toPx(this.props.height),
        'line-height': toPx(this.props.height),
        'mso-hide': 'all',
        'text-align': 'center',
        'text-decoration': 'none',
        'width': toPx(this.props.width),
        '-webkit-text-size-adjust': 'none'
      });
      var vmlButton = "\n      <!--[if mso]>\n        <v:roundrect xmlns:v=\"urn:schemas-microsoft-com:vml\"\n                     xmlns:w=\"urn:schemas-microsoft-com:office:word\"\n                     href=\"".concat(this.props.href, "\"\n                     style=\"").concat(vmlRectStyles, "\"\n                     arcsize=\"").concat(vmlArcSize, "\"\n                     strokecolor=\"").concat(this.props.borderColor, "\"\n                     fillcolor=\"").concat(this.props.backgroundColor, "\">\n          <w:anchorlock />\n          <center style=\"").concat(vmlCenterStyles, "\">\n            ").concat(this.props.text, "\n          !</center>\n        </v:roundrect>\n      <![endif]-->\n    ");
      var htmlButton = "\n      <a\n        href=\"".concat(this.props.href, "\"\n        style=\"").concat(htmlLinkStyles, "\">\n        ").concat(this.props.text, "\n      </a>\n    ");
      return React.createElement("div", null, React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: vmlButton
        }
      }), React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: htmlButton
        }
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.linkElement) {
        this.linkElement.style['mso-hide'] = 'all';
        this.linkElement.style['font-size'] = '15px';
        this.linkElement.style.fontSize = '16px';
        this.linkElement.style.msoHide = 'all';
      }
    }
  }]);

  return BulletproofButton;
}(Component);
BulletproofButton.defaultProps = {
  backgroundColor: '#556270',
  borderColor: '#1e3650',
  borderRadius: 4,
  borderStyle: 'solid',
  borderWidth: 1,
  fontFamily: 'sans-serif',
  fontSize: 13,
  fontWeight: 'bold',
  fontColor: '#fff',
  height: 40,
  width: 200
};
BulletproofButton.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.number,
  borderStyle: PropTypes.string,
  borderWidth: PropTypes.number,
  fontColor: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  height: PropTypes.number,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.number
};

export default BulletproofButton;
//# sourceMappingURL=index.es.js.map
