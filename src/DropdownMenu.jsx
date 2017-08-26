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

const Container = styled.div`
	display: inline-flex;
	flex-flow: row nowrap;
	align-items: flex-end;
	border: 0;
	outline: none;
	position: relative;
`;

const Input = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;

	&:hover {
		cursor: pointer;
	}
`;

const StyledCaretDown = styled(CaretDown)`
	padding-bottom: 10px;
	margin-left: 7px;
`;

const PositionedAnimatedMenu = styled(AnimatedMenu)`
	position: absolute;
	top: calc(100% - 14px);
`;

const Selection = styled.div`
	padding: 4px 0;
	font-size: 16px;
`;

const VespyrInputWithPointer = styled(VespyrInput)`
	&:hover {
		cursor: pointer;
	}
`;

export default class DropdownMenu extends React.Component {

	static displayName = 'DropdownMenu';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		children: PropTypes.node,
		className: PropTypes.string,
		color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
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
		this.setState({ focused: true });
	};

	removeFocus = () => {
		this.setState({ focused: false });
	};

	isFocused = () => {
		return this.state.focused;
	};

	renderInput = () => {
		const { accentColor, color, disabled, icon, invalid, invalidColor, title } = this.props;
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
			<Input>
				<VespyrInputWithPointer focus={this.addFocus} isFocused={this.isFocused} {...vespyrInputProps}>
					{this.renderSelection()}
				</VespyrInputWithPointer>
				{this.renderMenu()}
			</Input>
		);
	};

	renderSelection = () => {
		const { value } = this.props;

		return (
			<Selection>
				{value}
			</Selection>
		);
	};

	renderMenu = () => {
		const { children, title } = this.props;

		return (
			<PositionedAnimatedMenu title={title} show={this.state.focused}>
				{children}
			</PositionedAnimatedMenu>
		);
	};

	render() {
		const { className, style } = this.props;

		return (
			<Container className={className} style={style} tabIndex="0" onFocus={this.addFocus}>
				{this.renderInput()}
				<StyledCaretDown />
			</Container>
		);
	}

}