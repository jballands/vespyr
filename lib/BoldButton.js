'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
//	jballands/vespyr-button
//	BoldButton/index.js
//	
//	© 2017 Jonathan Ballands
//

function getStyles(props, context) {
	var _base;

	return {
		base: (_base = {
			padding: 7,
			display: 'flex',
			flexFlow: 'row nowrap',
			justifyContent: 'center',
			background: 'white',
			border: '2px solid #EBEBEB',
			borderRadius: '5px'
		}, _defineProperty(_base, 'display', 'inline-block'), _defineProperty(_base, 'fontFamily', 'system, -apple-system, BlinkMacSystemFont'), _defineProperty(_base, 'fontSize', '12px'), _defineProperty(_base, 'textTransform', 'uppercase'), _base)
	};
}

var BoldButton = (0, _radium2.default)(_class = function (_React$Component) {
	_inherits(BoldButton, _React$Component);

	function BoldButton() {
		_classCallCheck(this, BoldButton);

		return _possibleConstructorReturn(this, (BoldButton.__proto__ || Object.getPrototypeOf(BoldButton)).apply(this, arguments));
	}

	_createClass(BoldButton, [{
		key: 'render',
		value: function render() {
			var styles = getStyles(this.props, this.context);

			return _react2.default.createElement(
				'div',
				{ style: styles.base },
				'Hello world!'
			);
		}
	}]);

	return BoldButton;
}(_react2.default.Component)) || _class;

exports.default = BoldButton;