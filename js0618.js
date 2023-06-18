//0618
https://school.programmers.co.kr/learn/courses/30/lessons/181946
Lv. 0	문자열 붙여서 출력하기 		89%
어렵...

const readline = require('readline');
const rl = readline.createInterface
(
    {
        input: process.stdin,
        output: process.stdout
    }
);

let input = [];

rl.on
(
    'line', function (line) 
    {
        input = line.split(' ');
    }
).on
(
    'close', function () 
    {
        const str1 = input[0];
        const str2 = input[1];
        console.log(str1 + str2);
    }
);

https://school.programmers.co.kr/learn/courses/30/lessons/181892
Lv. 0	n 번째 원소부터 		89%
배운것
    slice에서 n번째원소의 인덱스는 n-1임을 잊지말자

function solution(intList, n) 
{
    return intList.slice(n-1, intList.length);
}

https://school.programmers.co.kr/learn/courses/30/lessons/181889
Lv. 0	n 번째 원소까지 		89%
배운것
    리스트의 특정 인덱스부터 특정 인덱스까지 잘라내기
        list1.slice(n1, n2);

function solution(intList, n) 
{
    return intList.slice(0, n);
}