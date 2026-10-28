class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
twoSum(nums: number[], target: number): number[] {
        // keep every number in hashmap, value: index
        // for each value, check completement (target - num), then check that in map
        const map: Map<number, number> = new Map()
        for (const [k, v] of Object.entries(nums)){
            const complement = target - v
            const query = map.get(complement)
            if (query !== undefined){
                return [query, Number(k)]
            }
            else {
                map.set(v,Number(k))
            }
        }
        return []
    }
}
