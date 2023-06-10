
//20230610

https://school.programmers.co.kr/learn/courses/30/lessons/181929
원소들의 곱과 합
배운것
    statement의 참거짓 판별
        Boolean()
    boolean 값의 숫자 캐스팅
        Number()

function solution(numList) 
{
    let sSum = 0;
    let xXum = 1;
  
    for(i=0; i < numList.length; i++)
        xXum = xXum * numList[i];
     for(i=0; i < numList.length; i++)
        sSum += numList[i];
   
    sSum = sSum * sSum;
    
    return Number( Boolean(xXum < sSum) );
}

https://school.programmers.co.kr/learn/courses/30/lessons/181850
정수 부분

function solution(flo)
{
    return Math.floor(flo);
}

https://school.programmers.co.kr/learn/courses/30/lessons/181842
부분 문자열
배운것
    문자열안에 문자열이 있는지 확인하려면
        str2.includes(str1)

function solution(str1, str2) 
{
  return Number( Boolean( str2.includes(str1) ) );  
}

https://school.programmers.co.kr/learn/courses/30/lessons/120825
문자 반복 출력하기
배운것
    배열을 문자열로 합치기
        arr1.join("")

function solution(str1, n) 
{
    let nStr = [];
    
    for(i=0;i<str1.length;i++)
      nStr[i] = str1[i].repeat(n);
    
    return nStr.join("");
}

https://school.programmers.co.kr/learn/courses/30/lessons/181848
문자열을 정수로 변환하기

function solution(nStr) 
{
    return Number(nStr);
}

https://school.programmers.co.kr/learn/courses/30/lessons/181933
flag에 따라 다른 값 반환하기

function solution(n1, n2, flag) 
{
    return flag ? n1 + n2 : n1 - n2;
}