//
//	jballands/vespyr
//	RadioItem.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';

import ColorUtility, { makeColor } from './utils/ColorUtility';

const Container = styled.div`
	display: inline-flex;
	flex-flow: row nowrap;
	align-items: center;
	user-select: none;
	opacity: ${props => (props.disabled ? 0.25 : 1)};

	&:hover {
		cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
	}
`;

const RadioOutline = styled.div`
	border-radius: 50%;
	border: 1px solid
		${props =>
			props.mouseIsDown
				? props.accentColor.string()
				: props.color.string()};
	width: 16px;
	height: 16px;
	position: relative;
	transition: all ${props => (props.mouseIsDown ? 0 : 500)}ms ease;
`;

const RadioFill = styled.div`
	position: absolute;
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background: ${props => props.accentColor.string()};
	top: calc(50% - 6px);
	left: calc(50% - 6px);
	transition: background 300ms ease;
`;

const Text = styled.div`
	margin-left: 7px;
	font-size: 16px;
	color: ${props =>
		props.mouseIsDown ? props.accentColor.string() : props.color.string()};
	transition: all ${props => (props.mouseIsDown ? 0 : 500)}ms ease;
`;

export default class RadioItem extends React.Component {
	static displayName = 'RadioItem';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		children: PropTypes.node,
		className: PropTypes.string,
		color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		disabled: PropTypes.bool,
		id: PropTypes.string.isRequired,
		onClick: PropTypes.func,
		selected: PropTypes.bool,
		style: PropTypes.object,
	};

	static defaultProps = {
		accentColor: ColorUtility.blue(),
		color: ColorUtility.black(),
		disabled: false,
		selected: false,
	};

	state = {
		mouseIsDown: false,
	};

	handleMouseDown = () => {
		!this.props.disabled && this.setState({ mouseIsDown: true });
	};

	handleMouseUp = () => {
		!this.props.disabled && this.setState({ mouseIsDown: false });
	};

	handleOnClick = () => {
		const { disabled, id, onClick } = this.props;
		if (!disabled) {
			onClick && onClick(id);
		}
	};

	renderRadio = () => {
		const { accentColor, color, selected } = this.props;
		const { mouseIsDown } = this.state;

		return (
			<RadioOutline
				mouseIsDown={mouseIsDown}
				accentColor={makeColor(accentColor)}
				selected={selected}
				color={makeColor(color)}>
				{selected && <RadioFill accentColor={makeColor(accentColor)} />}
			</RadioOutline>
		);
	};

	render() {
		const {
			accentColor,
			children,
			className,
			color,
			disabled,
			style,
		} = this.props;
		const { mouseIsDown } = this.state;

		return (
			<Container
				onClick={this.handleOnClick}
				onMouseDown={this.handleMouseDown}
				onMouseUp={this.handleMouseUp}
				disabled={disabled}
				className={cx('vespyr-list-item', className)}
				style={style}>
				{this.renderRadio()}
				<Text
					accentColor={makeColor(accentColor)}
					color={makeColor(color)}
					mouseIsDown={mouseIsDown}>
					{children}
				</Text>
			</Container>
		);
	}
}
