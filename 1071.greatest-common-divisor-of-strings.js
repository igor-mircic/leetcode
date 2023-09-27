/*
 * @lc app=leetcode id=1071 lang=javascript
 *
 * [1071] Greatest Common Divisor of Strings
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

function gcdOfStrings(str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";
    gcd = (x, y) => {
        if (!y) return x;
        return gcd(y, x % y);
    };

    let div = gcd(str1.length, str2.length);

    return str1.substring(0, div);
}
// @lc code=end