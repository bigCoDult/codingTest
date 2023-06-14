//0614

https://school.programmers.co.kr/learn/courses/30/lessons/181843
Lv. 0	부분 문자열인지 확인하기 		89%	-	FALSE

function solution(str1, target) 
{
    return Number( str1.includes(target) );   
}

https://school.programmers.co.kr/learn/courses/30/lessons/181876
Lv. 0	소문자로 바꾸기		89%	-	FALSE

function solution(str1)
{
    return str1.toLowerCase();
}

https://school.programmers.co.kr/learn/courses/30/lessons/181926
Lv. 0	수 조작하기 1 		89%	-	FALSE
function solution(n, ctrlStr) {
    for(let i = 0; i < ctrlStr.length; i++)
        {
            if (ctrlStr[i] == "w")
                n += 1;
            else if (ctrlStr[i] == "s")
                n -= 1;
            else if (ctrlStr[i] == "d")
                n += 10;
            else if (ctrlStr[i] == "a")
                n -= 10;
        }
    return n;
}