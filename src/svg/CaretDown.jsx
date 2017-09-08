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

export default class CaretDown extends React.Component {
	static displayName = 'CaretDown';

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
					<path d="M12 21l-12-18h24z" fill={color} />
				</Svg>
			</Container>
		);
	}
}
