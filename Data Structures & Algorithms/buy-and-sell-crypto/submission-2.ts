class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
maxProfit(prices: number[]): number {
  // find the max difference between two different indexes in the array.
  // if the max is negative, return 0 (AKA don't make any transactions. )
  // target is O(n) time and O(1) space, so in other words, the max profit stored.

  // naive approach, O(n^2), check, each.
  // move left side of window if i+1 < i, that is guaranteed to break more profit

  //edge cases, empty array or 1, (can't sell)
  if (prices.length <= 1) {
    return 0;
  }

  // left moves when next index is smaller
  // then:
  // calculate profit vs count
  let buyIdx = 0;
  let profit = prices[1] - prices[buyIdx];
  for (let i = 2; i < prices.length; ++i) {
    if (prices[buyIdx] > prices[i - 1]) {
      buyIdx = i - 1;
    }
    let count = prices[i] - prices[buyIdx];
    if (profit < count) {
      //console.log(`idx: ${i}, val: ${prices[i]}`);
      profit = count;
    }
  }

  //console.log(buyIdx);
  return Math.max(profit, 0);
}
}
