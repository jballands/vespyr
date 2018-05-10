//
//	jballands/vespyr
//	MenuItem.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Checkmark from './svg/Checkmark';
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
	display: flex;
	flex-flow: row wrap;
	padding: 7px 10px 7px 12px;
	align-items: center;
	color: ${props =>
		props.disabled
			? ColorUtility.disabledGray().string()
			: props.selected
				? props.accentColor.string()
				: props.color.string()};

	&:hover {
		background: ${props => getHoverColor(props)};
		cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
	}
`;

const StyledCheckmark = styled(Checkmark)`
	margin-right: 7px;
	* {
		fill: ${props => props.accentColor.string()};
	}
`;

export default class MenuItem extends React.Component {
	static displayName = 'MenuItem';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		children: PropTypes.node,
		color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		darkMode: PropTypes.bool,
		disabled: PropTypes.bool,
		id: PropTypes.string,
		onClick: PropTypes.func,
		selected: PropTypes.bool,
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

	renderCheckmark = () => {};

	render() {
		const {
			accentColor,
			children,
			color,
			darkMode,
			disabled,
			selected,
			style,
		} = this.props;

		return (
			<Container
				accentColor={makeColor(accentColor)}
				color={makeColor(color)}
				darkMode={darkMode}
				style={style}
				onClick={this.handleClick}
				disabled={disabled}
				selected={selected}>
				{selected && <StyledCheckmark accentColor={accentColor} />}{' '}
				{children}
			</Container>
		);
	}
}
