//
//	jballands/vespyr
//	TextInput.js
//	
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Radium, { Style } from 'radium';
import Color from 'color';

import ColorUtility from './utils/ColorUtility';
import DefaultFont from './utils/DefaultFontStyles';

function getStyles(props) {
	const { accentColor, color } = props;

	return {
		base: {
			display: 'flex',
			flexFlow: 'row nowrap',
			alignItems: 'center',
		},
		input: {
			border: 0,
			outline: 'none',
			width: '250px',
			padding: '5px 0',
			fontSize: '16px',
			':focus': {},
		},
		inputContainer: {
			display: 'flex',
			flexFlow: 'column nowrap',
			justifyContent: 'flex-start',
		},
		underlineDefault: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			display: 'block',
			content: '',
			borderBottom: `solid 1px ${color}`,
		},
		underlineFocus: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			display: 'block',
			content: '',
			borderBottom: `solid 2px ${accentColor}`,
			transform: 'scaleX(0)',
			transition: 'transform 250ms ease',
		},
		underlineFocusShow: {
			transform: 'scaleX(1)',
		},
		underlines: {
			position: 'relative',
		},
	};
}

@Radium
export default class TextInput extends React.Component {

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		className: PropTypes.string,
		color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		hint: PropTypes.string,
		icon: PropTypes.node,
		invalid: PropTypes.bool,
		invalidColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		onUpdate: PropTypes.func,
		value: PropTypes.string,
		style: PropTypes.object,
		title: PropTypes.string,
		type: PropTypes.string,
	};

	static defaultProps = {
		accentColor: ColorUtility.blue(),
		color: ColorUtility.black(),
		invalid: false,
		invalidColor: ColorUtility.red(),
		type: 'text',
	};

	renderIcon = styles => {
		const { icon } = this.props;
		if (!icon) {
			return null;
		}
		return (
			<div>
				ico
			</div>
		);
	};

	renderTextInput = styles => {
		const { hint, type } = this.props;
		const isFocused = Radium.getState(this.state, 'VespyrTextInput', ':focus');

		return (
			<div style={styles.inputContainer}>
				<Style rules={{
					'input::placeholder': {
						fontStyle: 'italic',
						color: ColorUtility.hintGray(),
					},
				}} />
				<input type={type}
					key='VespyrTextInput'
					style={styles.input}
					placeholder={hint}
				/>
				<div style={styles.underlines}>
					<div style={styles.underlineDefault} />
					<div style={[styles.underlineFocus, isFocused ? styles.underlineFocusShow : null]} />
				</div>
			</div>
		);
	};

	render() {
		const styles = getStyles(this.props);
		const { className, style } = this.props;

		return (
			<div style={[DefaultFont, styles.base, style]} className={className}>
				{this.renderIcon(styles)}
				{this.renderTextInput(styles)}
			</div>
		);
	}

}