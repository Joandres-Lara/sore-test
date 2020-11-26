import adjustDecimal from './adjust-decimals';
import { promedio, moda, reorder } from './array';

it('Should calculate promedio', () => {
 expect(adjustDecimal(promedio)).toEqual(32.45);
});

it('Should find moda', () => {
 expect(moda).toBe(4);
});

it('Should reorder', () => {
 expect(reorder).toMatchObject([0, 4, 5, 6, 7, 8, 9, 12, 14, 32, 55, 66, 67, 89, 190]);
});
