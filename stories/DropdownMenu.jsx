/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DropdownMenu from '../src/DropdownMenu';
import MenuItem from '../src/MenuItem';

class StatefulDropdownMenu extends React.Component {

	state ={
		selectedKey: this.props.defaultKey,
	};

	respond = key => {
		this.setState({ selectedKey: key });
		action(`DropdownMenu -> ${key}: ${this.props.items[key].displayName}`)();
	};

	renderNormal = () => {
		const { items } = this.props;
		const keys = Object.keys(items);

		return (
			<DropdownMenu {...this.props} value={items[this.state.selectedKey].displayName}>
				{keys.map(k => (
					<MenuItem key={k} id={k} onClick={this.respond}>{items[k].displayName}</MenuItem>
				))}
			</DropdownMenu>
		);
	};

	renderWithAvatars = () => {
		const { items } = this.props;
		const keys = Object.keys(items);

		const styles = {
			wrapper: {
				display: 'flex',
				flexFlow: 'row nowrap',
				alignItems: 'center',
			},
			img: {
				marginRight: '10px',
				borderRadius: '50%',
				width: '40px',
				height: '40px',
			},
		};

		const value = (
			<div style={styles.wrapper}>
				<img src={items[this.state.selectedKey].img} style={styles.img} />
				<span>{items[this.state.selectedKey].displayName}</span>
			</div>
		);

		return (
			<DropdownMenu {...this.props} value={value}>
				{keys.map(k => (
					<MenuItem key={k} id={k} onClick={this.respond} style={styles.wrapper}>
						<img src={items[k].img} style={styles.img} />
						<span>{items[k].displayName}</span>
					</MenuItem>
				))}
			</DropdownMenu>
		);
	};

	render() {
		const { type } = this.props;

		if (type === 'avatars') {
			return this.renderWithAvatars();
		}
		return this.renderNormal();
	}
}

storiesOf('DropdownMenu', module)
	.addDecorator(story => (
		<div style={{ margin: '20px 10px' }}>
			{story()}
		</div>
	))
	.add('as default', () => {
		const items = {
			'breckenridge': {
				displayName: 'Breckenridge',
			},
			'keystone': {
				displayName: 'Keystone',
			},
			'heavenly': {
				displayName: 'Heavenly',
			},
			'vail': {
				displayName: 'Vail',
			},
			'arapahoe-basin': {
				displayName: 'A-Basin',
			},
		};
		return (
			<StatefulDropdownMenu
				title="Ski Areas"
				items={items}
				defaultKey={'keystone'}
			/>
		);
	})
	.add('with shouldLoseFocus', () => {
		const items = {
			'nes': {
				displayName: 'Nintendo',
			},
			'snes': {
				displayName: 'Super Nintendo',
			},
			'n64': {
				displayName: 'Nintendo 64',
			},
			'gamecube': {
				displayName: 'Gamecube',
			},
			'wii': {
				displayName: 'Wii',
			},
			'wii-u': {
				displayName: 'Wii U',
			},
			'switch': {
				displayName: 'Switch',
			},
		};

		const shouldLoseFocus = (oldValue, newValue) => oldValue !== newValue;

		return (
			<StatefulDropdownMenu
				title="Choose the same item twice"
				items={items}
				defaultKey={'n64'}
				shouldLoseFocus={shouldLoseFocus}
			/>
		);
	})
	.add('with arbitrary children & value', () => {
		const items = {
			'brutalmoose': {
				displayName: 'Brutalmoose',
				img: 'https://yt3.ggpht.com/-9V4pafhXtos/AAAAAAAAAAI/AAAAAAAAAAA/3GVxGvlr5R0/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
			},
			'lucahjin': {
				displayName: 'Lucahjin',
				img: 'https://yt3.ggpht.com/-l2kxhA1OASo/AAAAAAAAAAI/AAAAAAAAAAA/xk1yr1qNXSw/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
			},
			'squirrel': {
				displayName: 'Squirrel',
				img: 'https://yt3.ggpht.com/-nLMVlrExeAQ/AAAAAAAAAAI/AAAAAAAAAAA/zbauonBmKh0/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
			},
			'lgr': {
				displayName: 'LGR',
				img: 'https://yt3.ggpht.com/-CsHahRaj2wE/AAAAAAAAAAI/AAAAAAAAAAA/3PP6XFMR-wk/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
			},
		};

		return (
			<StatefulDropdownMenu
				title="Creators"
				items={items}
				defaultKey={'brutalmoose'}
				type="avatars"
			/>
		);
	});