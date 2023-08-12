// boolean 은 빈 값이 아니다.
// null 은 빈 값으로 처리한다
// undefined 는 빈 값으로 처리한다
// number 는 빈 값이 아니다.
// string의 길이가 0 이면 빈 값으로 처리한다
// symbol 은 빈 값이 아니다.
// 배열의 길이가 0이면 빈 값으로 처리한다
// 객체에 프로퍼티가 없으면 빈 값으로 처리한다.

export const isEmpty = (value: any) => {
    // boolean 은 빈 값이 아니다.
    if (typeof value === 'boolean') {
        return false
    }

    // null 은 빈 값으로 처리한다
    if (value === null) {
        return true
    }

    // undefined 는 빈 값으로 처리한다
    if (value === undefined) {
        return true
    }

    // number 는 빈 값이 아니다.
    if (typeof value === 'number') {
        return false;
    }

    // string의 길이가 0 이면 빈 값으로 처리한다
    if (typeof value === 'string' && value.length === 0) {
        return true;
    }

    // symbol 은 빈 값이 아니다.
    if (typeof value === 'symbol') {
        return false;
    }

    // 배열의 길이가 0이면 빈 값으로 처리한다
    if (Array.isArray(value) && value.length === 0) {
        return true
    }
    
    // 객체에 프로퍼티가 없으면 빈 값으로 처리한다.
    if (typeof value === 'object' && Object.keys(value).length === 0) {
        return true;
    }

    return
}