// Ques 3 - Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number of unique elements in nums.

// Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_]

function help(nums) {
  let size = nums.length;

  for (let i = 0; i < size; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, i);
    }
  }
  return nums.length;
}

function removeDuplicates(nums) {
  let size = nums.length;
  let count = 0;

  for (let i = 0; i < size; i++) {
    if (nums[i] !== nums[i + 1]) {
      count++;
    }
  }
  return count;
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
