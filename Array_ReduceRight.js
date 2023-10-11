
//ReduceRight
let arr2 = function () {
  let arr1 = [
    [6, 5],
    [4, 3],
    [2, 1],
  ];
  let result = arr1.reduceRight((accumulator, currentvalue) =>
    accumulator.concat(currentvalue)
  );
  console.log(result);
};
arr2();
/*
//Example2
const number=function(){
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.flatMap((num) => [num, num * 2]);

console.log(doubledNumbers);
}
number();
*/