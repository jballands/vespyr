//
//	jballands/vespyr
//	DropdownList.jsx
//	
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import VespyrInput from './VespyrInput';
import CaretDown from './svg/CaretDown';

function getStyles(props) {
	return {
		base: {
			display: 'inline-flex',
			flexFlow: 'row nowrap',
			alignItems: 'center',
		},
		caret: {
			marginLeft: '7px',
		},
	};
}

@Radium
export default class DropdownList extends React.Component {

	static displayName = 'DropdownList';

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

	hasFocus = () => {
		return this.state.focused;
	};

	renderSelection = styles => {
		return (
			<div>Hello world!</div>
		);
	};

	render() {
		const { accentColor, className, color, disabled, icon, invalid,
			invalidColor, style, title } = this.props;

		const styles = getStyles(this.props);
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
			<div className={className} style={[styles.base, style]}>
				<VespyrInput focus={this.addFocus} hasFocus={this.hasFocus} {...vespyrInputProps}>
					{() => this.renderSelection(styles)}
				</VespyrInput>
				<CaretDown style={styles.caret} />
			</div>
		);
	}

}