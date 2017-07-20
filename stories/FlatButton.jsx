/* eslint-disable react/jsx-no-bind */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FlatButton from '../src/FlatButton';

storiesOf('FlatButton', module)
	.addDecorator(story => (
		<div style={{ margin: '20px 10px' }}>
			{story()}
		</div>
	))
	.add('as default', () => (
		<FlatButton onClick={action('FlatButton')}>
			FlatButton
		</FlatButton>
	))
	.add('with accent color', () => (
		<div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
			<FlatButton accentColor={'#00B7FF'} onClick={action('FlatButton')}>
				#00B7FF
			</FlatButton>
			<FlatButton accentColor={'#49C617'} onClick={action('FlatButton')}>
				#49C617
			</FlatButton>
			<FlatButton accentColor={'#D53DFF'} onClick={action('FlatButton')}>
				#D53DFF
			</FlatButton>
		</div>
	))
	.add('with arbitrary children', () => (
		<div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
			<FlatButton onClick={action('FlatButton')}>
				<div style={{ display: 'flex', flexFlow: 'row nowrap', alignContent: 'center' }}>
					<img src='https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-x-mark-10.png' 
						style={{ width: 17, height: 17, marginRight: 5 }} />
					<span>Delete</span>
				</div>
			</FlatButton>
		</div>
	))
	.add('as disabled', () => (
		<div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
			<FlatButton disabled onClick={action('FlatButton')}>
				Disabled
			</FlatButton>
		</div>
	))
	.add('as disabled with accent color', () => (
		<div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
			<FlatButton disabled accentColor={'#49C617'} onClick={action('FlatButton')}>
				Disabled
			</FlatButton>
		</div>
	));