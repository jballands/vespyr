import React from 'react';
import { storiesOf } from '@storybook/react';
import BoldButton from '../src/BoldButton';

storiesOf('BoldButton', module)
	.add('as default', () => (
		<div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
			<BoldButton>
				BoldButton
			</BoldButton>
		</div>
	))
	.add('with accent color', () => (
		<div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
			<BoldButton accentColor={'#00B7FF'}>
				#00B7FF
			</BoldButton>
			<BoldButton accentColor={'#FFEC00'}>
				#FFEC00
			</BoldButton>
			<BoldButton accentColor={'#D53DFF'}>
				#D53DFF
			</BoldButton>
		</div>
	))
	.add('with arbitrary children', () => (
		<div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
			<BoldButton>
				<div style={{ display: 'flex', flexFlow: 'row nowrap', alignContent: 'center' }}>
					<img src='https://cdns.iconmonstr.com/wp-content/assets/preview/2013/240/iconmonstr-paper-plane-1.png' 
						style={{ width: 17, height: 17, marginRight: 5 }} />
					<span>Send</span>
				</div>
			</BoldButton>
		</div>
	))
	.add('as disabled', () => (
		<div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
			<BoldButton disabled>
				Disabled
			</BoldButton>
		</div>
	))
	.add('as disabled with accent color', () => (
		<div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
			<BoldButton disabled accentColor={'#00B7FF'}>
				Disabled
			</BoldButton>
		</div>
	));