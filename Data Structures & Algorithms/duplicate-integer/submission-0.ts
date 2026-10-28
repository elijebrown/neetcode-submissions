class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const st: Set<number> = new Set()
        for (const num of nums){
            if (st.has(num)){
                return true
            }
            else{
                st.add(num)
            }
        }
        return false
    }
}
