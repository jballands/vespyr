//
//	jballands/vespyr
//	VespyrInput.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ColorUtility, { makeColor } from './utils/ColorUtility';

const getHoverStyles = props => {
	if (props.disabled) {
		return `
			cursor: not-allowed;
		`;
	}
};
const Container = styled.div`
	display: inline-flex;
	flex-flow: row nowrap;
	align-items: center;
	user-select: none;
	cursor: default;
	width: 250px;
	opacity: ${props => (props.disabled ? 0.25 : 1)};

	&:hover {
		${props => getHoverStyles(props)};
	}
`;

const Icon = styled.div`
	margin-right: 10px;
	margin-top: 0.5em;
`;

const InputContainer = styled.div`
	width: 100%;
	position: relative;
`;

const Underlines = styled.div`
	position: relative;
`;

const UnderlineDefault = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	display: block;
	content: '';
	border-bottom: solid 1px
		${props =>
			props.disabled
				? ColorUtility.disabledGray().string()
				: props.color.string()};
`;

const UnderlineInvalid = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	display: block;
	content: '';
	border-bottom: solid 1px ${props => props.invalidColor.string()};
	transform: ${props => (props.invalid ? 'scaleX(1)' : 'scaleX(0)')};
	transition: transform 250ms ease;
`;

const UnderlineFocus = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	display: block;
	content: '';
	border-bottom: solid 1px ${props => props.accentColor.string()};
	transform: ${props => (props.focused ? 'scaleX(1)' : 'scaleX(0)')};
	transition: transform 250ms ease;
`;

const getTitleColor = props => {
	if (props.focused) {
		return props.accentColor.string();
	} else if (props.invalid) {
		return props.invalidColor.string();
	}
	return props.color.string();
};
const Title = styled.div`
	font-size: 10px;
	text-transform: uppercase;
	margin-top: 3px;
	transition: color 250ms ease;
	color: ${props => getTitleColor(props)};
`;

export default class VespyrInput extends React.Component {
	static displayName = 'VespyrInput';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		children: PropTypes.node,
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
		renderMenu: PropTypes.node,
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

	requestFocus = () => {
		const { disabled, focus } = this.props;
		if (!disabled) {
			focus();
		}
	};

	renderIcon = () => {
		const { icon } = this.props;
		if (!icon) {
			return null;
		}
		return <Icon>{icon}</Icon>;
	};

	renderInputContainer = () => {
		const {
			accentColor,
			color,
			isFocused,
			invalid,
			invalidColor,
			title,
		} = this.props;
		const focused = isFocused ? isFocused() : false;

		return (
			<InputContainer>
				{this.props.children}
				{this.props.renderMenu}
				<Underlines>
					<UnderlineDefault color={makeColor(color)} />
					<UnderlineInvalid
						invalidColor={makeColor(invalidColor)}
						invalid={invalid}
					/>
					<UnderlineFocus
						accentColor={makeColor(accentColor)}
						focused={focused}
					/>
				</Underlines>
				<Title
					accentColor={makeColor(accentColor)}
					focused={focused}
					invalidColor={makeColor(invalidColor)}
					invalid={invalid}
					color={makeColor(color)}>
					{title}
				</Title>
			</InputContainer>
		);
	};

	render() {
		const { className, disabled, style } = this.props;

		return (
			<Container
				disabled={disabled}
				style={style}
				className={className}
				onClick={this.requestFocus}>
				{this.renderIcon()}
				{this.renderInputContainer()}
			</Container>
		);
	}
}
