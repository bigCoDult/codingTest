//0622

https://school.programmers.co.kr/learn/courses/30/lessons/181906
Lv. 0	접두사인지 확인하기 		89%
배운것 
    특정 문자열로 시작하는지 확인
        str1.startsWith(패턴);

function solution(str1, prefix)
{
   return str1.startsWith(prefix) ? 1 : 0;
}

https://school.programmers.co.kr/learn/courses/30/lessons/181888
Lv. 0	n개 간격의 원소들 		89%
배운것
    매개변수를 받아서 필터링 하기
        arr1.filter((_, index) => index % n === 0);
            "_"는 매개변수를 생략하기 위해 표기함
                안하면 오류 생김

function solution(nList, n) 
{
    return nList.filter((_, index) => index % n === 0);
}

https://school.programmers.co.kr/learn/courses/30/lessons/181908
Lv. 0	접미사인지 확인하기 		89%
배운것 
    특정 문자열로 끝나는지 확인
        str1.endsWith(패턴);

function solution(str1, prefix)
{
   return str1.endsWith(prefix) ? 1 : 0;
}