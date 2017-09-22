/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RadioGroup from '../src/RadioGroup';
import RadioItem from '../src/RadioItem';

storiesOf('RadioGroup', module)
	.addDecorator(story => (
		<div
			style={{
				margin: '20px 5px',
				fontFamily:
					'-apple-system, BlinkMacSystemFont, "Roboto", system, "Helvetica", "Arial", san-serif',
				letterSpacing: '1.0px',
			}}>
			{story()}
		</div>
	))
	.add('as default', () => (
		<RadioGroup
			defaultSelection="netflix"
			onOptionClick={id => action(`RadioGroup -> ${id}`)()}>
			<RadioItem id="netflix">Netflix</RadioItem>
			<RadioItem id="hulu">Hulu</RadioItem>
			<RadioItem id="youtube">YouTube Red</RadioItem>
		</RadioGroup>
	))
	.add('with title', () => (
		<RadioGroup
			defaultSelection="breckenridge"
			title="Ski Areas"
			onOptionClick={id => action(`RadioGroup -> ${id}`)()}>
			<RadioItem id="breckenridge">Breckenridge</RadioItem>
			<RadioItem id="keystone">Keystone</RadioItem>
			<RadioItem id="heavenly">Heavenly</RadioItem>
			<RadioItem id="vail">Vail</RadioItem>
			<RadioItem id="abasin">A-Basin</RadioItem>
		</RadioGroup>
	))
	.add('with color', () => (
		<RadioGroup
			defaultSelection="light"
			color="#FFA100"
			title="Coffee Beans"
			onOptionClick={id => action(`RadioGroup -> ${id}`)()}>
			<RadioItem id="light">Light Roast</RadioItem>
			<RadioItem id="medium">Medium Roast</RadioItem>
			<RadioItem id="dark">Dark Roast</RadioItem>
		</RadioGroup>
	))
	.add('with accentColor', () => (
		<RadioGroup
			defaultSelection="easiest"
			accentColor="#F71CFF"
			title="Difficulty"
			onOptionClick={id => action(`RadioGroup -> ${id}`)()}>
			<RadioItem id="easiest">Easiest</RadioItem>
			<RadioItem id="moredifficult">More Difficult</RadioItem>
			<RadioItem id="mostdifficult">Most Difficult</RadioItem>
			<RadioItem id="expertsonly">Experts Only</RadioItem>
		</RadioGroup>
	))
	.add('with disabled', () => (
		<RadioGroup
			defaultSelection="nuhhuh"
			disabled
			title="Disabled"
			onOptionClick={id => action(`RadioGroup -> ${id}`)()}>
			<RadioItem id="nuhhuh">Can't Click This</RadioItem>
			<RadioItem id="nada">Or This</RadioItem>
			<RadioItem id="nope">...Or This</RadioItem>
		</RadioGroup>
	))
	.add('as complex RadioGroup', () => (
		<RadioGroup
			defaultSelection="brutalmoose"
			title="Creators"
			onOptionClick={id => action(`RadioGroup -> ${id}`)()}>
			<RadioItem id="brutalmoose">
				<div
					style={{
						display: 'flex',
						flexFlow: 'row',
						alignItems: 'center',
					}}>
					<img
						style={{
							borderRadius: '50%',
							width: 50,
							marginRight: 10,
						}}
						src="https://yt3.ggpht.com/-9V4pafhXtos/AAAAAAAAAAI/AAAAAAAAAAA/3GVxGvlr5R0/s100-c-k-no-mo-rj-c0xffffff/photo.jpg"
					/>
					Brutalmoose
				</div>
			</RadioItem>
			<RadioItem id="lucahjin">
				<div
					style={{
						display: 'flex',
						flexFlow: 'row',
						alignItems: 'center',
					}}>
					<img
						style={{
							borderRadius: '50%',
							width: 50,
							marginRight: 10,
						}}
						src="https://yt3.ggpht.com/-l2kxhA1OASo/AAAAAAAAAAI/AAAAAAAAAAA/xk1yr1qNXSw/s100-c-k-no-mo-rj-c0xffffff/photo.jpg"
					/>
					Lucahjin
				</div>
			</RadioItem>
			<RadioItem id="squirrel">
				<div
					style={{
						display: 'flex',
						flexFlow: 'row',
						alignItems: 'center',
					}}>
					<img
						style={{
							borderRadius: '50%',
							width: 50,
							marginRight: 10,
						}}
						src="https://yt3.ggpht.com/-nLMVlrExeAQ/AAAAAAAAAAI/AAAAAAAAAAA/zbauonBmKh0/s100-c-k-no-mo-rj-c0xffffff/photo.jpg"
					/>
					Squirrel
				</div>
			</RadioItem>
			<RadioItem id="lgr">
				<div
					style={{
						display: 'flex',
						flexFlow: 'row',
						alignItems: 'center',
					}}>
					<img
						style={{
							borderRadius: '50%',
							width: 50,
							marginRight: 10,
						}}
						src="https://yt3.ggpht.com/-CsHahRaj2wE/AAAAAAAAAAI/AAAAAAAAAAA/3PP6XFMR-wk/s100-c-k-no-mo-rj-c0xffffff/photo.jpg"
					/>
					LGR
				</div>
			</RadioItem>
		</RadioGroup>
	));
