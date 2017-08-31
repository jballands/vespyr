//
//	jballands/vespyr
//	RadioItem.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const RadioOutline = styled.div`
	border-radius: 50%;
	border: 1px solid ${props => props.mouseIsDown ? props.accentColor.string() : 'black'};
	width: 16px;
	height: 16px;
	position: relative;
	transition: all ${props => props.mouseIsDown ? 0 : 500}ms ease;
`;

const RadioFill = styled.div`
	position: absolute;
	width: ${props => props.selected ? '12px' : 0};
	height: ${props => props.selected ? '12px' : 0};
	border-radius: 50%;
	background: ${props => props.accentColor.string()};
	top: calc(50% - 6px);
	left: calc(50% - 6px);
`;

const Text = styled.div`
	margin-left: 7px;
	font-size: 16px;
	color: ${props => props.mouseIsDown ? props.accentColor.string() : 'black'};
	transition: all ${props => props.mouseIsDown ? 0 : 500}ms ease;
`;

export default class RadioItem extends React.Component {

	static displayName = 'RadioItem';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		children: PropTypes.node,
		className: PropTypes.string,
		disabled: PropTypes.bool,
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
			<RadioOutline
				mouseIsDown={mouseIsDown}
				accentColor={makeColor(accentColor)}
				selected={selected}>
				<RadioFill accentColor={makeColor(accentColor)} selected={selected} />
			</RadioOutline>
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
				<Text accentColor={accentColor} mouseIsDown={mouseIsDown}>{children}</Text>
			</Container>
		);
	}

}