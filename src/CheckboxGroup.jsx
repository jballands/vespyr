//
//	jballands/vespyr
//	CheckboxGroup.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import VespyrList from './VespyrList';

export default class CheckboxGroup extends React.Component {
	static displayName = 'CheckboxGroup';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		className: PropTypes.string,
		children: PropTypes.node,
		color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		defaultSelections: PropTypes.arrayOf(PropTypes.string).isRequired,
		disabled: PropTypes.bool,
		onOptionClick: PropTypes.func,
		style: PropTypes.object,
		title: PropTypes.string,
	};

	state = {
		selected: this.props.defaultSelections,
	};

	handleOnOptionClick = id => {
		const { onOptionClick } = this.props;
		let newSelected;

		if (this.state.selected.indexOf(id) > -1) {
			newSelected = this.state.selected.filter(e => e !== id);
		} else {
			newSelected = this.state.selected.concat(id);
		}

		this.setState({
			selected: newSelected,
		});

		onOptionClick && onOptionClick(newSelected);
	};

	render() {
		const {
			accentColor,
			children,
			className,
			color,
			disabled,
			style,
			title,
		} = this.props;
		const { selected } = this.state;

		const vespyrListProps = {
			accentColor,
			className,
			color,
			disabled,
			style,
			title,
			selected,
			onOptionClick: this.handleOnOptionClick,
		};

		return <VespyrList {...vespyrListProps}>{children}</VespyrList>;
	}
}
