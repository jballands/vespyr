//
//	jballands/vespyr
//	MenuSeperator.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ColorUtility, { makeColor } from './utils/ColorUtility';

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
	color: ${props => props.color.string()};
`;

const Seperator = styled.div`
	flex: 1 0;
	height: 1px;
	background: ${props => props.color.string()};
`;

export default class MenuSeperator extends React.Component {
	static displayName = 'MenuSeperator';

	static propTypes = {
		color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		title: PropTypes.string,
	};

	static defaultProps = {
		color: ColorUtility.black(),
	};

	render() {
		const { color, title } = this.props;

		return (
			<Container>
				{title && <Title color={makeColor(color)}>{title}</Title>}
				<Seperator color={makeColor(color)} />
			</Container>
		);
	}
}
