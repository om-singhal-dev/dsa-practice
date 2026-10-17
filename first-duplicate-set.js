function firstDuplicate(arr){
    const seen = new Set();
    for(const n of arr){
        if(seen.has(n)){
            return n;
        } else {
            seen.add(n);
        }
    }
    return -1;
}
console.log(firstDuplicate([3, 8, 1, 8, 5]));
console.log(firstDuplicate([1, 2, 3]));