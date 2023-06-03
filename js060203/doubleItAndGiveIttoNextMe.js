https://school.programmers.co.kr/learn/courses/30/lessons/120822
문자열 뒤집기

function solution(stringg) 
{
    let i = 0;
    let gnirtss = [];
    while (i <= stringg.length)
    {
        gnirtss[i] = stringg[stringg.length - i];
        i++;
    }
    return gnirtss.join('');
}


https://school.programmers.co.kr/learn/courses/30/lessons/120898
편지

function solution(message) 
{
   return 2*message.length;
}


https://school.programmers.co.kr/learn/courses/30/lessons/120821
배열 뒤집기
배운것 shift
function solution(arrayy) 
{
    let i = 0;
    let yyarra = [];
    while (i <= arrayy.length)
    {
        yyarra[i] = arrayy[arrayy.length - i];
        i++;
    }
    yyarra.shift();
    return yyarra;
}




https://school.programmers.co.kr/learn/courses/30/lessons/120841
점의 위치 구하기

function solution(dotXy) 
{
    if (dotXy[0] > 0)
        if (dotXy[1] > 0)
            return 1;
        else
            return 4;
    else
        if (dotXy[1] > 0)
            return 2;
        else
            return 3;
}


https://school.programmers.co.kr/learn/courses/30/lessons/120819
아이스 아메리카노
배운것 : Math.floor(값)

function solution(money) 
{
  return [Math.floor(money / 5500), money % 5500];
}



https://school.programmers.co.kr/learn/courses/30/lessons/181933
flag에 따라 다른 값 반환하기
배운것 : 삼항연산자
flag ? 실행1 : 실행2 ;

function solution(a, b, flag) 
{
    return answerr = flag ? a+b : a - b;
}






