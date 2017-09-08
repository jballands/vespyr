/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import VespyrList from '../src/VespyrList';
import RadioItem from '../src/RadioItem';

class StatefulRadioButtons extends React.Component {
	state = {
		selected: this.props.startSelection,
	};

	handleOnOptionClick = id => {
		this.setState({
			selected: [id],
		});
	};

	render() {
		return (
			<VespyrList
				selected={this.state.selected}
				onOptionClick={this.handleOnOptionClick}
				{...this.props}>
				{this.props.items.map(item => (
					<RadioItem key={item.id} id={item.id}>
						{item.children}
					</RadioItem>
				))}
			</VespyrList>
		);
	}
}

storiesOf('RadioGroup', module)
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
				id: 'flux',
				children: 'Flux',
			},
		];

		return (
			<StatefulRadioButtons items={items} startSelection="brutalmoose" />
		);
	})
	.add('with title', () => {
		const items = [
			{
				id: 'breckenridge',
				children: 'Breckenridge',
			},
			{
				id: 'keystone',
				children: 'Keystone',
			},
			{
				id: 'heavenly',
				children: 'Heavenly',
			},
			{
				id: 'vail',
				children: 'Vail',
			},
			{
				id: 'abasin',
				children: 'A-Basin',
			},
		];

		return (
			<StatefulRadioButtons
				title={'Ski Areas'}
				items={items}
				startSelection="keystone"
			/>
		);
	})
	.add('with color', () => {
		const items = [
			{
				id: 'breckenridge',
				children: 'Breckenridge',
			},
			{
				id: 'keystone',
				children: 'Keystone',
			},
			{
				id: 'heavenly',
				children: 'Heavenly',
			},
			{
				id: 'vail',
				children: 'Vail',
			},
			{
				id: 'abasin',
				children: 'A-Basin',
			},
		];

		return (
			<StatefulRadioButtons
				color="#FFA100"
				items={items}
				startSelection="keystone"
			/>
		);
	})
	.add('with accentColor', () => {
		const items = [
			{
				id: 'breckenridge',
				children: 'Breckenridge',
			},
			{
				id: 'keystone',
				children: 'Keystone',
			},
			{
				id: 'heavenly',
				children: 'Heavenly',
			},
			{
				id: 'vail',
				children: 'Vail',
			},
			{
				id: 'abasin',
				children: 'A-Basin',
			},
		];

		return (
			<StatefulRadioButtons
				accentColor="#F71CFF"
				items={items}
				startSelection="keystone"
			/>
		);
	})
	.add('with disabled', () => {
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
				id: 'flux',
				children: 'Flux',
			},
		];

		return (
			<StatefulRadioButtons
				disabled
				items={items}
				startSelection="brutalmoose"
			/>
		);
	});
