//
//	jballands/vespyr
//	DropdownMenu.jsx
//	
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import VespyrInput from './VespyrInput';
import AnimatedMenu from './AnimatedMenu';
import CaretDown from './svg/CaretDown';

function getStyles(props) {
	return {
		base: {
			display: 'inline-flex',
			flexFlow: 'column nowrap',
			alignItems: 'flex-start',
			border: 0,
			outline: 'none',
		},
		input: {
			display: 'flex',
			flexFlow: 'row nowrap',
			alignItems: 'flex-end',
		},
		cursorPointer: {
			':hover': {
				cursor: 'pointer',
			},
		},
		caret: {
			paddingBottom: '10px',
			marginLeft: '7px',
		},
		selection: {
			padding: '4px 0',
			fontSize: '16px',
		},
	};
}

@Radium
export default class DropdownMenu extends React.Component {

	static displayName = 'DropdownMenu';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		className: PropTypes.string,
		color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		disabled: PropTypes.bool,
		hint: PropTypes.string,
		hintColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		icon: PropTypes.node,
		invalid: PropTypes.bool,
		invalidColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		onUpdate: PropTypes.func,
		value: PropTypes.string,
		style: PropTypes.object,
		title: PropTypes.string,
	};

	state = {
		focused: false,
	};

	addFocus = () => {
		this.setState({ focused: true });
	};

	removeFocus = () => {
		this.setState({ focused: false });
	};

	isFocused = () => {
		return this.state.focused;
	};

	renderInput = styles => {
		const { accentColor, color, disabled, icon, invalid, invalidColor, title } = this.props;
		const vespyrInputProps = {
			accentColor,
			color,
			disabled,
			icon,
			invalid,
			invalidColor,
			title,
		};

		return (
			<div style={[styles.input, styles.cursorPointer]}>
				<VespyrInput focus={this.addFocus} isFocused={this.isFocused} {...vespyrInputProps} style={styles.cursorPointer}>
					{this.renderSelection(styles)}
				</VespyrInput>
				<CaretDown style={styles.caret} />
			</div>
		);
	};

	renderSelection = styles => {
		const { value } = this.props;

		return (
			<div style={styles.selection}>
				{value}
			</div>
		)
	};

	renderMenu = () => {
		const { title } = this.props;

		return (
			<AnimatedMenu title={title} show={this.state.focused}>
				Foobar
			</AnimatedMenu>
		);
	};

	render() {
		const { className, style } = this.props;

		const styles = getStyles(this.props);

		return (
			<div className={className} style={[styles.base, style]} tabIndex="0" onFocus={this.addFocus} onBlur={this.removeFocus}>
				{this.renderInput(styles)}
				{this.renderMenu(styles)}
			</div>
		);
	}

}