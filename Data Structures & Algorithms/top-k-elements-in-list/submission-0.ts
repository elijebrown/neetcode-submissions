class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
  // hashmap: O(n) time con: O(n) space.
  const map: Map<number, number> = new Map();

  for (const num of nums) {
    const query = map.get(num);
    if (query) {
      map.set(num, query + 1);
    } else {
      map.set(num, 1);
    }
  }
  return Array.from(map)
    .sort(([, countA], [, countB]) => countB - countA)
    .map(([val]) => val)
    .slice(0, k);
}
}
