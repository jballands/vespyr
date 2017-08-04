//
//	jballands/vespyr
//	VespyrInput.jsx
//	
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Radium, { Style } from 'radium';

import ColorUtility from './utils/ColorUtility';
import DefaultFont from './utils/DefaultFontStyles';

function getStyles(props) {
	const { accentColor, color, disabled, invalidColor } = props;

	const _accentColor = disabled ? ColorUtility.disabledGray() : accentColor;
	const _color = disabled ? ColorUtility.disabledGray() : color;
	const _invalidColor = disabled ? ColorUtility.disabledGray() : invalidColor;

	return {
		base: {
			display: 'inline-flex',
			flexFlow: 'row nowrap',
			alignItems: 'center',
			userSelect: 'none',
			cursor: 'default',
		},
		baseDisabled: {
			':hover': {
				cursor: 'not-allowed',
			},
		},
		icon: {
			maxWidth: '25px',
			maxHeight: '25px',
			marginRight: '10px',
		},
		iconChildren: {
			maxWidth: '100%',
			maxHeight: '100%',
		},
		title: {
			fontSize: '10px',
			textTransform: 'uppercase',
			marginTop: '3px',
			transition: 'color 250ms ease',
			color: _color,
		},
		titleFocus: {
			color: _accentColor,
		},
		titleInvalid: {
			color: _invalidColor,
		},
		underlineDefault: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			display: 'block',
			content: '',
			borderBottom: `solid 1px ${_color}`,
		},
		underlineFocus: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			display: 'block',
			content: '',
			borderBottom: `solid 2px ${_accentColor}`,
			transform: 'scaleX(0)',
			transition: 'transform 250ms ease',
		},
		underlineFocusShow: {
			transform: 'scaleX(1)',
		},
		underlineInvalid: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			display: 'block',
			content: '',
			borderBottom: `solid 2px ${_invalidColor}`,
			transform: 'scaleX(0)',
			transition: 'transform 250ms ease',
		},
		underlineInvalidShow: {
			transform: 'scaleX(1)',
		},
		underlines: {
			position: 'relative',
		},
	};
}

@Radium
export default class VespyrInput extends React.Component {

	static displayName = 'TextInput';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		children: PropTypes.func.isRequired,
		className: PropTypes.string,
		color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		disabled: PropTypes.bool,

		// Invoked when VespyrInput requests that the child focuses. The child
		// can ignore this request or handle it. This function doesn't need to
		// return anything.
		focus: PropTypes.func,

		// Invoked when VespyrInput is rendering and needs to know if it should
		// render its focused state. This function should return a boolean, true
		// to render a focused state, false if not.
		isFocused: PropTypes.func,

		icon: PropTypes.node,
		invalid: PropTypes.bool,
		invalidColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		style: PropTypes.object,
		title: PropTypes.string,
	};

	static defaultProps = {
		accentColor: ColorUtility.blue(),
		color: ColorUtility.black(),
		disabled: false,
		invalid: false,
		invalidColor: ColorUtility.red(),
	};

	renderIcon = styles => {
		const { icon } = this.props;
		if (!icon) {
			return null;
		}
		return (
			<div style={styles.icon}>
				<Style rules={{ '*': styles.iconChildren }} />
				{icon}
			</div>
		);
	};

	renderInputContainer = styles => {
		const { isFocused, invalid, title } = this.props;
		const focused = isFocused ? isFocused() : false;

		return (
			<div style={styles.inputContainer}>
				{this.props.children()}
				<div style={styles.underlines}>
					<div style={styles.underlineDefault} />
					<div style={[styles.underlineInvalid, invalid ? styles.underlineInvalidShow : null]} />
					<div style={[styles.underlineFocus, focused ? styles.underlineFocusShow : null]} />
				</div>
				<div style={[styles.title, focused ? styles.titleFocus : null, invalid ? styles.titleInvalid : null]}>
					{title}
				</div>
			</div>
		);
	};

	render() {
		const styles = getStyles(this.props);
		const { className, disabled, focus, style } = this.props;

		return (
			<div style={[DefaultFont, styles.base, disabled ? styles.baseDisabled : null, style]}
				className={className}
				onClick={focus}>
				{this.renderIcon(styles)}
				{this.renderInputContainer(styles)}
			</div>
		);
	}

}