import { sum } from '../src/js/sum';

test('testing sum', () => {
    expect(sum(5, 5)).toEqual(10);
    expect(sum(7, 2)).toEqual(9);
    expect(sum(0, 0)).toEqual(0);
});
