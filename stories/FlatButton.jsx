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
			<FlatButton accentColor={'#49C617'}>
				#49C617
			</FlatButton>
			<FlatButton accentColor={'#D53DFF'}>
				#D53DFF
			</FlatButton>
		</div>
	))
	.add('with arbitrary children', () => (
		<div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
			<FlatButton>
				<div style={{ display: 'flex', flexFlow: 'row nowrap', alignContent: 'center' }}>
					<img src='https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-x-mark-10.png' 
						style={{ width: 17, height: 17, marginRight: 5 }} />
					<span>Delete</span>
				</div>
			</FlatButton>
		</div>
	));