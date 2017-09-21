/* eslint-disable react/jsx-no-bind */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Slider from '../src/Slider';

storiesOf('Slider', module)
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
	.add('as default', () => <Slider />)
	.add('with style', () => <Slider style={{ width: 500 }} />)
	.add('with title', () => <Slider title="Intensity" />)
	.add('with labels', () => (
		<Slider leftLabel="Low" rightLabel="High" title="Engagement" />
	))
	.add('with showValue', () => (
		<Slider
			leftLabel="Low"
			rightLabel="High"
			title="Engagement"
			showValue
		/>
	));
