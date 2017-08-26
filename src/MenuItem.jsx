//
//	jballands/vespyr
//	MenuItem.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ColorUtility from './utils/ColorUtility';

const Container = styled.div`
	padding: 7px 10px 7px 12px;

	&:hover {
		background: ${ColorUtility.hoverGray().string()};
	}
`;

export default class MenuItem extends React.Component {

	static displayName = 'MenuItem';

	static propTypes = {
		children: PropTypes.node,
		id: PropTypes.string,
		onClick: PropTypes.func,
		style: PropTypes.object,
	};

	handleClick = () => {
		const { id, onClick } = this.props;
		onClick && onClick(id);
	};

	render() {
		const { children, style } = this.props;

		return (
			<Container style={style} onClick={this.handleClick}>
				{children}
			</Container>
		);
	}

}