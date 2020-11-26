import adjustDecimals from './adjust-decimals';

test('Normal correction', () => {
 expect(adjustDecimals(3455.666)).toEqual(3455.67);
});

test('Correction with adjust: 4', () => {
 expect(adjustDecimals(999.787878, 4)).toEqual(999.7879);
});

test('Correction with adjust: 3 and internal correction', () => {
 expect(adjustDecimals(5666.8999, 3)).toEqual(5666.9);
});
