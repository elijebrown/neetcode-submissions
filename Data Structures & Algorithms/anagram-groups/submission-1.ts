class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
groupAnagrams(strs: string[]): string[][] {
  // naive first approach:
  // sorted strin key, sorted, array value with the actual strings
  const sortStr = (str: string): string =>
    str
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join();
  const map: Map<string, string[]> = new Map();
  for (const str of strs) {
    const sum = sortStr(str);
    const query = map.get(sum);
    if (query !== undefined) {
      query.push(str);
    } else {
      map.set(sum, [str]);
    }
  }
  return Array.from(map.values());
}
}
