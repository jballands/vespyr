//
//	jballands/vespyr
//	MenuSeperator.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import ColorUtility from './utils/ColorUtility';

const Container = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	padding: 7px 0 7px 12px;
`;

const Title = styled.div`
	font-size: 10px;
	text-transform: uppercase;
	margin-right: 7px;
	color: ${ColorUtility.secondaryGray().string()};
`;

const Seperator = styled.div`
	width: 100%;
	height: 1px;
	background: ${ColorUtility.secondaryGray().string()};
`;

export default class MenuSeperator extends React.Component {
	static displayName = 'MenuSeperator';

	static propTypes = {
		title: PropTypes.string,
	};

	render() {
		const { title } = this.props;

		return (
			<Container>
				{title && <Title>{title}</Title>}
				<Seperator />
			</Container>
		);
	}
}
