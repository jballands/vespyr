/* eslint-disable react/jsx-no-bind */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BoldButton from '../src/BoldButton';

storiesOf('BoldButton', module)
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
	.add('as default', () => (
		<BoldButton onClick={action('BoldButton')}>BoldButton</BoldButton>
	))
	.add('with style', () => (
		<BoldButton
			onClick={action('BoldButton')}
			style={{ width: 200, height: 100 }}>
			BoldButton
		</BoldButton>
	))
	.add('with accentColor', () => (
		<div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
			<BoldButton accentColor={'#00B7FF'} onClick={action('BoldButton')}>
				#00B7FF
			</BoldButton>
			<BoldButton accentColor={'#FFEC00'} onClick={action('BoldButton')}>
				#FFEC00
			</BoldButton>
			<BoldButton accentColor={'#D53DFF'} onClick={action('BoldButton')}>
				#D53DFF
			</BoldButton>
		</div>
	))
	.add('with children', () => (
		<BoldButton onClick={action('BoldButton')}>
			<div
				style={{
					display: 'flex',
					flexFlow: 'row nowrap',
					alignContent: 'center',
				}}>
				<img
					src="https://cdns.iconmonstr.com/wp-content/assets/preview/2013/240/iconmonstr-paper-plane-1.png"
					style={{ width: 17, height: 17, marginRight: 5 }}
				/>
				<span>Send</span>
			</div>
		</BoldButton>
	))
	.add('with disabled', () => (
		<BoldButton disabled onClick={action('BoldButton')}>
			Disabled
		</BoldButton>
	))
	.add('with disabled & accentColor', () => (
		<BoldButton
			disabled
			accentColor={'#00B7FF'}
			onClick={action('BoldButton')}>
			Disabled
		</BoldButton>
	));
