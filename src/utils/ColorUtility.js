//
//	jballands/vespyr
//	ColorUtility.js
//
//	© 2017 Jonathan Ballands
//

import Color from 'color';

export default {
	black: () => Color('#000000'),
	blue: () => Color('#00B7FF'),
	hintGray: () => Color('#BBBBBB'),
	dark: () => Color('#3A3A3A'),
	darkHoverGray: () => Color('#252525'),
	defaultGray: () => Color('#EBEBEB'),
	disabledGray: () => Color('#DADADA'),
	hoverGray: () => Color('#EFEFEF'),
	offWhite: () => Color('#f4f4f4'),
	secondaryGray: () => Color('#CCCCCC'),
	red: () => Color('#D0011B'),
	white: () => Color('#FFFFFF'),
};

export function makeColor(c) {
	if (!c) {
		return undefined;
	}
	return Color(c);
}

export function colorsEqual(c1, c2) {
	const _c1 = makeColor(c1);
	const _c2 = makeColor(c2);

	if (!_c1 || !_c2) {
		return false;
	}

	if (_c1.rgbNumber() === _c2.rgbNumber()) {
		return true;
	}

	return false;
}
