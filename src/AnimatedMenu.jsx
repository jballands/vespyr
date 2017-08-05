//
//	jballands/vespyr
//	AnimatedMenu.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { spring, TransitionMotion } from 'react-motion';

import Menu from './Menu';

function getStyles(props, params) {
	return {
		menu: {
			transform: `translateY(${params.y})`,
		},
	};
}

@Radium
export default class AnimatedMenu extends React.Component {

	static displayName = 'AnimatedMenu';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		children: PropTypes.node,
		show: PropTypes.bool,
		title: PropTypes.string,
	};

	static defaultProps = {
		show: false,
	};

	willEnter = () => {
		return {
			y: -5,
		};
	};

	willLeave = () => {
		return {
			y: spring(-5),
		};
	};

	renderMenu = values => {
		const { accentColor, children, title } = this.props;

		const menuProps = {
			accentColor,
			children,
			title,
		};

		return (
			<div>
				{values.map(config => {
					const styles = getStyles(this.props, { y: config.style.y });
					return (
						<Menu style={styles.menu} key={config.key} {...menuProps} />
					);
				})}
			</div>
		);
	};

	render() {
		const { show } = this.props;

		const motionStyles = show ? [{
			key: 'vespyr-menu',
			style: {
				y: spring(0),
			},
		}] : [];

		return (
			<TransitionMotion
				willEnter={this.willEnter}
				willLeave={this.willLeave}
				styles={motionStyles}>
				{ values => this.renderMenu(values)}
			</TransitionMotion>
		);
	}

}