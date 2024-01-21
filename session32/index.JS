// function increaseByN(arr, n) {
//   for (let index in arr) {
//     arr[index] = arr[index] + n;
//   }
//   return arr;
// }
// console.log(increaseByN([1, 2, 3, 4], 2));
// console.log(increaseByN([1, 2, 3, 4], 10));

// function multiplyByN(arr, n) {
//   for (let index in arr) {
//     arr[index] = arr[index] * n;
//   }
//   return arr;
// }
// console.log(multiplyByN([1, 2, 3, 4], 2));

// *******
// function map(arr, fn) {
//   for (let index in arr) {
//     arr[index] = fn(arr[index]);
//   }
//   return arr;
// }
// let res1 = map([1, 2, 3, 4], function (element) {
//   return element + 2;
// });
// let res2 = map([1, 2, 3, 4], function (element) {
//   return element * 2;
// });
// console.log(res1);
// console.log(res2);

// *******
let result = [1, 4, 5, 6, 2].find(function (e, i) {
  return e > 2;
});

console.log(result);

function fakeFind(arr, fn) {
  for (let index in arr) {
    fn(arr[index], index);
  }
}
fakeFind([1, 4, 5, 6, 2], function (e, i) {
  return e == 3;
});
