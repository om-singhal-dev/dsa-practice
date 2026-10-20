   // LeetCode #121 Best Time to Buy and Sell Stock - O(n) time, O(1) space
   // Pattern: track the best value so far (running minimum), check the profit each day

var maxProfit = function(prices) {
    let minPrice = prices[0];
    let best = 0;

    for(let i = 0; i < prices.length; i++){
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        };
        if (prices[i] - minPrice > best){
            best = prices[i] - minPrice;
        }
    }
    return best;
};