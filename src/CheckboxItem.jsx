//
//	jballands/vespyr
//	CheckboxItem.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';

import Checkmark from './svg/Checkmark';
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

const CheckboxOutline = styled.div`
	width: 16px;
	height: 16px;
	border: 1px solid
		${props =>
			props.mouseIsDown
				? props.accentColor.string()
				: props.color.string()};
	transition: all ${props => (props.mouseIsDown ? 0 : 500)}ms ease;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CheckboxFill = styled.div`
	width: 14px;
	height: 14px;
	background: ${props => props.accentColor.string()};
	display: inline-block;
	position: relative;
`;

const StyledCheckmark = styled(Checkmark)`
	position: absolute;
	width: 10px;
	height: 10px;
	top: calc(50% - 5px);
	left: calc(50% - 5px);
`;

const Text = styled.div`
	margin-left: 7px;
	font-size: 16px;
	color: ${props =>
		props.mouseIsDown ? props.accentColor.string() : props.color.string()};
	transition: all ${props => (props.mouseIsDown ? 0 : 500)}ms ease;
`;

export default class CheckboxItem extends React.Component {
	static displayName = 'CheckboxItem';

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

	renderCheckmark = () => {
		const { accentColor, color, selected } = this.props;
		const { mouseIsDown } = this.state;

		return (
			<CheckboxOutline
				mouseIsDown={mouseIsDown}
				accentColor={makeColor(accentColor)}
				selected={selected}
				color={makeColor(color)}>
				{selected && (
					<CheckboxFill accentColor={makeColor(accentColor)}>
						<StyledCheckmark
							color={makeColor(ColorUtility.white())}
						/>
					</CheckboxFill>
				)}
			</CheckboxOutline>
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
				className={cx('vespyr-list-item', className)}
				onClick={this.handleOnClick}
				onMouseDown={this.handleMouseDown}
				onMouseUp={this.handleMouseUp}
				disabled={disabled}
				style={style}>
				{this.renderCheckmark()}
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
