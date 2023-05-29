//https://school.programmers.co.kr/learn/courses/30/lessons/181910

function solution(my_string, n) {
    
  var whenCut = my_string.length - n;
  var answer = my_string.substring(whenCut);
  return answer;
}