https://leetcode.com/problems/add-two-promises/
Add Two Promises

js 풀이
const addTwoPromises = async function(promise1, promise2) {
  return  await promise1 + await promise2 
};

ts 풀이
interface PromiseArgs{
  promise1:Promise<number>, 
  promise2:Promise<number>
};
interface PromiseSum {
  (arg:PromiseArgs):Promise<number>
};

const addTwoPromises:PromiseSum = async ({promise1, promise2}:PromiseArgs) => {
  return  await promise1 + await promise2 
};