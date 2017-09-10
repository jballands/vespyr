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
		console.log(id);
		console.log(this.state);
		console.log('----');

		this.setState({
			selected: [id],
		});
		action(`RadioGroup -> ${id}`)();
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
				id: 'squirrel',
				children: 'Squirrel',
			},
			{
				id: 'lgr',
				children: 'LGR',
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
				title="Ski Areas"
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
				id: 'squirrel',
				children: 'Squirrel',
			},
			{
				id: 'lgr',
				children: 'LGR',
			},
		];

		return (
			<StatefulRadioButtons
				disabled
				items={items}
				title="Creators"
				startSelection="brutalmoose"
			/>
		);
	})
	.add('as complex RadioGroup', () => {
		const items = [
			{
				id: 'brutalmoose',
				children: (
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
						}}>
						<img
							style={{
								width: 50,
								borderRadius: '50%',
								marginRight: 15,
							}}
							src="https://yt3.ggpht.com/-9V4pafhXtos/AAAAAAAAAAI/AAAAAAAAAAA/3GVxGvlr5R0/s100-c-k-no-mo-rj-c0xffffff/photo.jpg"
						/>
						Brutalmoose
					</div>
				),
			},
			{
				id: 'lucahjin',
				children: (
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
						}}>
						<img
							style={{
								width: 50,
								borderRadius: '50%',
								marginRight: 15,
							}}
							src="https://yt3.ggpht.com/-l2kxhA1OASo/AAAAAAAAAAI/AAAAAAAAAAA/xk1yr1qNXSw/s100-c-k-no-mo-rj-c0xffffff/photo.jpg"
						/>
						Lucahjin
					</div>
				),
			},
			{
				id: 'squirrel',
				children: (
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
						}}>
						<img
							style={{
								width: 50,
								borderRadius: '50%',
								marginRight: 15,
							}}
							src="https://yt3.ggpht.com/-nLMVlrExeAQ/AAAAAAAAAAI/AAAAAAAAAAA/zbauonBmKh0/s100-c-k-no-mo-rj-c0xffffff/photo.jpg"
						/>
						Squirrel
					</div>
				),
			},
			{
				id: 'lgr',
				children: (
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
						}}>
						<img
							style={{
								width: 50,
								borderRadius: '50%',
								marginRight: 15,
							}}
							src="https://yt3.ggpht.com/-CsHahRaj2wE/AAAAAAAAAAI/AAAAAAAAAAA/3PP6XFMR-wk/s100-c-k-no-mo-rj-c0xffffff/photo.jpg"
						/>
						LGR
					</div>
				),
			},
		];

		return (
			<StatefulRadioButtons
				items={items}
				startSelection="brutalmoose"
				title="Creators"
			/>
		);
	});
