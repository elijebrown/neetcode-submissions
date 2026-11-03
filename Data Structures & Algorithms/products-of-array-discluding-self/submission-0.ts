class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const prefix = new Array(n).fill(1);
  const suffix = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }
  return prefix.map((p, i) => p * suffix[i]);

  // use prefix array and then when a user asks for specific index, just do
  // array[i-1] * array[i+1]
}
}
