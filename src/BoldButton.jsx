//
//	jballands/vespyr
//	BoldButton.jsx
//	
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';
import styled, { ThemeProvider } from 'styled-components';

import ColorUtility from './utils/ColorUtility';
import DefaultFont from './utils/DefaultFontStyles';

function calculateAccentColor(disabled, accentColor) {
	if (disabled) {
		if (accentColor.rgbNumber() !== ColorUtility.white().rgbNumber()) {
			return ColorUtility.disabledGray().string();
		}
		return ColorUtility.white().string();
	}

	return accentColor.string();
}

function calculateSideAccentColor(disabled, accentColor) {
	if (disabled) {
		return ColorUtility.disabledGray().string();
	}

	const luminosity = accentColor.luminosity();

	if (luminosity > 0.91) {
		return accentColor.darken(0.10).string();
	}
	else if (luminosity <= 0.91 && luminosity > 0.74) {
		return accentColor.darken(0.30).string();
	}
	else {
		return accentColor.darken(0.25).string();
	}
}

function calculateFontColor(disabled, accentColor) {
	if (disabled) {
		if (accentColor.rgbNumber() !== ColorUtility.white().rgbNumber()) {
			return ColorUtility.white().string();
		}
		return ColorUtility.disabledGray().string();
	}

	const luminosity = accentColor.luminosity();

	if (luminosity > 0.75) {
		return ColorUtility.black().string();
	}
	return ColorUtility.white().string();
}

const Container = styled.div`
	display: block;
	position: relative;
	margin: 5px;
	cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
	userSelect: none;
`;

const getHoverStyles = props => {
	if (!props.disabled) {
		return `
			border: 2px solid ${calculateSideAccentColor(props.disabled, props.accentColor)};
			transform: translate(0, -5px);
		`;
	}
};
const getActiveStyles = props => {
	if (!props.disabled) {
		return `
			border: 2px solid ${calculateSideAccentColor(props.disabled, props.accentColor)};
			transform: translate(0, 0);
		`;
	}
};
const Base = styled.div`
	padding: 8px;
	position: absolute;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	background: ${props => calculateAccentColor(props.disabled, props.accentColor)};
	border: 2px solid ${props => calculateSideAccentColor(props.disabled, props.accentColor)};
	border-radius: 5px;
	font-size: 12px;
	text-transform: uppercase;
	transition: all ease 200ms;
	color: ${props => calculateFontColor(props.disabled, props.accentColor)};
	font-family: ${props => props.theme.fontFamily};
	letter-spacing: ${props => props.theme.letterSpacing};
`;

const Top = Base.extend`
	&:hover { ${props => getHoverStyles(props)} }
	&:active { ${props => getActiveStyles(props)} }
`;

const Side = Base.extend`
	display: inline-block;
	position: static;
	background: ${props => calculateSideAccentColor(props.disabled, props.accentColor)};
	left: 0;
	top: 0;
	zIndex: -1;
`;

export default class BoldButton extends React.Component {

	static displayName = 'BoldButton';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		children: PropTypes.node,
		className: PropTypes.string,
		disabled: PropTypes.bool,
		onClick: PropTypes.func,
		style: PropTypes.object,
	};

	static defaultProps = {
		accentColor: ColorUtility.white(),
		disabled: false,
	};

	invokeOnClick = () => {
		const { disabled, onClick } = this.props;
		if (onClick && !disabled) {
			this.props.onClick();
		}
	};

	renderShade = () => {
		const { accentColor, disabled } = this.props;

		return (
			<Side accentColor={Color(accentColor)} disabled={disabled}>
				{this.props.children}
			</Side>
		);
	};

	render() {
		const { accentColor, children, className, disabled, style } = this.props;

		return (
			<ThemeProvider theme={DefaultFont}>
				<Container disabled={disabled} onClick={this.invokeOnClick} style={style} className={className}>
					<Top accentColor={Color(accentColor)} disabled={disabled} key="vespyrButtonTop">
						{children}
					</Top>
					{this.renderShade()}
				</Container>
			</ThemeProvider>
		);
	}

}
