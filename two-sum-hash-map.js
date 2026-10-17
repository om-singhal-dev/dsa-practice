// LeetCode #1 Two Sum - hash map, O(n) time, O(n) space

var twoSum = function(nums, target) {
    const seen = {};

    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in seen){
            return [seen[target - nums[i]], i];
        } else {
            seen[nums[i]] = i;
        }
    }
};