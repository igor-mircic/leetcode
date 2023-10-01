/*
 * @lc app=leetcode id=345 lang=typescript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
function reverseVowels(s: string): string {
  let start = 0;
  let end = s.length - 1;
  const ans = s.split("");
  while(start < end){
    if(!isVowel(ans[start])) start++;
    if(!isVowel(ans[end])) end--;
    if(isVowel(ans[start]) && isVowel(ans[end])) {
      const tmp = ans[start];
      ans[start] = ans[end];
      ans[end] = tmp;
      start++; end--;
    }
  }
  return ans.join("");
}
function isVowel(str: string): boolean {
  str = str.toLocaleLowerCase();
  return str === "a" || str === "e" || str === "i" || str === "o" || str === "u";
}
// @lc code=end
