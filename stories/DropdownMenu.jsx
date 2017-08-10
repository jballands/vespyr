/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';
import DropdownMenu from '../src/DropdownMenu';
import MenuItem from '../src/MenuItem';

class StatefulDropdownMenu extends React.Component {

	state ={
		selectedKey: this.props.defaultKey,
	};

	respond = key => {
		this.setState({ selectedKey: key });
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

		return (
			<DropdownMenu {...this.props} value={items[this.state.selectedKey].displayName}>
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
			'brutalmoose': {
				displayName: 'Brutalmoose',
			},
			'lucahjin': {
				displayName: 'Lucahjin',
			},
			'squirrel': {
				displayName: 'Squirrel',
			},
			'lgr': {
				displayName: 'LGR',
			},
		};
		return (
			<StatefulDropdownMenu
				title="Creators"
				items={items}
				defaultKey={'brutalmoose'}
			/>
		);
	})
	.add('with shouldLoseFocus', () => {
		const items = {
			'brutalmoose': {
				displayName: 'Brutalmoose',
			},
			'lucahjin': {
				displayName: 'Lucahjin',
			},
			'squirrel': {
				displayName: 'Squirrel',
			},
			'lgr': {
				displayName: 'LGR',
			},
		};

		const shouldLoseFocus = (oldValue, newValue) => oldValue !== newValue;

		return (
			<StatefulDropdownMenu
				title="Creators"
				items={items}
				defaultKey={'brutalmoose'}
				shouldLoseFocus={shouldLoseFocus}
			/>
		);
	})
	.add('with arbitrary children', () => {
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