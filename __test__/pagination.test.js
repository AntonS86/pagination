import { createListPage, currentPage, totalPage } from '../src/js/pagination';

describe('pagination testing', () => {

    test('return a list of 10 items page shift 2', () => {
        const pageList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const pageShift = 2;
        expect(createListPage(pageList, 1, pageShift )).toEqual([1, 2, 3, 4, 5]);
        expect(createListPage(pageList, 2, pageShift )).toEqual([1, 2, 3, 4, 5]);
        expect(createListPage(pageList, 3, pageShift )).toEqual([1, 2, 3, 4, 5]);
        expect(createListPage(pageList, 4, pageShift )).toEqual([2, 3, 4, 5, 6]);
        expect(createListPage(pageList, 5, pageShift )).toEqual([3, 4, 5, 6, 7]);
        expect(createListPage(pageList, 9, pageShift )).toEqual([6, 7, 8, 9, 10]);

        expect(createListPage(pageList, 10, pageShift )).toEqual([6, 7, 8, 9, 10]);
        expect(createListPage(pageList, 11, pageShift )).toEqual([6, 7, 8, 9, 10]);
        expect(createListPage(pageList, 24, pageShift )).toEqual([6, 7, 8, 9, 10]);
        expect(createListPage(pageList, 0, pageShift )).toEqual([1, 2, 3, 4, 5]);
        expect(createListPage(pageList, -3, pageShift )).toEqual([1, 2, 3, 4, 5]);
    });

    test('return a list of 6 items page shift 2', () => {
        const pageList = [1, 2, 3, 4, 5, 6];
        const pageShift = 2;
        expect(createListPage(pageList, 1, pageShift )).toEqual([1, 2, 3, 4, 5]);
        expect(createListPage(pageList, 2, pageShift )).toEqual([1, 2, 3, 4, 5]);
        expect(createListPage(pageList, 3, pageShift )).toEqual([1, 2, 3, 4, 5]);
        expect(createListPage(pageList, 4, pageShift )).toEqual([2, 3, 4, 5, 6]);
        expect(createListPage(pageList, 5, pageShift )).toEqual([2, 3, 4, 5, 6]);
        expect(createListPage(pageList, 6, pageShift )).toEqual([2, 3, 4, 5, 6]);
    });

    test('return a list of 5 items page shift 1', () => {
        const pageList = [1, 2, 3, 4, 5];
        const pageShift = 1;
        expect(createListPage(pageList, 1, pageShift )).toEqual([1, 2, 3]);
        expect(createListPage(pageList, 2, pageShift )).toEqual([1, 2, 3]);
        expect(createListPage(pageList, 3, pageShift )).toEqual([2, 3, 4]);
        expect(createListPage(pageList, 4, pageShift )).toEqual([3, 4, 5]);
        expect(createListPage(pageList, 5, pageShift )).toEqual([3, 4, 5]);

    });

    test('return a list of 2 items page shift 2', () => {
        const pageList = [1, 2];
        const pageShift = 2;
        expect(createListPage(pageList, 1, pageShift )).toEqual([1, 2]);
        expect(createListPage(pageList, 2, pageShift )).toEqual([1, 2]);

    });

    test('return a list of 2 items page shift 2', () => {
        const pageList = [1];
        const pageShift = 2;
        expect(createListPage(pageList, 1, pageShift )).toEqual([1]);
        expect(createListPage(pageList, 2, pageShift )).toEqual([1]);

    });

    test('return a list of 10 items page shift 3', () => {
        const pageList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const pageShift = 3;
        expect(createListPage(pageList, 1, pageShift )).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(createListPage(pageList, 2, pageShift )).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(createListPage(pageList, 3, pageShift )).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(createListPage(pageList, 4, pageShift )).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(createListPage(pageList, 5, pageShift )).toEqual([2, 3, 4, 5, 6, 7, 8]);
        expect(createListPage(pageList, 6, pageShift )).toEqual([3, 4, 5, 6, 7, 8, 9]);
        expect(createListPage(pageList, 9, pageShift )).toEqual([4, 5, 6, 7, 8, 9, 10]);
        expect(createListPage(pageList, 10, pageShift )).toEqual([4, 5, 6, 7, 8, 9, 10]);

    });
});

describe('current page test', () => {

    test('test 1', () => {
        expect(currentPage(0, 10, 10)).toBe(1);
        expect(currentPage(10, 10, 10)).toBe(2);
        expect(currentPage(20, 10, 10)).toBe(3);
        expect(currentPage(30, 10, 10)).toBe(4);
    });

    test('test 2', () => {
        expect(currentPage(0, 10, 6)).toBe(1);
        expect(currentPage(0, 10, 2)).toBe(1);
        expect(currentPage(6, 6, 3)).toBe(2);
        expect(currentPage(30, 15, 10)).toBe(3);
        expect(currentPage(15, 5, 2)).toBe(4);
        expect(currentPage(50, 5, 2)).toBe(11);
    });
});


describe('total page test', () => {

    test('test 1', () => {
        expect(totalPage(31, 10)).toBe(4);
        expect(totalPage(15, 5)).toBe(3);
        expect(totalPage(6, 8)).toBe(1);
    });
});
