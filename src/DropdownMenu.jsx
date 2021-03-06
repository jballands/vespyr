//
//	jballands/vespyr
//	DropdownMenu.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import VespyrInput from './VespyrInput';
import AnimatedMenu from './AnimatedMenu';
import CaretDown from './svg/CaretDown';

import ColorUtility, { makeColor } from './utils/ColorUtility';

const Container = styled.div`
	display: inline-flex;
	flex-flow: row nowrap;
	align-items: flex-end;
	justify-content: space-between;
	border: 0;
	outline: none;
	position: relative;
	width: 250px;

	&:hover {
		cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
	}
`;

const Input = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	width: 100%;

	&:hover {
		cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
	}
`;

const StyledCaretDown = styled(CaretDown)`
	padding-bottom: 10px;
	margin-left: 7px;
	opacity: ${props => (props.disabled ? 0.25 : 1)};
`;

const PositionedAnimatedMenu = styled(AnimatedMenu)`
	position: absolute;
	top: calc(100% - 15px);
	left: 0;
	width: 100%;
`;

const Selection = styled.div`
	padding: 4px 0;
	color: ${props => props.color.string()};
`;

const VespyrInputWithPointer = styled(VespyrInput)`
	width: 100%;
`;

export default class DropdownMenu extends React.Component {
	static displayName = 'DropdownMenu';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		children: PropTypes.node,
		className: PropTypes.string,
		color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		darkMode: PropTypes.bool,
		disabled: PropTypes.bool,
		hint: PropTypes.string,
		hintColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		icon: PropTypes.node,
		invalid: PropTypes.bool,
		invalidColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		onUpdate: PropTypes.func,
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

		//	An optional function that takes two arguments: the old value and the new value,
		//	and returns true if DropdownMenu should lose focus, or false if not. If this prop
		//	is undefined, DropdownMenu will always lose focus when any props are provided.
		shouldLoseFocus: PropTypes.func,

		style: PropTypes.object,
		title: PropTypes.string,
	};

	static defaultProps = {
		accentColor: ColorUtility.blue(),
		color: ColorUtility.black(),
	};

	state = {
		focused: false,
	};

	componentWillReceiveProps(newProps) {
		const { value, shouldLoseFocus } = this.props;
		if (!shouldLoseFocus || shouldLoseFocus(value, newProps.value)) {
			this.removeFocus();
		}
	}

	addFocus = () => {
		!this.props.disabled && this.setState({ focused: true });
	};

	removeFocus = () => {
		this.setState({ focused: false });
	};

	isFocused = () => {
		return this.state.focused;
	};

	renderInput = () => {
		const {
			accentColor,
			color,
			disabled,
			icon,
			invalid,
			invalidColor,
			title,
		} = this.props;
		const vespyrInputProps = {
			accentColor,
			color,
			disabled,
			icon,
			invalid,
			invalidColor,
			title,
		};

		return (
			<Input disabled={disabled}>
				<VespyrInputWithPointer
					focus={this.addFocus}
					isFocused={this.isFocused}
					renderMenu={this.renderMenu()}
					{...vespyrInputProps}>
					{this.renderSelection()}
				</VespyrInputWithPointer>
			</Input>
		);
	};

	renderSelection = () => {
		const { color, value } = this.props;
		return <Selection color={makeColor(color)}>{value}</Selection>;
	};

	renderMenu = () => {
		const { accentColor, children, darkMode, title } = this.props;

		const color = darkMode ? ColorUtility.offWhite() : ColorUtility.black();

		return (
			<PositionedAnimatedMenu
				accentColor={makeColor(accentColor)}
				color={color}
				title={title}
				darkMode={darkMode}
				show={this.state.focused}>
				{children}
			</PositionedAnimatedMenu>
		);
	};

	render() {
		const { accentColor, className, color, disabled, style } = this.props;

		return (
			<Container
				className={className}
				disabled={disabled}
				style={style}
				tabIndex="0"
				onFocus={this.addFocus}
				onBlur={this.removeFocus}>
				{this.renderInput()}
				<StyledCaretDown
					disabled={disabled}
					color={makeColor(this.state.focused ? accentColor : color)}
				/>
			</Container>
		);
	}
}
