//
//	jballands/vespyr
//	DropdownList.jsx
//	
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import ColorUtility from './utils/ColorUtility';
import DefaultFont from './utils/DefaultFontStyles';

function getStyles(props) {
	return {
		base: {
			display: 'inline-flex',
			flexFlow: 'row nowrap',
			alignItems: 'center',
		},
		baseDisabled: {
			':hover': {
				cursor: 'not-allowed',
			},
		},
	}
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

	renderIcon = styles => {
		return (
			<div>Hello</div>
		);
	};

	renderInputContainer = styles => {
		return (
			<div>world!</div>
		);
	};

	render() {
		const styles = getStyles(this.props);
		const { className, disabled, style } = this.props;

		return (
			<div style={[DefaultFont, styles.base, disabled ? styles.baseDisabled : null, style]}
				className={className}
				onClick={this.focus}>
				{this.renderIcon(styles)}
				{this.renderInputContainer(styles)}
			</div>
		);
	}

}