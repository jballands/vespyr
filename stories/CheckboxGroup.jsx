/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CheckboxGroup from '../src/CheckboxGroup';
import CheckboxItem from '../src/CheckboxItem';

storiesOf('CheckboxGroup', module)
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
		<CheckboxGroup
			defaultSelections={['netflix', 'hulu']}
			onOptionClick={id => action(`CheckboxGroup -> ${id}`)()}>
			<CheckboxItem id="netflix">Netflix</CheckboxItem>
			<CheckboxItem id="hulu">Hulu</CheckboxItem>
			<CheckboxItem id="youtube">YouTube Red</CheckboxItem>
		</CheckboxGroup>
	))
	.add('with title', () => (
		<CheckboxGroup
			defaultSelections={['breckenridge', 'heavenly', 'vail']}
			title="Ski Areas"
			onOptionClick={id => action(`CheckboxGroup -> ${id}`)()}>
			<CheckboxItem id="breckenridge">Breckenridge</CheckboxItem>
			<CheckboxItem id="keystone">Keystone</CheckboxItem>
			<CheckboxItem id="heavenly">Heavenly</CheckboxItem>
			<CheckboxItem id="vail">Vail</CheckboxItem>
			<CheckboxItem id="abasin">A-Basin</CheckboxItem>
		</CheckboxGroup>
	))
	.add('with color', () => (
		<CheckboxGroup
			defaultSelections={['light']}
			color="#FFA100"
			title="Coffee Beans"
			onOptionClick={id => action(`CheckboxGroup -> ${id}`)()}>
			<CheckboxItem id="light">Light Roast</CheckboxItem>
			<CheckboxItem id="medium">Medium Roast</CheckboxItem>
			<CheckboxItem id="dark">Dark Roast</CheckboxItem>
		</CheckboxGroup>
	))
	.add('with accentColor', () => (
		<CheckboxGroup
			defaultSelections={['easiest']}
			accentColor="#F71CFF"
			title="Difficulty"
			onOptionClick={id => action(`CheckboxGroup -> ${id}`)()}>
			<CheckboxItem id="easiest">Easiest</CheckboxItem>
			<CheckboxItem id="moredifficult">More Difficult</CheckboxItem>
			<CheckboxItem id="mostdifficult">Most Difficult</CheckboxItem>
			<CheckboxItem id="expertsonly">Experts Only</CheckboxItem>
		</CheckboxGroup>
	))
	.add('with disabled', () => (
		<CheckboxGroup
			defaultSelections={['nuhhuh', 'nada']}
			disabled
			title="Disabled"
			onOptionClick={id => action(`CheckboxGroup -> ${id}`)()}>
			<CheckboxItem id="nuhhuh">Can't Click This</CheckboxItem>
			<CheckboxItem id="nada">Or This</CheckboxItem>
			<CheckboxItem id="nope">...Or This</CheckboxItem>
		</CheckboxGroup>
	))
	.add('with disabled and color', () => (
		<CheckboxGroup
			defaultSelections={['light']}
			color="#FFA100"
			disabled
			title="Coffee Beans"
			onOptionClick={id => action(`CheckboxGroup -> ${id}`)()}>
			<CheckboxItem id="light">Light Roast</CheckboxItem>
			<CheckboxItem id="medium">Medium Roast</CheckboxItem>
			<CheckboxItem id="dark">Dark Roast</CheckboxItem>
		</CheckboxGroup>
	))
	.add('with CheckboxItem disabled', () => (
		<CheckboxGroup
			defaultSelections={['hulu']}
			onOptionClick={id => action(`CheckboxGroup -> ${id}`)()}>
			<CheckboxItem disabled id="netflix">
				Netflix
			</CheckboxItem>
			<CheckboxItem id="hulu">Hulu</CheckboxItem>
			<CheckboxItem id="youtube">YouTube Red</CheckboxItem>
		</CheckboxGroup>
	))
	.add('as complex RadioGroup', () => (
		<CheckboxGroup
			defaultSelections={['brutalmoose']}
			title="Creators"
			onOptionClick={id => action(`CheckboxGroup -> ${id}`)()}>
			<CheckboxItem id="brutalmoose">
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
			</CheckboxItem>
			<CheckboxItem id="lucahjin">
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
			</CheckboxItem>
			<CheckboxItem id="squirrel">
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
			</CheckboxItem>
			<CheckboxItem id="lgr">
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
			</CheckboxItem>
		</CheckboxGroup>
	));
