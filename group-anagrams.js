// LeetCode #49 Group Anagrams - O(n * k log k) time, O(n * k) space

var groupAnagrams = function(strs) {
    const groups = {};

    for (const word of strs) {
        const key = sortWord(word);
        groups[key] = groups[key] || [];
        groups[key].push(word);
    }
    return Object.values(groups);
};
function sortWord(word){
    word = [...word];
    word.sort();
    return word.join("");
}