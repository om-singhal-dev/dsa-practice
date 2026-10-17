// LeetCode #242 Valid Anagram - frequency counter, O(n) time, O(1) space

var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }
    const seen = {};
    for(let i = 0; i < s.length; i++) {
        seen[s[i]] = (seen[s[i]] || 0) + 1;
    }
    for(let j = 0; j < t.length; j++) {
        if (t[j] in seen && seen[t[j]] != 0){
            seen[t[j]] = seen[t[j]] - 1;
        } else {
            return false;
        }
    }
    return true;
};