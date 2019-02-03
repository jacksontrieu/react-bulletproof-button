'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

var hashToStyles = function hashToStyles(styleHash) {
  var result = '';

  var keys = Object.keys(styleHash);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (result) {
        result += '; ';
      }

      result += key + ': ' + styleHash[key];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
};

var toPx = function toPx(value) {
  if (!value) {
    return '0';
  }

  return value + 'px';
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var BulletproofButton = function (_Component) {
  inherits(BulletproofButton, _Component);

  function BulletproofButton() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, BulletproofButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = BulletproofButton.__proto__ || Object.getPrototypeOf(BulletproofButton)).call.apply(_ref, [this].concat(args))), _this), _this.calculateVmlArcSize = function () {
      return Math.round(_this.props.borderRadius / _this.props.width * 100).toString() + '%';
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(BulletproofButton, [{
    key: 'render',
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

      var vmlButton = '\n      <!--[if mso]>\n        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"\n                     xmlns:w="urn:schemas-microsoft-com:office:word"\n                     href="' + this.props.href + '"\n                     style="' + vmlRectStyles + '"\n                     arcsize="' + vmlArcSize + '"\n                     strokecolor="' + this.props.borderColor + '"\n                     fillcolor="' + this.props.backgroundColor + '">\n          <w:anchorlock />\n          <center style="' + vmlCenterStyles + '">\n            ' + this.props.text + '\n          !</center>\n        </v:roundrect>\n      <![endif]-->\n    ';

      var htmlButton = '\n      <a\n        href="' + this.props.href + '"\n        style="' + htmlLinkStyles + '">\n        ' + this.props.text + '\n      </a>\n    ';

      return React__default.createElement(
        'div',
        null,
        React__default.createElement('div', { dangerouslySetInnerHTML: { __html: vmlButton } }),
        React__default.createElement('div', { dangerouslySetInnerHTML: { __html: htmlButton } })
      );
    }
  }, {
    key: 'componentDidMount',
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
}(React.Component);


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

module.exports = BulletproofButton;
//# sourceMappingURL=index.js.map
