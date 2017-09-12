//
//	jballands/vespyr
//	RadioGroup.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import VespyrList from './VespyrList';

export default class RadioGroup extends React.Component {
	static displayName = 'RadioGroup';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		className: PropTypes.string,
		children: PropTypes.node,
		color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		defaultSelection: PropTypes.string.isRequired,
		disabled: PropTypes.bool,
		onOptionClick: PropTypes.func,
		style: PropTypes.object,
		title: PropTypes.string,
	};

	state = {
		selected: [this.props.defaultSelection],
	};

	handleOnOptionClick = id => {
		const { onOptionClick } = this.props;

		this.setState({
			selected: [id],
		});

		onOptionClick && onOptionClick(id);
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
