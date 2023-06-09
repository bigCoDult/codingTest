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


//20230605

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

//20230604

chttps://school.programmers.co.kr/learn/courses/30/lessons/120826
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

//20230603

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

//20230601

https://school.programmers.co.kr/learn/courses/30/lessons/120889
삼각형의 완성조건 (1)
배운것 = eval() / ... / join('+') / Math.sign

function solution(sides) 
{
    if (1 == Math.sign(eval(sides.join('+')) - 2 * Math.max(...sides)))
        return 1; 
    else
        return 2;   
}


https://school.programmers.co.kr/learn/courses/30/lessons/120854
배열 원소의 길이

function solution(strlist) {
    var lengArr = [];
    var i = 0;
    while (i < strlist.length)
    {
        lengArr[i] = strlist[i].length
        i++;
    }
    return lengArr;
}


https://school.programmers.co.kr/learn/courses/30/lessons/120849
모음 제거

function solution(stringg) {
    let vowLess = [];
    let i = 0;
    let k = 0;
    while (i < stringg.length)
    {
        if (stringg[i] != 'a')
              if (stringg[i] != 'e')
                    if (stringg[i] != 'i')
                          if (stringg[i] != 'o')
                                if (stringg[i] != 'u')
                                {
                                    vowLess[k] = stringg[i];
                                    k++;
                                }
        i++;
    }
    return vowLess.join('');
}


//20230531

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


//20230530

https://school.programmers.co.kr/learn/courses/30/lessons/120807
숫자 비교하기
function solution(num1, num2) {
  if (num1 === num2)
    return 1;
  else
    return -1;
}

ttps://school.programmers.co.kr/learn/courses/30/lessons/120820
나이출력
function solution(age) {
  var year = 2022 - age + 1;
  return year;
}
https://school.programmers.co.kr/learn/courses/30/lessons/120802
두수의 합

function solution(num1, num2) {
  var answer = num1 + num2;
  return answer;
}

https://school.programmers.co.kr/learn/courses/30/lessons/120805
몫 구하기
function solution(num1, num2) {
  var answer = Math.floor(num1 / num2);
  return answer;
}

https://school.programmers.co.kr/learn/courses/30/lessons/120806
두 수의 나눗셈
function solution(num1, num2) {
  var answer = Math.floor(num1 / num2 * 1000);
  return answer;
}

https://school.programmers.co.kr/learn/courses/30/lessons/120829
각도기
function solution(angle) {
  if (angle < 90)
    return 1;
  else if (angle == 90)
    return 2
  else if (angle > 90 && angle < 180)
    return 3;
  else
    return 4;
}

https://school.programmers.co.kr/learn/courses/30/lessons/120831
짝수의 합
function solution(n) {
  if ((Math.floor(n / 2)) != (n / 2))
    n = n - 1;
  let here = 0;
  while (n > 0) {
    here = here + n;
    n = n - 2;
  }
  return here;
}

https://school.programmers.co.kr/learn/courses/30/lessons/120817
배열의 평균값
function solution(numbers) 
{
    var totall = 0;
    var i = 0;
    while (numbers[i])
    {
        totall = totall + numbers[i];        
        i++;
    }
    return (totall/i);
}

https://school.programmers.co.kr/learn/courses/30/lessons/120830
양꼬치
function solution(n, k) 
{
    totall = 12000*n + 2000*k;
    totall = totall - 2000 * Math.floor(n / 10);
    return totall;
}

//20230529

//https://school.programmers.co.kr/learn/courses/30/lessons/181910

function solution(my_string, n) {
    
  var whenCut = my_string.length - n;
  var answer = my_string.substring(whenCut);
  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120810

function solution(num1, num2) {
  var answer = num1 % num2;
  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/181951

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log('a = ' + Number(input[0]));   
    console.log("b = " + Number(input[1]));
});

//https://school.programmers.co.kr/learn/courses/30/lessons/120803

function solution(num1, num2) {
  var answer = num1 - num2;
  return answer;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/120804

function solution(num1, num2) {
  var answer = num1 * num2;
  return answer;
}
