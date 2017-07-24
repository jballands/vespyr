//
//	jballands/vespyr
//	TextInput.js
//	
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Radium, { Style } from 'radium';

import ColorUtility from './utils/ColorUtility';
import DefaultFont from './utils/DefaultFontStyles';

function getStyles(props) {
	const { accentColor, color, disabled, hintColor, invalidColor } = props;

	const _accentColor = disabled ? ColorUtility.disabledGray() : accentColor;
	const _color = disabled ? ColorUtility.disabledGray() : color;
	const _invalidColor = disabled ? ColorUtility.disabledGray() : invalidColor;

	return {
		base: {
			display: 'inline-flex',
			flexFlow: 'row nowrap',
			alignItems: 'center',
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
		input: {
			border: 0,
			outline: 'none',
			width: '250px',
			padding: '5px 0',
			fontSize: '16px',
			color: color,
			background: 'transparent',
			resize: 'none',
			':focus': {},
		},
		inputContainer: {
			display: 'flex',
			flexFlow: 'column nowrap',
			justifyContent: 'flex-start',
		},
		inputDisabled: {
			':disabled': {
				cursor: 'not-allowed',
			},
		},
		inputPlaceholder: {
			fontStyle: 'italic',
			color: hintColor,
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
export default class TextInput extends React.Component {

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		className: PropTypes.string,
		color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		disabled: PropTypes.bool,
		hint: PropTypes.string,
		hintColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		icon: PropTypes.node,
		invalid: PropTypes.bool,
		invalidColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		lines: PropTypes.number,
		onUpdate: PropTypes.func,
		value: PropTypes.string,
		style: PropTypes.object,
		title: PropTypes.string,
		type: PropTypes.string,
	};

	static defaultProps = {
		accentColor: ColorUtility.blue(),
		color: ColorUtility.black(),
		disabled: false,
		hintColor: ColorUtility.hintGray(),
		invalid: false,
		invalidColor: ColorUtility.red(),
		lines: 1,
		type: 'text',
	};

	focus = () => {
		this.input.focus();
	};

	handleUpdate = e => {
		this.props.onUpdate(e.target.value);
	};

	inputReference = input => {
		this.input = input;
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

	renderTextArea = styles => {
		const { disabled, hint, lines, type, value } = this.props;

		return (
			<div>
				<Style rules={{ 'textarea::placeholder': styles.inputPlaceholder }} />
				<textarea type={type}
					key="VespyrTextInput"
					style={[styles.input, disabled ? styles.inputDisabled : null]}
					disabled={disabled}
					placeholder={hint}
					ref={this.inputReference}
					onChange={this.handleUpdate}
					value={value ? value : ''}
					rows={lines}
				/>
			</div>
		);
	};

	renderTextInput = styles => {
		const { disabled, hint, type, value } = this.props;

		return (
			<div>
				<Style rules={{ 'input::placeholder': styles.inputPlaceholder }} />
				<input type={type}
					key="VespyrTextInput"
					style={[styles.input, disabled ? styles.inputDisabled : null]}
					disabled={disabled}
					placeholder={hint}
					ref={this.inputReference}
					onChange={this.handleUpdate}
					value={value ? value : ''}
				/>
			</div>
		);
	};

	renderInput = styles => {
		const { lines } = this.props;
		if (lines > 1) {
			return this.renderTextArea(styles);
		}
		return this.renderTextInput(styles);
	};

	renderInputContainer = styles => {
		const { invalid, title } = this.props;
		const isFocused = Radium.getState(this.state, 'VespyrTextInput', ':focus');

		return (
			<div style={styles.inputContainer}>
				{this.renderInput(styles)}
				<div style={styles.underlines}>
					<div style={styles.underlineDefault} />
					<div style={[styles.underlineInvalid, invalid ? styles.underlineInvalidShow : null]} />
					<div style={[styles.underlineFocus, isFocused ? styles.underlineFocusShow : null]} />
				</div>
				<div style={[styles.title, isFocused ? styles.titleFocus : null, invalid ? styles.titleInvalid : null]}>
					{title}
				</div>
			</div>
		);
	};

	render() {
		const styles = getStyles(this.props);
		const { className, disabled, style } = this.props;

		return (
			<div style={[DefaultFont, styles.base, disabled ? styles.baseDisabled : null, style]}
				className={className}
				onClick={this.focus}
				key="VespyrTextInputContainer">
				{this.renderIcon(styles)}
				{this.renderInputContainer(styles)}
			</div>
		);
	}

}