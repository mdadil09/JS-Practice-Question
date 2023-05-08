//Declaration of an array
let person = {
  name: "Adil",
  age: 23,
};
let arr = ["apple", "banana", "cherry", person];

//Adding and removing from the last
arr.push("oranges");
arr.pop();
//Adding and removing from the top
arr.unshift("watermelon");
arr.shift();

//Looping on array
for (let i = 0; i < arr.length; i++) {
  //console.log(arr[i]);
}

let i = 0;
while (i < arr.length) {
  //console.log(arr[i]);
  i++;
}

//inbuilt loop

const number = [1, 2, 3, 4, 5];

const newNum = number.map((item, index, array) => {
  return item + 5;
});

const newNums = number.filter((item, index, array) => {
  return item > 2;
});

const sum = number.reduce((prev, item) => {
  return prev + item;
}, 0);

const res = number.some((item, index, array) => {
  return item > 3;
});

const res1 = number.every((item, index, array) => {
  return item > 3;
});

const res2 = number.find((item, index, array) => {
  return item > 3;
});

//spread and rest opreators
const nums = [1, 2, 3];
const nums1 = [4, 5, 6, 7];

const finalNums = [...nums, ...nums1];

function num(...numbers) {
  return numbers;
}

//console.log(num(nums, nums1));

//concat

const newArr = nums.concat(nums1, arr);

//slice
const newArr1 = arr.slice(0, 2);

//splice
arr.splice(1, 2, "watermelon", "mango");

//console.log(arr);

//fill
const dummy = [1, 2, 3, 4];

dummy.fill(0);

//console.log(dummy);

//findIndex
const index = nums.findIndex((item) => item === 2);
//console.log(index);

//flat
const flatEx = [1, [2, 3], [[4, 5], 6]];

const flattenedArray = flatEx.flat(2);

//console.log(flattenedArray);

//reverse
nums.reverse();

//console.log(nums);

//sort
const unsorted = [3, 1, 5, 0, 7, 2, 6];
unsorted.sort((a, b) => b - a);

console.log(unsorted);
