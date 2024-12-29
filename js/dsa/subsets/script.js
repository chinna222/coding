var subsets = function (nums, curr = [], res = []) {
  if (nums.length === 0) {
    res.push(curr);
    return;
  }
  const taken = [...curr, nums[0]];
  const notTaken = [...curr];
  const remaningArray = nums.slice(1, nums.length);
  subsets(remaningArray, taken, res);
  subsets(remaningArray, notTaken, res);
  return res;
};

const res = subsets([1, 2, 3]);
console.log("res", res);
