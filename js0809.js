
//0808

https://school.programmers.co.kr/learn/courses/30/lessons/181940
Lv. 0	문자열 곱하기 		89% repeat
function solution(string, n) {
    let nString = '';
    for(let i=0; i< n; i++)
        nString = nString + string
    return nString;
}

https://school.programmers.co.kr/learn/courses/30/lessons/181896
Lv. 0	첫 번째로 나오는 음수 		89% findIndex
의문점
    두가지로 풀었는데 긴버전이 의미가 있나?


function solution(numArr) {
    return numArr.findIndex(item => item < 0);
}

function solution(numArr) {
    const regex = /-\d+/g;
    let index_of_minus=[-1];
    numArr.forEach( (item, index) => {
        if(regex.test(item)) {
            index_of_minus.push(index);
        }
    } );
    
    if(index_of_minus.length > 1)
        return index_of_minus[1];
    else
        return index_of_minus[0];
}

https://school.programmers.co.kr/learn/courses/30/lessons/181928
Lv. 0	이어 붙인 수 		89% String -> Number
function solution(numArr) {
    let stringOdd='';
    let stringEven='';
    numArr.forEach( (item) => {
        if(item % 2 === 1) {
            stringOdd += item;
        }
        else if(item % 2 === 0) {
            stringEven += item;
        }
    } );
    return stringEven/1 + stringOdd/1
}

