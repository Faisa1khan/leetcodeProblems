// Given a string, return the length of the longest substring without
// repeating characters.

// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"
// pwwkew
function lengthOfLongestSubstring(s) {
  let windowCharMap = new Object();
  let windowStart = 0;
  let windowEnd = 0;

  for (let i = 0; i < s.length; i++) {
    const endChar = s[i];
    if (windowCharMap[endChar] >= windowStart) {
      windowStart = windowCharMap[endChar] + 1;
    }
    windowCharMap[endChar] = i;
    windowEnd = Math.max(windowEnd, i - windowStart + 1);
  }

  return windowEnd;
}

module.exports = lengthOfLongestSubstring;
