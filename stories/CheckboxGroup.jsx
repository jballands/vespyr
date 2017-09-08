/* eslint-disable react/jsx-no-bind */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CheckboxItem from '../src/CheckboxItem';

class StatefulCheckboxItem extends React.Component {
	state = {
		selected: false,
	};

	render() {
		return (
			<CheckboxItem
				selected={this.state.selected}
				onClick={() =>
					this.setState({ selected: !this.state.selected })}>
				{this.props.children}
			</CheckboxItem>
		);
	}
}

storiesOf('CheckboxGroup', module)
	.addDecorator(story => (
		<div
			style={{
				margin: '20px 5px',
				fontFamily:
					'"Roboto", system, -apple-system, BlinkMacSystemFont',
				letterSpacing: '1.0px',
			}}>
			{story()}
		</div>
	))
	.add('as default', () => <StatefulCheckboxItem>Rawr</StatefulCheckboxItem>);
