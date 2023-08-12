// boolean 은 빈 값이 아니다.
// null 은 빈 값으로 처리한다
// undefined 는 빈 값으로 처리한다
// number 는 빈 값이 아니다.
// string의 길이가 0 이면 빈 값으로 처리한다
// symbol 은 빈 값이 아니다.
// 배열의 길이가 0이면 빈 값으로 처리한다
// 객체에 프로퍼티가 없으면 빈 값으로 처리한다.

import { isEmpty } from './index'

describe('isEmpty함수에서', () => {
    // boolean 은 빈 값이 아니다.
    test('boolean 은 빈 값이 아니다', () => {
        expect(isEmpty(true)).toBe(false);
        expect(isEmpty(false)).toBe(false);
    })
})