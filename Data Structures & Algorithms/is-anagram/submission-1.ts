class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  for (const char of s) {
    const bombostyle = t.indexOf(char);
    if (bombostyle === -1) {
      return false;
    }
    t = t.replace(char, "");
  }
  return true;
}
}
