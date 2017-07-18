import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BoldButton from '../src/BoldButton';

storiesOf('BoldButton', module)
	.addDecorator(story => (
		<div style={{ margin: '20px 5px' }}>
			{story()}
		</div>
	))
	.add('as default', () => (
		<BoldButton onClick={action('BoldButton')}>
			BoldButton
		</BoldButton>
	))
	.add('with accent color', () => (
		<div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
			<BoldButton accentColor={'#00B7FF'} onClick={action('#00B7FF')}>
				#00B7FF
			</BoldButton>
			<BoldButton accentColor={'#FFEC00'} onClick={action('#FFEC00')}>
				#FFEC00
			</BoldButton>
			<BoldButton accentColor={'#D53DFF'} onClick={action('#D53DFF')}>
				#D53DFF
			</BoldButton>
		</div>
	))
	.add('with arbitrary children', () => (
		<BoldButton onClick={action('Send')}>
			<div style={{ display: 'flex', flexFlow: 'row nowrap', alignContent: 'center' }}>
				<img src='https://cdns.iconmonstr.com/wp-content/assets/preview/2013/240/iconmonstr-paper-plane-1.png' 
					style={{ width: 17, height: 17, marginRight: 5 }} />
				<span>Send</span>
			</div>
		</BoldButton>
	))
	.add('as disabled', () => (
		<BoldButton disabled onClick={action('Disabled')}>
			Disabled
		</BoldButton>
	))
	.add('as disabled with accent color', () => (
		<BoldButton disabled accentColor={'#00B7FF'} onClick={action('Disabled')}>
			Disabled
		</BoldButton>
	));