/**
 * Edge Cases: When prices.length < 2, nothing to sell. Profit = 0
 * Algorithm: 
 *  Profit variable tracks the greatest difference between prices[i] and some prices[i-m]
 *  Buy index should be the lowest value to the left of the sellIndex(i)
 *  - Scan through array, with prices[i] being a potential selling point
 *  - IF prices[i-1] < minPrice: -> profit will always be greater in this case with sell day i
 *      DO minPrice = prices[i-1]
 *  With updated low price, calculate profit
 *  - IF profit > maxProfit:
 *      DO maxProfit = profit
 */

/**
 * Edge case: If there are fewer than two prices, no transaction is possible,
 * so return 0.
 *
 * Algorithm: Scan the prices from left to right. Keep track of the lowest
 * price seen so far as the best day to buy. For each price, treat it as a
 * possible selling price and calculate the profit from buying at that lowest
 * price. Keep the greatest profit found. If every possible transaction loses
 * money, return 0.
 */
class Solution {
maxProfit(prices: number[]): number {
  if (prices.length <= 1) {
    return 0;
  }

  let buyIdx = 0;
  let profit = prices[1] - prices[buyIdx];
  for (let i = 2; i < prices.length; ++i) {
    if (prices[buyIdx] > prices[i - 1]) {
      buyIdx = i - 1;
    }
    let count = prices[i] - prices[buyIdx];
    if (profit < count) {
      profit = count;
    }
  }

  return Math.max(profit, 0);
}
}

