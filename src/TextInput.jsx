//
//	jballands/vespyr
//	TextInput.jsx
//	
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Radium, { Style } from 'radium';

import VespyrInput from './VespyrInput';
import ColorUtility from './utils/ColorUtility';

function getStyles(props) {
	const { color, hintColor } = props;

	return {
		input: {
			border: 0,
			outline: 'none',
			width: '100%',
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
	};
}

@Radium
export default class TextInput extends React.Component {

	static displayName = 'TextInput';

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

	focus = e => {
		this.input.focus();
		e.preventDefault();
	};

	isFocused = () => {
		return Radium.getState(this.state, 'VespyrTextInput', ':focus');
	};

	handleUpdate = e => {
		this.props.onUpdate(e.target.value);
	};

	inputReference = input => {
		this.input = input;
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

	render() {
		const { accentColor, className, color, disabled, icon, invalid,
			invalidColor, style, title } = this.props;

		const styles = getStyles(this.props);
		const vespyrInputProps = {
			accentColor,
			className,
			color,
			disabled,
			icon,
			invalid,
			invalidColor,
			style,
			title,
		};

		return (
			<VespyrInput focus={this.focus} isFocused={this.isFocused} {...vespyrInputProps}>
				{() => this.renderInput(styles)}
			</VespyrInput>
		);
	}

}