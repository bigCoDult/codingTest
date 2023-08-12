// boolean 은 빈 값이 아니다.
// null 은 빈 값으로 처리한다
// undefined 는 빈 값으로 처리한다
// number 는 빈 값이 아니다.
// string의 길이가 0 이면 빈 값으로 처리한다
// symbol 은 빈 값이 아니다.
// 배열의 길이가 0이면 빈 값으로 처리한다
// 객체에 프로퍼티가 없으면 빈 값으로 처리한다.

import { isEmpty } from './index'

describe('isEmpty 함수는', () => {
    test('boolean 은 빈 값이 아니다', () => {
        expect(isEmpty(true)).toBe(false);
        expect(isEmpty(false)).toBe(false);
    });
    test('null 은 빈 값으로 처리한다', () => {
        expect(isEmpty(null)).toBe(true);
    });
    test('undefined 는 빈 값으로 처리한다', () => {
        expect(isEmpty(undefined)).toBe(true);
    });
    test('number 는 빈 값이 아니다', () => {
        expect(isEmpty(0)).toBe(false);
        expect(isEmpty(1)).toBe(false);
    });
    test('string의 길이가 0 이면 빈 값으로 처리한다', () => {
        expect(isEmpty('')).toBe(true);
    });
    test('symbol 은 빈 값이 아니다.', () => {
        expect(isEmpty(Symbol())).toBe(false);
    });
    test('배열의 길이가 0이면 빈 값으로 처리한다', () => {
        expect(isEmpty([])).toBe(true);
    });
    test('객체에 프로퍼티가 없으면 빈 값으로 처리한다', () => {
        expect(isEmpty({})).toBe(true);
    });
})