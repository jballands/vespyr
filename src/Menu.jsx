//
//	jballands/vespyr
//	Menu.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ColorUtility, { makeColor } from './utils/ColorUtility';

const Container = styled.div`
	padding: 5px 0 5px 0;
	background: ${props =>
		props.darkMode
			? ColorUtility.dark().string()
			: ColorUtility.white().string()};
	box-shadow: 0 3px 5px 0
		${ColorUtility.black()
			.alpha(0.25)
			.string()};
	width: calc(100% - 20px);
	z-index: 1;

	&:hover {
		cursor: auto;
	}
`;

const Title = styled.div`
	font-size: 10px;
	text-transform: uppercase;
	margin-top: 5px;
	margin-bottom: 3px;
	margin-left: 12px;
	transition: color 250ms ease;
	color: ${props => props.accentColor.string()};
`;

export default class Menu extends React.Component {
	static displayName = 'Menu';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		className: PropTypes.string,
		color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		children: PropTypes.node,
		darkMode: PropTypes.bool,
		style: PropTypes.object,
		title: PropTypes.string,
	};

	static defaultProps = {
		accentColor: ColorUtility.blue(),
		color: ColorUtility.black(),
		darkMode: false,
	};

	renderContent = () => {
		const { accentColor, children, color, darkMode, title } = this.props;

		const cloned = React.Children.map(children, child =>
			React.cloneElement(child, {
				color,
				darkMode,
			}),
		);

		return (
			<div>
				<Title accentColor={makeColor(accentColor)}>{title}</Title>
				<div>{cloned}</div>
			</div>
		);
	};

	render() {
		const { className, darkMode, style } = this.props;

		return (
			<Container style={style} className={className} darkMode={darkMode}>
				{this.renderContent()}
			</Container>
		);
	}
}
