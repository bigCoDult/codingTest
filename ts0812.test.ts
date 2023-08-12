import { argumentsLength } from './ts0812'

describe('isEmpty 함수는', () => {
    test('boolean 은 빈 값이 아니다', () => {
        expect(argumentsLength(true)).toBe(false);
        expect(argumentsLength(false)).toBe(false);
    });