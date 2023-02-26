/* eslint-disable */

function filterImperative(nums: number[]) {
  const result = [];
  for (const num of nums) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }
  return result;
}

function filterDeclarative(nums: number[]) {
  return nums.filter(num => num % 2 === 0);
}

function filterRecursive(nums: number[]): number[] {
  if (nums.length === 0) {
    return [];
  }
  if (nums[0] % 2 === 0) {
    return [nums[0], ...filterRecursive(nums.slice(1))];
  }
  return filterRecursive(nums.slice(1));
}

function filterRecursiveTernary(nums: number[]): number[] {
  return nums.length === 0
    ? []
    : nums[0] % 2 === 0
    ? [nums[0], ...filterRecursiveTernary(nums.slice(1))]
    : filterRecursiveTernary(nums.slice(1));
}

// 判斷方法：可不可以替換成一個式子
