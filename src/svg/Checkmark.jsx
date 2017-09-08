//
//	jballands/vespyr
//	CaretDown.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ColorUtility from '../utils/ColorUtility';

const Container = styled.div`
	width: 12px;
	height: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Svg = styled.svg`
	width: 100%;
	height: 100%;
`;

export default class Checkmark extends React.Component {
	static displayName = 'Checkmark';

	static propTypes = {
		className: PropTypes.string,
		color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		style: PropTypes.object,
	};

	static defaultProps = {
		color: ColorUtility.black(),
	};

	render() {
		const { className, color, style } = this.props;

		return (
			<Container className={className} style={style}>
				<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path
						d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z"
						fill={color}
					/>
				</Svg>
			</Container>
		);
	}
}
