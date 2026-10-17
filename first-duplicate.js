function firstDuplicate(arr) {
  const seen = {};
  for (const n of arr) {
    seen[n] = (seen[n] || 0) + 1;
    if (seen[n] === 2){
        return n;
    }
  }
  return -1;
}

console.log(firstDuplicate([3, 8, 1, 8, 5])); // expect 8
console.log(firstDuplicate([1, 2, 3]));       // expect -1