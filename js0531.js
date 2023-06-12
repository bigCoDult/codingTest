https://school.programmers.co.kr/learn/courses/30/lessons/120814
피자 나눠 먹기 (1)

function solution(n) 
{
    return Math.floor(n / 7) + (0 != n % 7); 
}


https://school.programmers.co.kr/learn/courses/30/lessons/120833#
배열 자르기

function solution(numbers, num1, num2) 
{
    let i = 0;
    let k = num1;
    let toThe = [];
    while(k <= num2)
    {
        toThe[i] = numbers[k];
        i++;
        k++;
    }
    return toThe;
}


https://school.programmers.co.kr/learn/courses/30/lessons/120824?language=javascript
짝수 홀수 개수

function solution(numList) 
{
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < numList.length)
    {
        if (0 == (numList[i] % 2)) 
            j++;
        else
            k++;
        i++;    
    }
    
    let oddEven = [j, k];
    return oddEven;
}