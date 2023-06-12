https://school.programmers.co.kr/learn/courses/30/lessons/181936
공배수

function solution(number, n, m) 
{
    let nem = number/n;
    let mem = number/m;
    
    return ( nem==Math.floor(nem) ) 
        && ( mem==Math.floor(mem) ) 
        ? 1 : 0
}

https://school.programmers.co.kr/learn/courses/30/lessons/181937
n의 배수

function solution(number, n) 
{
    let nem = number/n;
    
    return ( nem==Math.floor(nem) ) ? 1 : 0;
}

https://school.programmers.co.kr/learn/courses/30/lessons/181845
문자열로 변환
배운것
    숫자를 문자열로 바꾸려면
        <변수명>.toString();

function solution(n) 
{
    return stringNumber = n.toString();
}