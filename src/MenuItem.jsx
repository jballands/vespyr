//
//	jballands/vespyr
//	MenuItem.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ColorUtility, { makeColor } from './utils/ColorUtility';

const Container = styled.div`
	padding: 7px 10px 7px 12px;
	color: ${props => props.color.string()};

	&:hover {
		background: ${ColorUtility.hoverGray().string()};
		cursor: pointer;
	}
`;

export default class MenuItem extends React.Component {
	static displayName = 'MenuItem';

	static propTypes = {
		children: PropTypes.node,
		color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		id: PropTypes.string,
		onClick: PropTypes.func,
		seperator: PropTypes.bool,
		style: PropTypes.object,
	};

	static defaultProps = {
		color: ColorUtility.black(),
		seperator: false,
	};

	handleClick = () => {
		const { id, onClick } = this.props;
		onClick && onClick(id);
	};

	render() {
		const { children, color, style } = this.props;

		return (
			<Container
				color={makeColor(color)}
				style={style}
				onClick={this.handleClick}>
				{children}
			</Container>
		);
	}
}
