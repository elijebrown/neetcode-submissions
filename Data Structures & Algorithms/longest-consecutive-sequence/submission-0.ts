class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
longestConsecutive(nums: number[]): number {
  const set: Set<number> = new Set(nums);
  let max = 0;
  for (const num of nums) {
    if (!set.has(num - 1)) {
      let x = num + 1;
      while (set.has(x)) {
        ++x;
      }
      if (x - num > max) {
        max = x - num;
      }
    }
  }
  return max;
}
}
