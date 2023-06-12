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





