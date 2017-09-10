/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import _pull from 'lodash.pull';
import VespyrList from '../src/VespyrList';
import CheckboxItem from '../src/CheckboxItem';

class StatefulCheckboxes extends React.Component {
	state = {
		selected: this.props.startSelections,
	};

	handleOnOptionClick = id => {
		if (this.state.selected.indexOf(id) > -1) {
			console.log('need to remove');
			this.setState({
				selected: _pull(this.state.selected, id),
			});
		} else {
			console.log('need to add');
			this.setState({
				selected: this.state.selected.concat(id),
			});
		}

		action(`CheckmarkGroup -> ${id}`)();
	};

	render() {
		console.log(this.state);
		return (
			<VespyrList
				selected={this.state.selected}
				onOptionClick={this.handleOnOptionClick}
				{...this.props}>
				{this.props.items.map(item => (
					<CheckboxItem key={item.id} id={item.id}>
						{item.children}
					</CheckboxItem>
				))}
			</VespyrList>
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
	.add('as default', () => {
		const items = [
			{
				id: 'brutalmoose',
				children: 'Brutalmoose',
			},
			{
				id: 'lucahjin',
				children: 'Lucahjin',
			},
			{
				id: 'squirrel',
				children: 'Squirrel',
			},
			{
				id: 'lgr',
				children: 'LGR',
			},
		];

		return (
			<StatefulCheckboxes
				items={items}
				startSelections={['brutalmoose']}
			/>
		);
	});
