//0812
//jest환경구축ing

// https://leetcode.com/problems/return-length-of-arguments-passed/submissions/
//전달된 인수의 수를 반환하는 argumentsLength 함수를 작성
//Acceptance Rate 92.9%

function argumentsLength(...args: any[]): number {
  return args.length;
}