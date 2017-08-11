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
			flexFlow: 'row nowrap',
			alignItems: 'flex-end',
			border: 0,
			outline: 'none',
			position: 'relative',
		},
		input: {
			display: 'flex',
			flexFlow: 'column nowrap',
			alignItems: 'flex-start',
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
		menu: {
			position: 'absolute',
			top: 'calc(100% - 14px)',
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
		children: PropTypes.node,
		className: PropTypes.string,
		color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		disabled: PropTypes.bool,
		hint: PropTypes.string,
		hintColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		icon: PropTypes.node,
		invalid: PropTypes.bool,
		invalidColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		onUpdate: PropTypes.func,
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

		//	An optional function that takes two arguments: the old value and the new value,
		//	and returns true if DropdownMenu should lose focus, or false if not. If this prop
		//	is undefined, DropdownMenu will always lose focus when any props are provided.
		shouldLoseFocus: PropTypes.func,

		style: PropTypes.object,
		title: PropTypes.string,
	};

	state = {
		focused: false,
	};

	componentWillReceiveProps(newProps) {
		const { value, shouldLoseFocus } = this.props;
		if (!shouldLoseFocus || shouldLoseFocus(value, newProps.value)) {
			this.removeFocus();
		}
	}

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
				{this.renderMenu(styles)}
			</div>
		);
	};

	renderSelection = styles => {
		const { value } = this.props;

		return (
			<div style={styles.selection}>
				{value}
			</div>
		);
	};

	renderMenu = styles => {
		const { children, title } = this.props;

		return (
			<AnimatedMenu style={styles.menu} title={title} show={this.state.focused}>
				{children}
			</AnimatedMenu>
		);
	};

	render() {
		const { className, style } = this.props;

		const styles = getStyles(this.props);

		return (
			<div className={className} style={[styles.base, style]} tabIndex="0" onFocus={this.addFocus} onBlur={this.removeFocus}>
				{this.renderInput(styles)}
				<CaretDown style={styles.caret} />
			</div>
		);
	}

}