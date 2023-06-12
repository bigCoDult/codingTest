https://school.programmers.co.kr/learn/courses/30/lessons/120826
특정 문자 제거하기
배운것 : 
split 메소드 = 문자열을 뜯어서 배열로 만들어 줌

function solution(stringg, letter) 
{
    let withoutL = stringg.split("").filter(bet => bet !== letter);
    return withoutL.join("");
}


https://school.programmers.co.kr/learn/courses/30/lessons/120811
중앙값 구하기
배운것 :
인덱스에 무언가를 나눈값을 쓰려면 Math.floor를 쓸것

function solution(intArr) 
{
    intArr.sort((a,b) => a - b); 
    return intArr[Math.floor(intArr.length / 2)];
}


https://school.programmers.co.kr/learn/courses/30/lessons/120583
중복된 숫자 개수
배운것 :
filter 메소드의 =>

function solution(array, n) 
{
   return howMany = array.filter((num) => num == n).length;    
}


