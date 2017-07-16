import React from 'react';
import { storiesOf } from '@storybook/react';
import FlatButton from '../src/FlatButton';

storiesOf('FlatButton', module)
	.add('as default', () => (
		<div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
			<FlatButton>
				FlatButton
			</FlatButton>
		</div>
	))
	.add('with accent color', () => (
		<div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
			<FlatButton accentColor={'#00B7FF'}>
				#00B7FF
			</FlatButton>
			<FlatButton accentColor={'#FFEC00'}>
				#FFEC00
			</FlatButton>
			<FlatButton accentColor={'#D53DFF'}>
				#D53DFF
			</FlatButton>
		</div>
	));