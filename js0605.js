https://school.programmers.co.kr/learn/courses/30/lessons/120847
최댓값 만들기 (1)
배운것 :
sort의 역순 정렬

nums.sort((a, b) => b - a);
function solution(nums) 
{
    nums.sort((a, b) => b - a);
    return nums[0] * nums[1];
}



https://school.programmers.co.kr/learn/courses/30/lessons/120836
순서쌍의 개수

function solution(n) 
{
  //이중 for문
    let count = 0;
    for (let i = 1; i <= n; i++)
    {
        if (n / i == Math.floor(n / i))
            count++;
    }
    return count;
}



https://school.programmers.co.kr/learn/courses/30/lessons/120818
옷가게 할인 받기

function solution(price) 
{
  //if else, Math.floor
    if (price >= 50_0000)
        return Math.floor(price * (1-0.2));
    else if (price >= 30_0000)
        return Math.floor(price * (1-0.1));
    else if (price >= 10_0000)
       return Math.floor(price * (1-0.05));
    else
        return price;
}