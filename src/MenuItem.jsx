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

function getHoverColor(props) {
	if (props.disabled) {
		return 'transparent';
	} else if (props.darkMode) {
		return ColorUtility.darkHoverGray().string();
	}
	return ColorUtility.hoverGray().string();
}

const Container = styled.div`
	padding: 7px 10px 7px 12px;
	color: ${props =>
		props.disabled
			? ColorUtility.disabledGray().string()
			: props.color.string()};

	&:hover {
		background: ${props => getHoverColor(props)};
		cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
	}
`;

export default class MenuItem extends React.Component {
	static displayName = 'MenuItem';

	static propTypes = {
		children: PropTypes.node,
		color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		darkMode: PropTypes.bool,
		disabled: PropTypes.bool,
		id: PropTypes.string,
		onClick: PropTypes.func,
		seperator: PropTypes.bool,
		style: PropTypes.object,
	};

	static defaultProps = {
		color: ColorUtility.black(),
		darkMode: false,
		seperator: false,
	};

	handleClick = () => {
		const { id, disabled, onClick } = this.props;
		if (onClick && !disabled) {
			onClick(id);
		}
	};

	render() {
		const { children, color, darkMode, disabled, style } = this.props;

		return (
			<Container
				color={makeColor(color)}
				darkMode={darkMode}
				style={style}
				onClick={this.handleClick}
				disabled={disabled}>
				{children}
			</Container>
		);
	}
}
