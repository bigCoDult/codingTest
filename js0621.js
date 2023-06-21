//0621
https://school.programmers.co.kr/learn/courses/30/lessons/181863
Lv. 0	rny_string 		89%
배운것
    삼항연산자와 ruduce의 return
        function solution(rmStr) 
        {
            return rmStr.split('').reduce((str1, checkM) => 
            {
                return checkM === 'm' ? str1 + 'rn' : str1 + checkM;
            }, '');
        }
    .replaceAll(/m/g, "rn");
    리플레이스 메소드
    
function solution(rnStr) 
{
  return rnStr.replaceAll(/m/g, "rn");
}

https://school.programmers.co.kr/learn/courses/30/lessons/181941
Lv. 0	문자 리스트를 문자열로 변환하기 		89%

function solution(arr) 
{
    return arr.join("");
}

https://school.programmers.co.kr/learn/courses/30/lessons/181864
Lv. 0	문자열 바꿔서 찾기 		89%         includes
배운것
    Number() .split('') .reduce() .includes
    의 컴비네이션

function solution(str1, patn) 
{
    let i = 0;
    return Number(str1.split('').reduce( (str2, ab) => 
    {return ab == 'A' ? str2 + 'B' : str2 +'A';}, '').includes(patn));
}
