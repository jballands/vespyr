//
//	jballands/vespyr
//	CheckboxItem.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Checkmark from './svg/Checkmark';
import ColorUtility, { makeColor } from './utils/ColorUtility';

const Container = styled.div`
	display: inline-flex;
	flex-flow: row nowrap;
	align-items: center;
	user-select: none;

	&:hover {
		cursor: pointer;
	}
`;

const CheckboxOutline = styled.div`
	width: 16px;
	height: 16px;
	border: 1px solid
		${props => (props.mouseIsDown ? props.accentColor.string() : 'black')};
	transition: all ${props => (props.mouseIsDown ? 0 : 500)}ms ease;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CheckboxFill = styled.div`
	width: 14px;
	height: 14px;
	background: ${props =>
		props.selected ? props.accentColor.string() : 'transparent'};
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
		props.mouseIsDown ? props.accentColor.string() : 'black'};
	transition: all ${props => (props.mouseIsDown ? 0 : 500)}ms ease;
`;

export default class CheckboxItem extends React.Component {
	static displayName = 'CheckboxItem';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		children: PropTypes.node,
		className: PropTypes.string,
		disabled: PropTypes.bool,
		id: PropTypes.string.isRequired,
		onClick: PropTypes.func,
		selected: PropTypes.bool,
		style: PropTypes.object,
	};

	static defaultProps = {
		accentColor: ColorUtility.blue(),
		disabled: false,
		selected: false,
	};

	state = {
		mouseIsDown: false,
	};

	handleMouseDown = () => {
		this.setState({ mouseIsDown: true });
	};

	handleMouseUp = () => {
		this.setState({ mouseIsDown: false });
	};

	renderRadio = () => {
		const { accentColor, selected } = this.props;
		const { mouseIsDown } = this.state;

		return (
			<CheckboxOutline
				mouseIsDown={mouseIsDown}
				accentColor={makeColor(accentColor)}
				selected={selected}>
				<CheckboxFill
					accentColor={makeColor(accentColor)}
					selected={selected}>
					{selected && (
						<StyledCheckmark
							color={makeColor(ColorUtility.white())}
						/>
					)}
				</CheckboxFill>
			</CheckboxOutline>
		);
	};

	render() {
		const { accentColor, children, onClick } = this.props;
		const { mouseIsDown } = this.state;

		return (
			<Container
				onClick={onClick}
				onMouseDown={this.handleMouseDown}
				onMouseUp={this.handleMouseUp}>
				{this.renderRadio()}
				<Text accentColor={accentColor} mouseIsDown={mouseIsDown}>
					{children}
				</Text>
			</Container>
		);
	}
}
