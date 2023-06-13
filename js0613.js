//20230613
https://school.programmers.co.kr/learn/courses/30/lessons/120906
Lv. 0	자릿수 더하기		89%	-	FALSE	while, Math.floor		
배운것
    int로 캐스팅
        parseInt();

function solution(n) 
{
    let i = 0;
    let summ = 0;
    
    let arrN = [];
    arrN = n.toString().split("");
    
    for(i=0; i < arrN.length; i++)
    {
        summ += parseInt(arrN[i]);
    }
    
    return summ;
}

https://school.programmers.co.kr/learn/courses/30/lessons/181873
Lv. 0	특정한 문자를 대문자로 바꾸기 		89%	-	FALSE	includes, toUpperCase		
배운것 
    문자열은 인덱스를 지정해, 
    하나를 빼올수는 있지만, 
    개별 요소를 수정할 수는 없다.

    대분자로 바꾸기
        <char>.toUpperCase();
    
    빈 문자열 선언하는 방법
        let str1 = "";

    문자열의 길이
        str1.length;

    빈 문자열에 문자쌓기
        for(i=0; i < n; i++)
            str2 +=str1[i]; 
    
function solution(str1, char1) 
{ 
    let i = 0;
    let strUp = "";
    
    while(i < str1.length)
    {
        if (str1[i] == char1)
            strUp += char1.toUpperCase();
        else
            strUp += str1[i];
        i++;
    }
    
    return strUp;
}

https://school.programmers.co.kr/learn/courses/30/lessons/181907
Lv. 0	문자열의 앞의 n글자 		89%	-	FALSE	slice, length																				

function solution(str1, n) 
{
   let str2 = "";
    
    for(i=0; i < n; i++)
        str2 +=str1[i]; 
    return str2;
}