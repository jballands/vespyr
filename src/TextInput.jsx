//
//	jballands/vespyr
//	TextInput.jsx
//	
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import VespyrInput from './VespyrInput';
import ColorUtility, { makeColor } from './utils/ColorUtility';

const Input = styled.input`
	border: 0;
	outline: none;
	width: 100%;
	padding: 5px 0;
	font-size: 16px;
	color: ${props => props.color.string()};
	background: transparent;
	resize: none;

	input::placeholder { 
		font-style: italic;
		color: ${props => props.hintColor.string()};
	}

	&:disabled {
		cursor: not-allowed;
	}
`;

const TextArea = Input.withComponent('textarea');

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

	state = {
		isFocused: false,
	};

	focus = e => {
		this.setState({ isFocused: true });
		// this.input.focus();
		e.preventDefault();
	};

	unfocus = () => {
		this.setState({ isFocused: false });
	};

	isFocused = () => {
		return this.state.isFocused;
		// return Radium.getState(this.state, 'VespyrTextInput', ':focus');
	};

	handleUpdate = e => {
		this.props.onUpdate(e.target.value);
	};

	inputReference = input => {
		this.input = input;
	};

	renderTextArea = () => {
		const { color, disabled, hint, hintColor, lines, type, value } = this.props;

		return (
			<div>
				<TextArea
					type={type}
					key="VespyrTextInput"
					color={makeColor(color)}
					disabled={disabled}
					placeholder={hint}
					hintColor={makeColor(hintColor)}
					ref={this.inputReference}
					onChange={this.handleUpdate}
					value={value ? value : ''}
					rows={lines}
					onFocus={this.focus}
					onBlur={this.unfocus}
				/>
			</div>
		);
	};

	renderTextInput = () => {
		const { color, disabled, hint, hintColor, type, value } = this.props;

		return (
			<div>
				<Input type={type}
					key="VespyrTextInput"
					color={makeColor(color)}
					disabled={disabled}
					placeholder={hint}
					hintColor={makeColor(hintColor)}
					ref={this.inputReference}
					onChange={this.handleUpdate}
					value={value ? value : ''}
					onFocus={this.focus}
					onBlur={this.unfocus}
				/>
			</div>
		);
	};

	renderInput = () => {
		const { lines } = this.props;
		if (lines > 1) {
			return this.renderTextArea();
		}
		return this.renderTextInput();
	};

	render() {
		const { accentColor, className, color, disabled, icon, invalid,
			invalidColor, style, title } = this.props;

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
				{this.renderInput()}
			</VespyrInput>
		);
	}

}