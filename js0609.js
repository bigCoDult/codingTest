//20230609


//https://school.programmers.co.kr/learn/courses/30/lessons/120585
//머쓱이보다 키 큰 사람

function solution(highArr, heightt) 
{
    return highArr.filter((n) => n >heightt).length;  
}


//https://school.programmers.co.kr/learn/courses/30/lessons/120903
//배열의 유사도

function solution(string1, string2) 
{
    let i = 0;
    let sum = 0;
    
    if (string1.length > string2.length)
    {
        while (i < string2.length)
        {
            sum += string1.includes(string2[i])
            i++;
        }
    }
    else
    {
        while (i < string1.length)
        {
            sum += string2.includes(string1[i])
            i++;
        }   
    }
    return sum;
}


//https://school.programmers.co.kr/learn/courses/30/lessons/120809
//배열 두배 만들기

function solution(intArr) 
{
    return  intArr.map((num) => num * 2);
}
