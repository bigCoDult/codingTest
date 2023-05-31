https://school.programmers.co.kr/learn/courses/30/lessons/120824?language=javascript
짝수 홀수 개수

//it was treated as correct
//test case 3/6 succeed
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
/* test case 3/6 succeed
테스트 1
입력값 〉    [1, 2, 3, 4, 5]
기댓값 〉    [2, 3]
실행 결과 〉    테스트를 통과하였습니다.
테스트 2
입력값 〉    [1, 3, 5, 7]
기댓값 〉    [0, 4]
실행 결과 〉    테스트를 통과하였습니다.
테스트 3
입력값 〉    [0, 0, 0, 1, 0, 1, 0, 3, 0, 2, 2, 2, 2, 0, 0, 2, 2, 0]
기댓값 〉    [6, 3]
실행 결과 〉    실행한 결괏값 [15,3]이 기댓값 [6,3]과 다릅니다.
테스트 4
입력값 〉    [0, 0, 0, 1, 1, 0, 0, 2, 2, 2, 2]
기댓값 〉    [4, 2]
실행 결과 〉    실행한 결괏값 [9,2]이 기댓값 [4,2]과 다릅니다.
테스트 5
입력값 〉    []
기댓값 〉    [0, 0]
실행 결과 〉    테스트를 통과하였습니다.
테스트 6
입력값 〉    [0, 0]
기댓값 〉    [0, 0]
실행 결과 〉    실행한 결괏값 [2,0]이 기댓값 [0,0]과 다릅니다.
테스트 결과 (~˘▾˘)~
6개 중 3개 성공 
*/
 
//it was treated as wrong
//test case 6/6 succeed
function solution(numList) 
{
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < numList.length)
    {
        while (0 == numList[i])
            i++;
        if (0 == (numList[i] % 2)) 
            j++;
        else if (1 == (numList[i] % 2)) 
            k++;
        i++;
    }

    let oddEven = [j, k];
    return oddEven;
}
/* test case 3/6 succeed
테스트 1
입력값 〉    [1, 2, 3, 4, 5]
기댓값 〉    [2, 3]
실행 결과 〉    테스트를 통과하였습니다.
테스트 2
입력값 〉    [1, 3, 5, 7]
기댓값 〉    [0, 4]
실행 결과 〉    테스트를 통과하였습니다.
테스트 3
입력값 〉    [0, 0, 0, 1, 0, 1, 0, 3, 0, 2, 2, 2, 2, 0, 0, 2, 2, 0]
기댓값 〉    [6, 3]
실행 결과 〉    테스트를 통과하였습니다.
테스트 4
입력값 〉    [0, 0, 0, 1, 1, 0, 0, 2, 2, 2, 2]
기댓값 〉    [4, 2]
실행 결과 〉    테스트를 통과하였습니다.
테스트 5
입력값 〉    []
기댓값 〉    [0, 0]
실행 결과 〉    테스트를 통과하였습니다.
테스트 6
입력값 〉    [0, 0]
기댓값 〉    [0, 0]
실행 결과 〉    테스트를 통과하였습니다.
테스트 결과 (~˘▾˘)~
6개 중 6개 성공 
*/