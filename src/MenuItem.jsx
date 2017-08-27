//
//	jballands/vespyr
//	MenuItem.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import ColorUtility from './utils/ColorUtility';
import DefaultFont from './utils/DefaultFontStyles';

const Container = styled.div`
	padding: 7px 10px 7px 12px;
	font-family: ${props => props.theme.fontFamily};
	letter-spacing: ${props => props.theme.letterSpacing};

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
		seperator: PropTypes.bool,
		style: PropTypes.object,
	};

	static defaultProps = {
		seperator: false,
	};

	handleClick = () => {
		const { id, onClick } = this.props;
		onClick && onClick(id);
	};

	render() {
		const { children, style } = this.props;

		return (
			<ThemeProvider theme={DefaultFont}>
				<Container style={style} onClick={this.handleClick}>
					{children}
				</Container>
			</ThemeProvider>
		);
	}

}