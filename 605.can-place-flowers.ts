/*
 * @lc app=leetcode id=605 lang=typescript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let cnt = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] == 0) {
      const emptyLeft = i == 0 || flowerbed[i - 1] == 0;
      const emptyRight = i == flowerbed.length - 1 || flowerbed[i + 1] == 0;

      if (emptyLeft && emptyRight) {
        flowerbed[i] = 1;
        cnt++;
        if(cnt >= n) return true;
      }
    }
  }
  return cnt >= n;
}
// @lc code=end
