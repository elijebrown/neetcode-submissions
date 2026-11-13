class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        // if ascending alphabetical order doesn't matter:
        /**
         * right pointer moves with index
         * left pointer moves if duplicate found in hashset.
         *  use hashset key = char, value = index. left pointer jumps to index
         */
        if (!s.length || s.length === 1){
            return s.length
        }

        let max = 0
        let localMax = 0

        // pre req: min length === 2
        let left = 0
        const map: Map<string, number> = new Map()

        for (const [idx, val] of Array.from(s).entries()){
            // if val !in map: ++localMax
            // if localMax > max set max
            // if val in map, left = map.get(val<the repeated char>)
                // localMax = localMax - (map.get() - left <the prev left position>)
            const charIdx = map.get(val)
            if (charIdx === undefined){
                ++localMax
                map.set(val, idx)
            }
            else {
                localMax -= charIdx - left
                // remove all characters in gap by small for loop 
                // remove all including repeated char, then add it back at updated index
                for (let i = left; i<= charIdx; ++i){
                    map.delete(s[i])
                }
                left = charIdx + 1
                map.set(val,idx)
            }

            if (localMax > max){
                max = localMax
            }
        }
        return max
    }
}
