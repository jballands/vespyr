//
//	jballands/vespyr
//	FlatButton.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ColorUtility, { makeColor } from './utils/ColorUtility';

function getColor(props) {
	if (props.accentColor) {
		return props.accentColor.string();
	}
	return ColorUtility.black().string();
}

const Container = styled.div`
	display: inline-flex;
	flex-flow: column nowrap;
	align-items: center;
	padding: 5px;
	opacity: ${props => (props.disabled ? 0.25 : 1)};

	&:hover {
		cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
	}
`;

const Text = styled.div`
	font-size: 12px;
	user-select: none;
	color: ${props => getColor(props)};
`;

const Underline = styled.div`
	width: 100%;
	margin-top: 3px;
	display: block;
	content: '';
	border-bottom: solid 1px ${props => getColor(props)};
	transform: ${props =>
		props.isHovering && !props.disabled ? 'scaleX(1)' : 'scaleX(0)'};
	transition: transform 250ms ease;
`;

export default class FlatButton extends React.Component {
	static displayName = 'FlatButton';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		children: PropTypes.node,
		className: PropTypes.string,
		disabled: PropTypes.bool,
		onClick: PropTypes.func,
		style: PropTypes.object,
	};

	state = {
		isHovering: false,
	};

	mouseOver = () => {
		this.setState({ isHovering: true });
	};

	mouseOut = () => {
		this.setState({ isHovering: false });
	};

	invokeOnClick = () => {
		const { disabled, onClick } = this.props;
		if (onClick && !disabled) {
			this.props.onClick();
		}
	};

	render() {
		const {
			children,
			className,
			accentColor,
			disabled,
			style,
		} = this.props;

		return (
			<Container
				accentColor={makeColor(accentColor)}
				disabled={disabled}
				style={style}
				onClick={this.invokeOnClick}
				className={className}
				onMouseOver={this.mouseOver}
				onMouseOut={this.mouseOut}>
				<Text accentColor={makeColor(accentColor)} disabled={disabled}>
					{children}
				</Text>
				<Underline
					accentColor={makeColor(accentColor)}
					disabled={disabled}
					isHovering={this.state.isHovering}
				/>
			</Container>
		);
	}
}
