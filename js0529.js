//https://school.programmers.co.kr/learn/courses/30/lessons/120803

function solution(num1, num2) {
  var answer = num1 - num2;
  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/181910

function solution(my_string, n) {
    
  var whenCut = my_string.length - n;
  var answer = my_string.substring(whenCut);
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

//https://school.programmers.co.kr/learn/courses/30/lessons/120804

function solution(num1, num2) {
  var answer = num1 * num2;
  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120810

function solution(num1, num2) {
  var answer = num1 % num2;
  return answer;
}