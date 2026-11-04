class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
isPalindrome(s: string): boolean {
  // first, clean string
  s = s.toLowerCase().replaceAll(/[^a-z0-9]/gi, "");
  // find half
  const half = Math.trunc(s.length / 2);
  let idx = -1;
  for (let i = 0; i <= half; i++) {
    if (s.at(i) !== s.at(idx)) {
      return false;
    }
    idx--;
  }
  return true;
}
}
