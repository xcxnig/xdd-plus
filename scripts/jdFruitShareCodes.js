let codes = ['01e8a758e24749c4ae2e051336eaca6c
for (let i = 0; i < codes.length; i++) {
	const index = (i + 1 === 1) ? '' : (i + 1);
	exports['FruitShareCode' + index] = codes[i];
}