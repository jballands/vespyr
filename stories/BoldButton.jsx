import React from 'react';
import { storiesOf } from '@storybook/react';
import BoldButton from '../src/BoldButton';

storiesOf('BoldButton', module)
	.add('as default', () => (
		<div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
			<BoldButton>
				Hello world!
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
	.add('as disabled', () => (
		<div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
			<BoldButton>
				Hello world!
			</BoldButton>
		</div>
	));