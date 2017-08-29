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
	background: ${ColorUtility.white().string()};
	box-shadow: 0 3px 5px 0 ${ColorUtility.black().alpha(0.25).string()};
	width: calc(100% - 20px);
	z-index: 1;
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
		children: PropTypes.node,
		style: PropTypes.object,
		title: PropTypes.string,
	};

	static defaultProps = {
		accentColor: ColorUtility.blue(),
	}

	renderContent = () => {
		const { accentColor, children, title } = this.props;

		return (
			<div>
				<Title accentColor={makeColor(accentColor)}>
					{title}
				</Title>
				<div>
					{children}
				</div>
			</div>
		);
	};

	render() {
		const { className, style } = this.props;

		return (
			<Container style={style} className={className}>
				{this.renderContent()}
			</Container>
		);
	}

}