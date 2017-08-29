//
//	jballands/vespyr
//	RadioItem.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { spring, Motion } from 'react-motion';
import styled from 'styled-components';

const Container = styled.div`
	display: inline-flex;
	flex-flow: row nowrap;
	align-items: center;
`;

const RadioOutline = styled.div`
	border-radius: 50%;
	border: 1px solid black;
	width: 14px;
	height: 14px;
	position: relative;
`;

const RadioFill = styled.div`
	position: absolute;
	width: ${props => props.radius * 2}px;
	height: ${props => props.radius * 2}px;
	border-radius: 50%;
	background: black;
	top: calc(50% - ${props => props.radius}px);
	left: calc(50% - ${props => props.radius}px);
	transition: all 250ms ease;
`;

const Text = styled.div`
	margin-left: 7px;
	font-size: 16px;
`;

function springTo(value) {
	return spring(value, { stiffness: 300, dampening: 100 });
}

export default class RadioItem extends React.Component {

	static displayName = 'RadioItem';

	static propTypes = {
		children: PropTypes.node,
		className: PropTypes.string,
		disabled: PropTypes.bool,
		onClick: PropTypes.func,
		selected: PropTypes.bool,
		style: PropTypes.object,
	};

	static defaultProps = {
		disabled: false,
		selected: false,
	};

	renderRadio = () => {
		const { selected } = this.props;

		return (
			<RadioOutline>
				<Motion
					defaultStyle={{ radius: selected ? 5 : 0 }}
					style={{ radius: selected ? springTo(5) : springTo(0) }}>
					{interpolated => (
						<RadioFill radius={interpolated.radius} selected={selected} />
					)}
				</Motion>
			</RadioOutline>
		);
	};

	render() {
		const { children, onClick } = this.props;

		return (
			<Container onClick={onClick}>
				{this.renderRadio()}
				<Text>{children}</Text>
			</Container>
		);
	}

}