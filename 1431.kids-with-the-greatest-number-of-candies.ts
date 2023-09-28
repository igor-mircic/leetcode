/*
 * @lc app=leetcode id=1431 lang=typescript
 *
 * [1431] Kids With the Greatest Number of Candies
 */

// @lc code=start
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const maxCandles = Math.max(...candies);
    return candies.map(c => c + extraCandies >= maxCandles);
};
// @lc code=end

