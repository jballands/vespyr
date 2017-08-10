//
//	jballands/vespyr
//	BoldButton.jsx
//	
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Color from 'color';

import ColorUtility from './utils/ColorUtility';
import DefaultFont from './utils/DefaultFontStyles';

function calculateAccentColor(accentColor, disabled) {
	if (disabled) {
		if (!accentColor) {
			return ColorUtility.white();
		}
		return ColorUtility.disabledGray();
	}
	if (accentColor) {
		return Color(accentColor);
	}
	return ColorUtility.white();
}

function calculateSideAccentColor(_backgroundColor, disabled) {
	if (disabled) {
		return ColorUtility.disabledGray();
	}

	const luminosity = _backgroundColor.luminosity();

	if (luminosity > 0.91) {
		return _backgroundColor.darken(0.10);
	}
	else if (luminosity <= 0.91 && luminosity > 0.74) {
		return _backgroundColor.darken(0.30);
	}
	else {
		return _backgroundColor.darken(0.25);
	}
}

function calculateFontColor(accentColor, _backgroundColor, disabled) {
	if (disabled) {
		if (!accentColor) {
			return ColorUtility.disabledGray();
		}
		return ColorUtility.white();
	}

	const luminosity = _backgroundColor.luminosity();

	if (luminosity > 0.75) {
		return ColorUtility.black();
	}
	return ColorUtility.white();
}

function getStyles(props) {
	const { accentColor, disabled } = props;

	const _backgroundColor = calculateAccentColor(accentColor, disabled);
	const _sideColor = calculateSideAccentColor(_backgroundColor, disabled);
	const _fontColor = calculateFontColor(accentColor, _backgroundColor, disabled);

	return {
		container: {
			display: 'block',
			position: 'relative',
			margin: '5px',
			cursor: disabled ? 'not-allowed' : 'pointer',
			userSelect: 'none',
		},
		base: {
			padding: '8px',
			position: 'absolute',
			display: 'flex',
			flexFlow: 'row nowrap',
			justifyContent: 'center',
			background: _backgroundColor,
			border: `2px solid ${_sideColor}`,
			borderRadius: '5px',
			fontSize: '12px',
			textTransform: 'uppercase',
			transition: 'all ease 200ms',
			color: _fontColor,
		},
		top: {
			':hover': {
				border: `2px solid ${_sideColor}`,
				transform: 'translate(0, -5px)',
			},
			':active': {
				border: `2px solid ${_sideColor}`,
				transform: 'translate(0, 0)',
			},
		},
		side: {
			display: 'inline-block',
			position: 'static',
			background: _sideColor,
			left: 0,
			top: 0,
			zIndex: -1,
		},
	};
}

@Radium
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
		disabled: false,
	};

	invokeOnClick = () => {
		const { disabled, onClick } = this.props;
		if (onClick && !disabled) {
			this.props.onClick();
		}
	};

	renderShade = styles => (
		<div style={[DefaultFont, styles.base, styles.side]}>
			{this.props.children}
		</div>
	);

	render() {
		const styles = getStyles(this.props);
		const { children, className, disabled, style } = this.props;

		return (
			<div style={[styles.container, style]} onClick={this.invokeOnClick} className={className}>
				<div style={[DefaultFont, styles.base, disabled ? null : styles.top]} key="vespyrButtonTop">
					{children}
				</div>
				{this.renderShade(styles)}
			</div>
		);
	}

}
